import { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { ModalNotificacao, PedidoNorma, NormaEmVigor } from "../components/ModalNotificacao";
import { FiltroNotificacao } from "../components/FiltroNotificacao";
import { FaFilePdf } from "react-icons/fa6";
import { ModalPDFViewer } from "../components/ModalPDFViewer";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma"; 
import { useNotificacaoDia } from "../context/NotificacaoDiaContext";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

function getIdFromToken(): number | null {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id_user ?? payload.id ?? null;
  } catch {
    return null;
  }
}

const formatarDataLocal = (dataStr: string | null | undefined) => {
  if (!dataStr) return "N/A";
  if (dataStr.match(/^\d{2}-\d{2}-\d{4}$/)) {
    return dataStr.replace(/-/g, '/');
  }
  if (dataStr.includes("T")) {
    try {
      const dataLimpa = dataStr.split("T")[0]; 
      const [ano, mes, dia] = dataLimpa.split("-");
      return `${dia}/${mes}/${ano}`;
    } catch {
      return dataStr;
    }
  }
  return dataStr;
};

function Notificacoes() {
  const [pedidos, setPedidos] = useState<PedidoNorma[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [modalAberto, setModalAberto] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<PedidoNorma | null>(null);
  const [normaPreview, setNormaPreview] = useState<NormaEmVigor | null>(null);

  const [modalNormaAberto, setModalNormaAberto] = useState(false);
  const [normaParaVisualizar, setNormaParaVisualizar] = useState<any>(null);

  // --- NOVO ESTADO: Controla se o carrossel está aberto ou fechado ---
  const [mostrarCarrossel, setMostrarCarrossel] = useState(false);

  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [filtroUsuario, setFiltroUsuario] = useState<string>("todos"); 
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");

  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });
  const [isCarregandoPdf, setIsCarregandoPdf] = useState(false);

  const userRole = localStorage.getItem("userRole") || "user";

  const fetchPedidos = useCallback(async () => {
    setCarregando(true);
    setErro(null);

    try {
      const token = localStorage.getItem("token");
      const idUsuario = getIdFromToken();

      let normasEmVigor: any[] = [];
      try {
        const resNormas = await fetch(`${API_URL}/norma/getnorms`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (resNormas.ok) {
          const dataNormas = await resNormas.json();
          normasEmVigor = Array.isArray(dataNormas) ? dataNormas : (dataNormas.resposta || []);
        }
      } catch (e) {
        console.warn("Aviso: Não foi possível carregar as normas atuais.");
      }

      let endpoint = `${API_URL}/pedidos/getall`; 
      if (userRole === "user") {
        endpoint = `${API_URL}/pedidos/meuspedidos/${idUsuario}`; 
      }

      const resPedidos = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!resPedidos.ok) {
        throw new Error(`Rota incorreta ou erro no servidor (Status ${resPedidos.status}).`);
      }

      const dataPedidos = await resPedidos.json();
      const listaPedidosOriginais = Array.isArray(dataPedidos) ? dataPedidos : (dataPedidos.resposta || []);
      
      const pedidosMapeados: any[] = listaPedidosOriginais.map((p: any) => {
        const alt = typeof p.alteracao === 'string' ? JSON.parse(p.alteracao) : (p.alteracao || {});
        
        const caminhoDoPdfNovo = alt.pdf_caminho || alt.pdfcaminho || "";
        const nomeDoPdfNovo = alt.pdf_nome_original || alt.pdfNomeOriginal || "Documento.pdf";

        let catAntiga = "Não informada";
        if (p.acaoAlteracao === "UPDATE") {
           const normaReal = normasEmVigor.find((n: any) => n.norm_titulo === p.norma_nome || n.id_norm === p.id_norma);
           if (normaReal) {
              catAntiga = normaReal.categoria ? (Array.isArray(normaReal.categoria) ? normaReal.categoria.join(", ") : String(normaReal.categoria)) : "Não informada";
           }
        }

        return {
          id: p.id_pedido,
          titulo: alt.norm_titulo || "Sem título", 
          norma_nome: p.norma_nome || "Desconhecida", 
          descricao: alt.norm_desc || "Sem descrição",
          categoria: alt.categoria ? (Array.isArray(alt.categoria) ? alt.categoria.join(", ") : String(alt.categoria)) : catAntiga,
          normas_relacionadas: alt.referencias || [],
          codigo: alt.norm_codigo || "N/A",
          data_emissao: formatarDataLocal(alt.emissao),
          data_pedido: formatarDataLocal(p.data_pedido),
          emissor: alt.org_desc || "N/A",
          sigla_emissor: alt.org_sigla || "",
          nome_arquivo: nomeDoPdfNovo,
          url_arquivo: caminhoDoPdfNovo, 
          tamanho: "N/A", 
          nome_solicitante: p.user_name || "Desconhecido",
          tipo_pedido: p.acaoAlteracao === "CREATE" ? "criacao" : "edicao",
          status: p.status.toLowerCase(),
          notas: alt.notas || []
        };
      });

      const codigosPedidosAprovados = new Set(
        pedidosMapeados.filter((p) => p.status === "aprovado").map((p) => p.codigo)
      );

      const normasDiretasMapeadas = normasEmVigor
        .filter((n: any) => n.norm_codigo && !codigosPedidosAprovados.has(n.norm_codigo)) 
        .map((n: any) => {
          return {
            id: (Number(n.id_norm) || Math.floor(Math.random() * 1000)) + 500000, 
            titulo: n.norm_titulo || "Sem título",
            norma_nome: n.norm_titulo || "Desconhecida",
            descricao: n.norm_desc || "Sem descrição",
            categoria: Array.isArray(n.categoria) ? n.categoria.join(", ") : (n.categoria || "Não informada"),
            normas_relacionadas: n.referencias || n.normas_associadas || [],
            codigo: n.norm_codigo || "N/A",
            data_emissao: formatarDataLocal(n.emissao),
            data_pedido: formatarDataLocal(n.criado_em), 
            emissor: n.org_criador || "N/A",
            sigla_emissor: "",
            nome_arquivo: n.pdf_caminho || "Documento.pdf",
            url_arquivo: n.pdf_caminho || "",
            tamanho: "N/A",
            nome_solicitante: n.adm_criador || "Administração / Sistema",
            tipo_pedido: "criacao",
            status: "aprovado", 
            notas: n.notas || []
          };
        });

      setPedidos([...pedidosMapeados, ...normasDiretasMapeadas]);

    } catch (e: any) {
      setErro(e.message);
    } finally {
      setCarregando(false);
    }
  }, [userRole]);

  useEffect(() => {
    fetchPedidos();
  }, [fetchPedidos]);

  const abrirPdf = async (caminho: string, nomeOriginal: string) => {
    if (!caminho) {
      alert("Nenhum arquivo PDF associado a este pedido (caminho está vazio no banco de dados).");
      return;
    }

    setIsCarregandoPdf(true);

    try {
      const token = localStorage.getItem("token");
      const safeCaminho = encodeURIComponent(caminho);
      
      const res = await fetch(`${API_URL}/norma/getpdf/${safeCaminho}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Falha ao carregar o PDF do servidor.");

      const arrayBuffer = await res.arrayBuffer();
      const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(pdfBlob);

      setPdfData({ isOpen: true, nomeArquivo: nomeOriginal || caminho, urlPdf: blobUrl });
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Erro ao tentar visualizar o PDF.");
    } finally {
      setIsCarregandoPdf(false);
    }
  };

  const fecharPdf = () => {
    if (pdfData.urlPdf && pdfData.urlPdf.startsWith("blob:")) URL.revokeObjectURL(pdfData.urlPdf);
    setPdfData({ ...pdfData, isOpen: false, urlPdf: "" });
  };

  const abrirRevisao = (pedido: PedidoNorma) => {
    setPedidoSelecionado(pedido);
    setModalAberto(true);
  };

  const handleNavegarTag = (codigoClicado: string) => {
    alert(`Visualização de normas associadas está em construção. (Código: ${codigoClicado})`);
  };

  const handleVerNormaCompleta = (normaBruta: any) => {
    if (!normaBruta) return;
    const normaFormatada = {
      ...normaBruta,
      referencias: normaBruta.referencias || normaBruta.normas_associadas || [],
      url_arquivo: normaBruta.pdf_caminho || normaBruta.url_arquivo,
      nome_arquivo: normaBruta.pdf_nome_original || normaBruta.nome_arquivo,
      notas: normaBruta.notas || []
    };
    setNormaParaVisualizar(normaFormatada);
    setModalNormaAberto(true);
  };

  const processarAceitacao = async (id: number, statusAlvo: string) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/pedidos/aceitacaopedido`, { 
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: statusAlvo, id_pedido: id })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `Status HTTP ${res.status}`);
      }
      
      setModalAberto(false);
      fetchPedidos(); 
    } catch (err: any) {
      alert(`Erro ao processar o pedido.\nDetalhe do servidor: ${err.message}`);
    }
  };

  const handleAprovar = async (id: number) => { await processarAceitacao(id, "APROVADO"); };
  const handleRecusar = async (id: number) => { await processarAceitacao(id, "REJEITADO"); };

  const parseDataParaFiltro = (dataStr: string) => {
    if (!dataStr || dataStr === "N/A") return new Date(0);
    const partes = dataStr.split("/");
    if (partes.length === 3) {
      return new Date(Number(partes[2]), Number(partes[1]) - 1, Number(partes[0]));
    }
    return new Date(0);
  };

  const usuariosUnicos = Array.from(new Set(pedidos.map(p => p.nome_solicitante)));

  const pedidosFiltrados = pedidos.filter(pedido => {
    if (filtroStatus !== "todos" && pedido.status !== filtroStatus) return false;
    if (filtroUsuario !== "todos" && pedido.nome_solicitante !== filtroUsuario) return false;
    
    if (dataInicio || dataFim) {
      const dataPed = parseDataParaFiltro(pedido.data_pedido);
      if (dataPed.getTime() === 0) return false;

      if (dataInicio) {
        const dInicio = parseDataParaFiltro(dataInicio.split("-").reverse().join("/"));
        if (dataPed < dInicio) return false;
      }
      if (dataFim) {
        const dFim = parseDataParaFiltro(dataFim.split("-").reverse().join("/"));
        dFim.setHours(23, 59, 59, 999);
        if (dataPed > dFim) return false;
      }
    }
    return true;
  });

  const limparFiltros = () => {
    setFiltroStatus("todos");
    setFiltroUsuario("todos");
    setDataInicio("");
    setDataFim("");
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case 'aprovado': return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-xs font-bold border border-green-200">Aprovado</span>;
      case 'rejeitado': 
      case 'recusado': return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-md text-xs font-bold border border-red-200">Recusado</span>;
      case 'pendente': default: return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-xs font-bold border border-yellow-200">Pendente</span>;
    }
  };

  const renderTipoPedido = (tipo: string) => {
    if (tipo === 'criacao') return <span className="bg-gray-100 text-gray-700 border border-gray-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Criação</span>;
    return <span className="bg-gray-600 text-white border border-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Edição</span>;
  };

  interface NormaCardProps {
    tipo: "criacao" | "edicao";
    titulo?: string;
    codigo?: string;
    criador?: string;
    data?: string;
    onVerCompleta?: () => void;
  }

  const NormaCard: React.FC<NormaCardProps> = ({
    tipo, titulo = "Norma_nome", codigo = "N/A", criador = "adm_criador", data = "01/01/2025", onVerCompleta
  }) => {
    const statusColor = tipo === "criacao" ? "bg-[#7d2944]" : "bg-gray-400";
    const tipoTexto = tipo === "criacao" ? "Novo" : "Atualização";

    return (
      <div className="w-full max-w-[340px] sm:max-w-[290px] md:max-w-[320px] shrink-0 bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 transition-all hover:shadow-lg mx-auto sm:mx-0">
        <div className="flex items-center gap-3">
          <span className={`w-5 h-5 rounded-full ${statusColor} shrink-0`} />
          <h3 className="text-xl sm:text-2xl font-normal text-gray-900 truncate flex-1">{tipoTexto}</h3>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded truncate max-w-[90px]">{codigo}</span>
        </div>

        <div className="w-full bg-[#D9D9D9] rounded-sm h-[110px] flex items-center justify-center p-4">
          <div className="bg-white rounded shadow-sm px-3 py-2 flex flex-col items-center justify-center border border-gray-200">
            <FaFilePdf className="text-red-600 text-3xl" />
            <span className="text-[10px] font-bold text-red-600 mt-0.5 tracking-wider">PDF</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-gray-700 text-sm sm:text-base font-normal pl-1">
          <p className="font-bold text-gray-800 truncate">{titulo}</p>
          <p className="text-sm text-gray-500 truncate">{criador}</p>
          <p className="text-xs text-gray-400">{data}</p>
        </div>

        <button onClick={onVerCompleta} className="w-full sm:w-auto self-center bg-[#D9D9D9] hover:bg-gray-300 text-gray-800 text-xs font-medium py-2 px-6 rounded-full transition-colors mt-2">
          Ver Norma Completa
        </button>
      </div>
    );
  };

  const CarrosselNotificacoes: React.FC = () => {
    const carrosselRef = useRef<HTMLDivElement>(null);
    const { normas } = useNotificacaoDia();

    const normasOrdenadas = [...normas].sort((a, b) => Number(b.id) - Number(a.id));

    const scroll = (direction: "left" | "right") => {
      if (!carrosselRef.current) return;
      const cardWidth = 280 + 24; 
      carrosselRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    };

    if (normasOrdenadas.length === 0) {
      return (
        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex justify-center text-gray-500 mt-2">
          Nenhuma norma foi criada ou atualizada hoje.
        </div>
      );
    }

    return (
      <div className="w-full relative group px-2 mt-2 transition-all duration-300">
        <button onClick={() => scroll("left")} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 transition-colors border border-gray-200">
          <FaArrowAltCircleLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div ref={carrosselRef} className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {normasOrdenadas.map((item) => (
            <NormaCard
              key={item.id}
              tipo={item.tipo}
              titulo={item.norm_titulo}
              codigo={item.norm_codigo}
              criador={item.nome_criador}
              data={item.data}
              onVerCompleta={() => handleVerNormaCompleta(item.rawNorm)} 
            />
          ))}
        </div>

        <button onClick={() => scroll("right")} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 transition-colors border border-gray-200">
          <FaArrowAltCircleRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />

      {/* ÁREA DO HISTÓRICO COM BOTÃO MINIMIZAR */}
      <div className="w-full max-w-7xl mx-auto flex flex-col mt-4">
        <div className="flex items-center gap-4 px-2">
          <h2 className="text-xl font-bold text-[#72203E]">Histórico de Normas de Hoje</h2>
          <button 
            onClick={() => setMostrarCarrossel(!mostrarCarrossel)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 text-[#72203E] hover:bg-[#72203E] hover:text-white transition-all shadow-sm"
            title={mostrarCarrossel ? "Ocultar histórico" : "Mostrar histórico"}
          >
            {mostrarCarrossel ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {mostrarCarrossel && (
          <div className="w-full animate-fade-in">
            <CarrosselNotificacoes />
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto mt-2">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-[#72203E]">
            {userRole === "user" ? "Meus Pedidos" : "Solicitações e Normas"}
          </h1>
          {isCarregandoPdf && <span className="text-sm font-bold text-gray-500 animate-pulse">Carregando PDF...</span>}
        </div>

        <FiltroNotificacao 
          userRole={userRole}
          filtroStatus={filtroStatus} setFiltroStatus={setFiltroStatus}
          filtroUsuario={filtroUsuario} setFiltroUsuario={setFiltroUsuario}
          usuariosUnicos={usuariosUnicos}
          dataInicio={dataInicio} setDataInicio={setDataInicio}
          dataFim={dataFim} setDataFim={setDataFim}
          onLimpar={limparFiltros}
        />

        {carregando ? (
          <div className="text-center py-12 text-gray-500">Carregando dados do servidor...</div>
        ) : erro ? (
          <div className="text-center py-12 text-[#72203E]">{erro}</div>
        ) : pedidosFiltrados.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Nenhum documento encontrado.</div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-3 min-w-[950px]">
              <div className="flex items-center justify-between px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                <div className="w-[40%] pl-12">Documento / Tipo</div>
                <div className="flex items-center gap-6 w-[45%]">
                  <span className="w-16 text-center">Tamanho</span>
                  <span className="w-24 text-center">Data Criação</span>
                  <span className="flex-1">Emissor / Solicitante</span>
                </div>
                <div className="w-24 text-center pr-2">Status</div>
              </div>

              {pedidosFiltrados.map((pedido) => (
                <div key={pedido.id} onClick={() => abrirRevisao(pedido)} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-[#72203E] transition-all cursor-pointer group">
                  <div className="flex items-center gap-4 w-[40%] pr-4">
                    <input type="checkbox" onClick={(e) => e.stopPropagation()} className="w-4 h-4 cursor-pointer text-[#72203E] rounded border-gray-300 focus:ring-[#72203E]" />
                    
                    <div onClick={(e) => { e.stopPropagation(); abrirPdf(pedido.url_arquivo, pedido.nome_arquivo); }} className="bg-gray-50 border border-gray-200 p-2 rounded text-[#72203E] flex-shrink-0 hover:bg-[#72203E] hover:text-white transition-colors cursor-pointer" title="Visualizar PDF">
                      <FaFilePdf className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col overflow-hidden gap-0.5">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm text-gray-800 truncate">{pedido.tipo_pedido === 'edicao' ? pedido.norma_nome : pedido.titulo}</p>
                        {renderTipoPedido(pedido.tipo_pedido)}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{pedido.nome_arquivo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-[45%] text-sm text-gray-700">
                    <span className="w-16 text-center bg-gray-100 border border-gray-200 rounded px-1 py-0.5 text-xs font-bold text-gray-600">{pedido.tamanho}</span>
                    <span className="w-24 text-center font-bold">{pedido.data_pedido}</span>
                    <span className="flex-1 truncate font-bold text-gray-800">{pedido.nome_solicitante}</span>
                  </div>

                  <div className="w-24 flex justify-center">
                    {renderStatus(pedido.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ModalNotificacao isOpen={modalAberto} onClose={() => setModalAberto(false)} pedido={pedidoSelecionado} onAprovar={handleAprovar} onRecusar={handleRecusar} onNavegarTag={handleNavegarTag} normaPreviewData={normaPreview} onClosePreview={() => setNormaPreview(null)} />
      <ModalPDFViewer isOpen={pdfData.isOpen} onClose={fecharPdf} nomeArquivo={pdfData.nomeArquivo} urlPdf={pdfData.urlPdf} />
      <ModalVisualizarNorma isOpen={modalNormaAberto} onClose={() => setModalNormaAberto(false)} norma={normaParaVisualizar} onAbrirNormaAssociada={handleNavegarTag} />
    </div>
  );
}

export default Notificacoes;