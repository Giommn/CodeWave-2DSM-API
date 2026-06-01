import { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { ModalNotificacao, PedidoNorma, NormaEmVigor } from "../components/ModalNotificacao";
import { FiltroNotificacao } from "../components/FiltroNotificacao";
import { FaFilePdf } from "react-icons/fa6";
import { ModalPDFViewer } from "../components/ModalPDFViewer";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma"; 
import { useNotificacaoDia } from "../context/NotificacaoDiaContext";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

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

function parseDateBR(dateStr: string): Date {
  if (!dateStr) return new Date(NaN);
  
  const separador = dateStr.includes("/") ? "/" : "-";
  const partes = dateStr.split(separador);
  
  if (partes.length !== 3) return new Date(NaN);

  if (partes[0].length === 4) {
    return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  }
  return new Date(Number(partes[2]), Number(partes[1]) - 1, Number(partes[0]));
}

function isMesmoDia(dateStr: string): boolean {
  try {
    const dataNorma = parseDateBR(dateStr);
    if (isNaN(dataNorma.getTime())) return false;

    const hoje = new Date();
    return (
      dataNorma.getFullYear() === hoje.getFullYear() &&
      dataNorma.getMonth()    === hoje.getMonth()    &&
      dataNorma.getDate()     === hoje.getDate()
    );
  } catch {
    return false;
  }
}

function formatarDataParaCard(dateStr: string): string {
  try {
    const data = parseDateBR(dateStr);
    if (isNaN(data.getTime())) return dateStr;
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit", month: "2-digit", year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

interface NormaDiaCardProps {
  norma: any;
  onVerCompleta: (norma: any) => void;
}

const NormaDiaCard = ({ norma, onVerCompleta }: NormaDiaCardProps) => (
  <div className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white min-w-[220px] max-w-[240px] flex-shrink-0 transition-transform hover:-translate-y-1">
    <div className="flex items-center justify-between px-3 pt-3 pb-1">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#72203E] flex-shrink-0" />
        <span className="text-sm font-black text-gray-800 truncate max-w-[100px]">{norma.norm_titulo}</span>
      </div>
      <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded truncate max-w-[60px]">{norma.norm_codigo}</span>
    </div>

    <div className="mx-3 mt-1 mb-2 bg-gray-100 rounded-lg h-[90px] flex items-center justify-center">
      <FaFilePdf className="w-10 h-10 text-[#c0392b]" />
    </div>

    <div className="px-3 pb-1 flex flex-col gap-0.5">
      <p className="text-xs font-bold text-gray-700 truncate">{norma.norm_desc}</p>
      <p className="text-[11px] text-gray-500 font-semibold truncate">{norma.org_criador ?? "adm"}</p>
      <p className="text-[11px] text-gray-400">{formatarDataParaCard(norma.criacao || norma.criado_em || "")}</p>
    </div>

    <div className="px-3 pb-3 mt-1">
      <button
        onClick={() => onVerCompleta(norma)}
        className="w-full border border-gray-200 rounded-lg py-1.5 text-[11px] font-bold text-gray-700 hover:bg-[#72203E] hover:text-white hover:border-[#72203E] transition-colors"
      >
        Ver Norma Completa
      </button>
    </div>
  </div>
);

function Notificacoes() {
  const [pedidos, setPedidos] = useState<PedidoNorma[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [modalAberto, setModalAberto] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<PedidoNorma | null>(null);
  const [normaPreview, setNormaPreview] = useState<NormaEmVigor | null>(null);

  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [filtroUsuario, setFiltroUsuario] = useState<string>("todos"); 
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });
  const [isCarregandoPdf, setIsCarregandoPdf] = useState(false);

  const [normasHoje, setNormasHoje] = useState<any[]>([]);
  const [secaoAberta, setSecaoAberta] = useState(true); 
  const [normaModalAberta, setNormaModalAberta] = useState<any | null>(null);

  const userRole = localStorage.getItem("userRole") || "user";

  useEffect(() => {
    const fetchNormasHoje = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/norma/getnorms`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        const todas: any[] = data.resposta || [];
        
        const filtradas = todas.filter((n) => {
          const dataCriacao = n.criacao || n.criado_em || n.data_criacao;
          return dataCriacao && isMesmoDia(dataCriacao);
        });
        
        setNormasHoje(filtradas);
      } catch (err) {
        console.error("Erro ao buscar normas do dia:", err);
      }
    };
    fetchNormasHoje();
  }, []);

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

        // <<< MÁGICA DOS IDs PARA NOMES AQUI >>>
        const referenciasNomes = (alt.referencias || []).map((refId: any) => {
          const normaReal = normasEmVigor.find((n: any) => String(n.id_norm) === String(refId) || n.norm_titulo === refId);
          return normaReal ? normaReal.norm_titulo : refId;
        });

        let statusTratado = p.status.toLowerCase();
        if (statusTratado === "rejeitado") statusTratado = "recusado";

        return {
          id: p.id_pedido,
          titulo: alt.norm_titulo || "Sem título", 
          norma_nome: p.norma_nome || "Desconhecida", 
          descricao: alt.norm_desc || "Sem descrição",
          categoria: alt.categoria ? (Array.isArray(alt.categoria) ? alt.categoria.join(", ") : String(alt.categoria)) : catAntiga,
          normas_relacionadas: referenciasNomes, // Nomes aplicados
          codigo: alt.norm_codigo || "N/A",
          data_emissao: formatarDataLocal(alt.emissao),
          data_pedido: formatarDataLocal(p.data_pedido),
          emissor: alt.org_desc || "N/A",
          sigla_emissor: alt.org_sigla || "",
          nome_arquivo: nomeDoPdfNovo,
          url_arquivo: caminhoDoPdfNovo, 
          
          nome_solicitante: p.user_name || "Desconhecido",
          tipo_pedido: p.acaoAlteracao === "CREATE" ? "criacao" : "edicao",
          status: statusTratado, 
          notas: alt.notas || []
        };
      });

      setPedidos(pedidosMapeados);

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
      alert("Nenhum arquivo PDF associado a este pedido.");
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

  const handleVerNormaCompleta = (normaBruta: any) => {
    if (!normaBruta) return;
    const normaFormatada = {
      ...normaBruta,
      referencias: normaBruta.referencias || normaBruta.normas_associadas || [],
      url_arquivo: normaBruta.pdf_caminho || normaBruta.url_arquivo,
      nome_arquivo: normaBruta.pdf_nome_original || normaBruta.nome_arquivo,
      notas: normaBruta.notas || []
    };
    setNormaModalAberta(normaFormatada);
  };

  const handleNavegarTag = async (codigoClicado: string | number) => {
    try {
      const token = localStorage.getItem("token");
      
      const res = await fetch(`${API_URL}/norma/getnorms`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Erro na busca");

      const data = await res.json();
      const todasNormas = Array.isArray(data) ? data : (data.resposta || []);

      const normaEncontrada = todasNormas.find((n: any) => 
        String(n.id_norm) === String(codigoClicado) || 
        n.norm_titulo === codigoClicado || 
        n.norm_codigo === codigoClicado
      );

      if (normaEncontrada) {
        handleVerNormaCompleta(normaEncontrada);
      } else {
        alert("A norma associada não foi encontrada no banco de dados.");
      }
    } catch (err) {
      alert("A norma associada não foi encontrada no banco de dados.");
    }
  };

  const processarAceitacao = async (id: number, statusAlvo: string) => {
    try {
      const token = localStorage.getItem("token");
      const idAdminLogado = getIdFromToken(); 

      const res = await fetch(`${API_URL}/pedidos/aceitacaopedido`, { 
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: statusAlvo, id_pedido: id, id_adm: idAdminLogado })
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

  const usuariosUnicos = Array.from(new Set(pedidos.map(p => p.nome_solicitante)));

  const pedidosFiltrados = pedidos.filter(pedido => {
    if (filtroStatus !== "todos" && pedido.status !== filtroStatus) return false;
    if (filtroUsuario !== "todos" && pedido.nome_solicitante !== filtroUsuario) return false;
    
    if (dataInicio || dataFim) {
      const dataPed = parseDateBR(pedido.data_pedido);
      if (isNaN(dataPed.getTime())) return false;

      if (dataInicio) {
        const dInicio = parseDateBR(dataInicio);
        if (dataPed < dInicio) return false;
      }
      if (dataFim) {
        const dFim = parseDateBR(dataFim);
        dFim.setHours(23, 59, 59, 999);
        if (dataPed > dFim) return false;
      }
    }
    return true;
  });

  const pedidosOrdenados = [...pedidosFiltrados].sort((a, b) => {
    const dataA = parseDateBR(a.data_pedido);
    const dataB = parseDateBR(b.data_pedido);
    return dataB.getTime() - dataA.getTime();
  });

  const totalPaginas = Math.ceil(pedidosOrdenados.length / ITENS_POR_PAGINA);
  const itensExibidos = pedidosOrdenados.slice(
    (paginaAtual - 1) * ITENS_POR_PAGINA,
    paginaAtual * ITENS_POR_PAGINA
  );

  useEffect(() => {
    setPaginaAtual(1);
  }, [filtroStatus, filtroUsuario, dataInicio, dataFim]);

  const limparFiltros = () => {
    setFiltroStatus("todos");
    setFiltroUsuario("todos");
    setDataInicio("");
    setDataFim("");
    setPaginaAtual(1);
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

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />

      {normasHoje.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto mt-4 transition-all">
          <div
            className="flex items-center justify-between cursor-pointer mb-4"
            onClick={() => setSecaoAberta(!secaoAberta)}
          >
            <h2 className="text-lg font-black text-[#72203E]">
              Histórico de Normas de Hoje
            </h2>
            {secaoAberta
              ? <IoChevronUpOutline className="w-5 h-5 text-[#72203E]" />
              : <IoChevronDownOutline className="w-5 h-5 text-[#72203E]" />
            }
          </div>

          {secaoAberta && (
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
              {normasHoje.map((norma) => (
                <NormaDiaCard
                  key={norma.id_norm}
                  norma={norma}
                  onVerCompleta={(n) => handleVerNormaCompleta(n)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-[#72203E]">
            {userRole === "user" ? "Meus Pedidos" : "Solicitações e Pedidos"}
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
                <div className="w-[40%] pl-12">Documento</div>
                <div className="flex items-center gap-6 w-[45%]">  
                  <span className="w-24 text-center">Data Criação</span>
                  <span className="flex-1">Solicitante</span>
                </div>
                <div className="w-24 text-center pr-2">Status</div>
              </div>

              {itensExibidos.map((pedido) => (
                <div key={pedido.id} onClick={() => abrirRevisao(pedido)} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-[#72203E] transition-all cursor-pointer group">
                  <div className="flex items-center gap-4 w-[40%] pr-4">
                    
                    
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
                    
                    <span className="w-24 text-center font-bold">{pedido.data_pedido}</span>
                    <span className="flex-1 truncate font-bold text-gray-800">{pedido.nome_solicitante}</span>
                  </div>

                  <div className="w-24 flex justify-center">
                    {renderStatus(pedido.status)}
                  </div>
                </div>
              ))}
            </div>

            {totalPaginas > 1 && (
              <div className="flex items-center justify-center gap-4 mt-6 py-2 border-t border-gray-100">
                <button 
                  onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
                  disabled={paginaAtual === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronLeft className="w-3 h-3" />
                </button>
                
                <span className="text-gray-600 font-bold text-sm bg-gray-50 px-3 py-1 rounded-md border border-gray-200">
                  Página {paginaAtual} de {totalPaginas}
                </span>

                <button 
                  onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
                  disabled={paginaAtual === totalPaginas}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <ModalNotificacao isOpen={modalAberto} onClose={() => setModalAberto(false)} pedido={pedidoSelecionado} onAprovar={handleAprovar} onRecusar={handleRecusar} onNavegarTag={handleNavegarTag} normaPreviewData={normaPreview} onClosePreview={() => setNormaPreview(null)} />
      <ModalPDFViewer isOpen={pdfData.isOpen} onClose={fecharPdf} nomeArquivo={pdfData.nomeArquivo} urlPdf={pdfData.urlPdf} />
      
      <ModalVisualizarNorma
        isOpen={!!normaModalAberta}
        onClose={() => setNormaModalAberta(null)}
        norma={normaModalAberta}
        onAbrirNormaAssociada={handleNavegarTag}
      />
    </div>
  );
}

export default Notificacoes;