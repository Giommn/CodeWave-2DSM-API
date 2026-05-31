import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import { ModalNotificacao, PedidoNorma, NormaEmVigor } from "../components/ModalNotificacao";
import { FiltroNotificacao } from "../components/FiltroNotificacao";
import { FaFilePdf } from "react-icons/fa6";
import { ModalPDFViewer } from "../components/ModalPDFViewer";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma";
import { ResponseNorm } from "./Normas";
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
 
// FIX: parseia "DD-MM-YYYY" no fuso local sem deslocamento UTC
function parseDateBR(dateStr: string): Date {
  const [dia, mes, ano] = dateStr.split("-");
  return new Date(Number(ano), Number(mes) - 1, Number(dia));
}
 
function isMesmoDia(dateStr: string): boolean {
  try {
    const dataNorma = parseDateBR(dateStr);
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
 
function formatarData(dateStr: string): string {
  try {
    return parseDateBR(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit", month: "2-digit", year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
 
// --- CARD DE NORMA DO DIA ---
interface NormaDiaCardProps {
  norma: ResponseNorm;
  onVerCompleta: (norma: ResponseNorm) => void;
}
 
const NormaDiaCard = ({ norma, onVerCompleta }: NormaDiaCardProps) => (
  <div className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white min-w-[220px] max-w-[240px] flex-shrink-0">
    {/* Topo */}
    <div className="flex items-center justify-between px-3 pt-3 pb-1">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#72203E] flex-shrink-0" />
        <span className="text-sm font-black text-gray-800 truncate max-w-[100px]">{norma.norm_titulo}</span>
      </div>
      <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded truncate max-w-[60px]">{norma.norm_codigo}</span>
    </div>
 
    {/* Preview PDF */}
    <div className="mx-3 mt-1 mb-2 bg-gray-100 rounded-lg h-[90px] flex items-center justify-center">
      <FaFilePdf className="w-10 h-10 text-[#c0392b]" />
    </div>
 
    {/* Infos */}
    <div className="px-3 pb-1 flex flex-col gap-0.5">
      <p className="text-xs font-bold text-gray-700 truncate">{norma.norm_desc}</p>
      <p className="text-[11px] text-gray-500 font-semibold">{norma.org_criador ?? "adm"}</p>
      <p className="text-[11px] text-gray-400">{formatarData(norma.criacao!)}</p>
    </div>
 
    {/* Botão */}
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
 
  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false, nomeArquivo: "", urlPdf: ""
  });
  const [isCarregandoPdf, setIsCarregandoPdf] = useState(false);
 
  // Normas do dia
  const [normasHoje, setNormasHoje] = useState<ResponseNorm[]>([]);
  const [secaoAberta, setSecaoAberta] = useState(false);
  const [normaModalAberta, setNormaModalAberta] = useState<ResponseNorm | null>(null);
 
  const userRole = localStorage.getItem("userRole") || "user";
 
  // Busca normas criadas hoje
  useEffect(() => {
    const fetchNormasHoje = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/norma/getnorms`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        const todas: ResponseNorm[] = data.resposta || [];
        const filtradas = todas.filter((n) => n.criacao && isMesmoDia(n.criacao));
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
          normasEmVigor = dataNormas.resposta || [];
        }
      } catch (e) {
        console.warn("Aviso: Não foi possível carregar as normas atuais para o comparador.");
      }
 
      let endpoint = `${API_URL}/pedidos/getall`;
      if (userRole === "user") {
        endpoint = `${API_URL}/pedidos/meuspedidos/${idUsuario}`;
      }
 
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });
 
      if (!res.ok) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errData = await res.json();
          throw new Error(`Erro do Servidor: ${errData.message || res.status}`);
        } else {
          throw new Error(`Rota incorreta (Status ${res.status}). Verifique se o endpoint existe no seu backend!`);
        }
      }
 
      const data = await res.json();
 
      const pedidosMapeados: PedidoNorma[] = data.resposta.map((p: any) => {
        const alt = typeof p.alteracao === 'string' ? JSON.parse(p.alteracao) : (p.alteracao || {});
        const caminhoDoPdfNovo = alt.pdf_caminho || alt.pdfcaminho || "";
        const nomeDoPdfNovo = alt.pdf_nome_original || alt.pdfNomeOriginal || "Documento.pdf";
 
        let versaoAntiga = undefined;
        let catAntiga = "Não informada";
 
        if (p.acaoAlteracao === "UPDATE") {
          const tituloAtual = p.norma_nome;
          const normaReal = normasEmVigor.find((n: any) => n.norm_titulo === tituloAtual || n.id_norm === p.id_norma);
          if (normaReal) {
            catAntiga = normaReal.categoria ? (Array.isArray(normaReal.categoria) ? normaReal.categoria.join(", ") : String(normaReal.categoria)) : "Não informada";
            versaoAntiga = {
              codigo: normaReal.norm_codigo,
              titulo: normaReal.norm_titulo,
              descricao: normaReal.norm_desc,
              nome_arquivo: normaReal.pdf_nome_original || normaReal.nome_arquivo || "Documento Original",
              url_arquivo: normaReal.pdf_caminho || normaReal.url_arquivo || "",
            };
          } else {
            versaoAntiga = {
              codigo: alt.norm_codigoAtual || "N/A",
              titulo: p.norma_nome || "Norma não encontrada",
              descricao: "A versão anterior não pôde ser carregada do banco de dados.",
              nome_arquivo: "N/A",
              url_arquivo: "",
            };
          }
        }
 
        let catStr = catAntiga;
        if (alt.categoria) {
          catStr = Array.isArray(alt.categoria) ? alt.categoria.join(", ") : String(alt.categoria);
        }
 
        return {
          id: p.id_pedido,
          titulo: alt.norm_titulo || "Sem título",
          norma_nome: p.norma_nome || "Desconhecida",
          descricao: alt.norm_desc || "Sem descrição",
          categoria: catStr,
          normas_relacionadas: alt.referencias || [],
          codigo: alt.norm_codigo || "N/A",
          data_emissao: alt.emissao || "N/A",
          data_pedido: new Date(p.data_pedido).toLocaleDateString('pt-BR'),
          emissor: alt.org_desc || "N/A",
          sigla_emissor: alt.org_sigla || "",
          nome_arquivo: nomeDoPdfNovo,
          url_arquivo: caminhoDoPdfNovo,
          tamanho: "N/A",
          nome_solicitante: p.user_name || "Desconhecido",
          tipo_pedido: p.acaoAlteracao === "CREATE" ? "criacao" : "edicao",
          status: p.status.toLowerCase(),
          versao_anterior: versaoAntiga
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
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) throw new Error("Arquivo não encontrado no servidor.");
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
    alert(`Visualização de normas associadas está em construção.`);
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
 
  const parseData = (dataStr: string) => {
    const partes = dataStr.split("/");
    if (partes.length === 3) return new Date(`${partes[2]}-${partes[1]}-${partes[0]}T00:00:00`);
    return new Date();
  };
 
  const usuariosUnicos = Array.from(new Set(pedidos.map(p => p.nome_solicitante)));
 
  const pedidosFiltrados = pedidos.filter(pedido => {
    if (filtroStatus !== "todos" && pedido.status !== filtroStatus) return false;
    if (filtroUsuario !== "todos" && pedido.nome_solicitante !== filtroUsuario) return false;
    if (dataInicio || dataFim) {
      const dataPed = parseData(pedido.data_pedido);
      if (dataInicio && dataPed < new Date(`${dataInicio}T00:00:00`)) return false;
      if (dataFim && dataPed > new Date(`${dataFim}T23:59:59`)) return false;
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
 
  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />
 
      {/* SEÇÃO: NORMAS DE HOJE */}
      {normasHoje.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto mt-4">
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
            <div className="flex gap-4 overflow-x-auto pb-2">
              {normasHoje.map((norma) => (
                <NormaDiaCard
                  key={norma.id_norm}
                  norma={norma}
                  onVerCompleta={(n) => setNormaModalAberta(n)}
                />
              ))}
            </div>
          )}
        </div>
      )}
 
      {/* SEÇÃO: PEDIDOS / SOLICITAÇÕES */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-[#72203E]">
            {userRole === "user" ? "Meus Pedidos" : "Solicitações de Normas"}
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
          <div className="text-center py-12 text-gray-500">Carregando pedidos do servidor...</div>
        ) : erro ? (
          <div className="text-center py-12 text-[#72203E]">{erro}</div>
        ) : pedidosFiltrados.length === 0 ? (
          <div className="text-center py-12 text-gray-500">Nenhuma solicitação encontrada.</div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-3 min-w-[950px]">
              <div className="flex items-center justify-between px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                <div className="w-[40%] pl-12">Documento / Tipo</div>
                <div className="flex items-center gap-6 w-[45%]">
                  <span className="w-16 text-center">Tamanho</span>
                  <span className="w-24 text-center">Data Pedido</span>
                  <span className="flex-1">Solicitante</span>
                </div>
                <div className="w-24 text-center pr-2">Status</div>
              </div>
 
              {pedidosFiltrados.map((pedido) => (
                <div
                  key={pedido.id}
                  onClick={() => abrirRevisao(pedido)}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-[#72203E] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4 w-[40%] pr-4">
                    <input type="checkbox" onClick={(e) => e.stopPropagation()} className="w-4 h-4 cursor-pointer text-[#72203E] rounded border-gray-300 focus:ring-[#72203E]" />
                    <div
                      onClick={(e) => { e.stopPropagation(); abrirPdf(pedido.url_arquivo, pedido.nome_arquivo); }}
                      className="bg-gray-50 border border-gray-200 p-2 rounded text-[#72203E] flex-shrink-0 hover:bg-[#72203E] hover:text-white transition-colors cursor-pointer"
                      title="Visualizar PDF"
                    >
                      <FaFilePdf className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col overflow-hidden gap-0.5">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm text-gray-800 truncate">
                          {pedido.tipo_pedido === 'edicao' ? pedido.norma_nome : pedido.titulo}
                        </p>
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
 
      <ModalNotificacao
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        pedido={pedidoSelecionado}
        onAprovar={handleAprovar}
        onRecusar={handleRecusar}
        onNavegarTag={handleNavegarTag}
        normaPreviewData={normaPreview}
        onClosePreview={() => setNormaPreview(null)}
      />
 
      <ModalPDFViewer
        isOpen={pdfData.isOpen}
        onClose={fecharPdf}
        nomeArquivo={pdfData.nomeArquivo}
        urlPdf={pdfData.urlPdf}
      />
 
      {/* Modal de visualização completa da norma do dia */}
      <ModalVisualizarNorma
        isOpen={!!normaModalAberta}
        onClose={() => setNormaModalAberta(null)}
        norma={normaModalAberta}
      />
    </div>
  );
}
 
export default Notificacoes;
