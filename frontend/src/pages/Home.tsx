import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma";
import { FaFilePdf, FaTrashAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCloseOutline, IoArrowForwardOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";

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
    if (!dateStr) return false;
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

interface NormaCardProps {
  norma: any;
  onAbrir: (norma: any) => void;
}

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const NormaCard: React.FC<NormaCardProps> = ({ norma, onAbrir }) => {
  const dataCriacaoBruta = norma.criado_em || norma.data_criacao || norma.created_at || norma.criacao;
  const dataCriacao = formatarDataLocal(dataCriacaoBruta);

  return (
    <div 
      onClick={() => onAbrir(norma)}
      className="group flex flex-col rounded-2xl overflow-hidden h-[280px] shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200"
    >
      <div className="bg-white h-[110px] flex items-center justify-center relative">
         <div className="bg-gray-50 p-4 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
           <FaFilePdf className="text-red-600 text-4xl" />
         </div>
      </div>

      <div className="bg-[#4a4a4a] flex-1 p-4 flex flex-col justify-between relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-[#72203E]"></div>

         <div className="flex flex-col gap-1.5 mt-1">
           <div className="flex justify-between items-center text-xs">
             <span className="text-gray-300 font-medium">Código:</span>
             <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded tracking-wider">
               {norma.norm_codigo || "S/ COD"}
             </span>
           </div>
           
           <div className="flex flex-col text-xs mt-1">
             <span className="text-gray-300 font-medium mb-0.5">Nome:</span>
             <span className="text-white font-bold leading-tight line-clamp-2" title={norma.norm_titulo}>
               {norma.norm_titulo}
             </span>
           </div>
           
           <div className="flex justify-between items-center text-xs mt-1">
             <span className="text-gray-300 font-medium">Criador:</span>
             <span className="text-white font-bold truncate max-w-[100px]">
               {norma.adm_criador || "Sistema"}
             </span>
           </div>
           
           <div className="flex justify-between items-center text-xs">
             <span className="text-gray-300 font-medium">Criação:</span>
             <span className="text-white font-bold">{dataCriacao}</span>
           </div>
         </div>

         <button className="w-full mt-3 bg-white/10 border border-white/20 hover:bg-white text-white hover:text-[#4a4a4a] text-[10px] py-2 rounded-lg font-black transition-colors uppercase tracking-widest">
           Abrir Norma
         </button>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [historico, setHistorico] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");
  
  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const [modalNormaAberto, setModalNormaAberto] = useState(false);
  const [normaParaVisualizar, setNormaParaVisualizar] = useState<any>(null);

  const [painelVisivel, setPainelVisivel] = useState(false);
  const [normasHoje, setNormasHoje] = useState<any[]>([]);

  const fetchHistorico = useCallback(async () => {
    try {
      setCarregando(true);
      const token = localStorage.getItem("token");
      const idUsuario = getIdFromToken();

      if (!token || !idUsuario) {
        setCarregando(false);
        return;
      }

      const res = await fetch(`${API_URL}/norma/gethistoricacess/${idUsuario}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Falha ao carregar o histórico.");

      const data = await res.json();
      let listaNormas = Array.isArray(data) ? data : (data.resposta || []);
      
      const ocultosSalvos = JSON.parse(localStorage.getItem("historico_oculto") || "[]");
      listaNormas = listaNormas.filter((n: any) => !ocultosSalvos.includes(n.id_norm));

      setHistorico(listaNormas);
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    fetchHistorico();
  }, [fetchHistorico]);

  useEffect(() => {
    const fetchNormasHoje = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch(`${API_URL}/norma/getnorms`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) return;
        const data = await res.json();
        const todas = data.resposta || [];

        const filtradas = todas.filter((n: any) => {
          const dataReferencia = n.criacao || n.criado_em || n.data_criacao;
          if (!dataReferencia) return false;
          return isMesmoDia(dataReferencia);
        });

        if (filtradas.length > 0) {
          setNormasHoje(filtradas);
          setPainelVisivel(true);
        }
      } catch (err) {
        console.error("Erro ao buscar normas do dia:", err);
      }
    };
    fetchNormasHoje();
  }, []);

  const handleAbrirNorma = (normaBruta: any) => {
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
        handleAbrirNorma(normaEncontrada);
      } else {
        alert("A norma associada não foi encontrada no banco de dados.");
      }
    } catch (err) {
      alert("A norma associada não foi encontrada no banco de dados.");
    }
  };

  const handleLimparHistorico = () => {
    const confirmacao = window.confirm("Tem certeza que deseja ocultar estas normas do seu histórico?");
    if (!confirmacao) return;

    const idsNaTela = historico.map((n) => n.id_norm);
    const ocultosSalvos = JSON.parse(localStorage.getItem("historico_oculto") || "[]");
    localStorage.setItem("historico_oculto", JSON.stringify([...ocultosSalvos, ...idsNaTela]));

    setHistorico([]); 
    setPaginaAtual(1);
  };

  const handleBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(e.target.value);
    setPaginaAtual(1); 
  };

  const historicoFiltrado = historico.filter((norma) => {
    const busca = termoBusca.toLowerCase();
    const titulo = (norma.norm_titulo || "").toLowerCase();
    const codigo = (norma.norm_codigo || "").toLowerCase();
    return titulo.includes(busca) || codigo.includes(busca);
  });

  const totalPaginas = Math.ceil(historicoFiltrado.length / ITENS_POR_PAGINA);
  const itensExibidos = historicoFiltrado.slice(
    (paginaAtual - 1) * ITENS_POR_PAGINA,
    paginaAtual * ITENS_POR_PAGINA
  );

  const dataHoje = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "short" });

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <header className="relative w-full h-[300px] sm:h-[400px] flex flex-col items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="../../img/logo1.png"
            alt="Fundo Akaer"
            className="absolute -left-[250px] -top-[-5px] w-[1200px] max-w-none h-120 object-contain opacity-80"
          />
        </div>

        <Navbar />

        <div className="z-10 text-center mt-16 sm:mt-24 px-4 relative flex flex-col items-center">
          <h1 className="text-4xl md:text-[52px] font-black text-[#1a1a1a] leading-tight max-w-5xl mx-auto tracking-tight mt-2">
            Bem vindo a Plataforma do Conteúdo
            <br />
            Técnico de Normas Aeronáuticas
          </h1>
        </div>
      </header>

      <main className="bg-[#7d2944] w-full flex-1 py-10 px-6 md:px-12 relative shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-5 relative z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-white text-2xl font-bold border-b-2 border-white/20 pb-1">
                Histórico de Normas Acessadas:
              </h2>
              
              {historico.length > 0 && (
                <button 
                  onClick={handleLimparHistorico}
                  className="flex items-center gap-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/20 transition-colors"
                  title="Apagar todo o histórico da tela"
                >
                  <FaTrashAlt /> Limpar
                </button>
              )}
            </div>

            <div className="relative group w-full md:w-auto min-w-[280px]">
              <input
                type="text"
                value={termoBusca}
                onChange={handleBusca}
                placeholder="buscar nome ou código da norma..."
                className="w-full bg-[#f0f0f0] rounded-lg py-2.5 pl-4 pr-10 outline-none focus:bg-white transition-all text-sm font-semibold placeholder-gray-500 shadow-inner"
              />
              <span className="absolute right-3 top-3 text-gray-500">
                <SearchIcon />
              </span>
            </div>
          </div>

          {carregando ? (
            <div className="flex justify-center items-center py-20">
              <span className="text-white/70 font-bold animate-pulse text-lg">Carregando seu histórico...</span>
            </div>
          ) : historicoFiltrado.length === 0 ? (
            <div className="flex justify-center items-center py-20 bg-white/5 rounded-xl border border-white/10 border-dashed">
              <span className="text-white/70 font-bold text-center text-lg">
                {termoBusca 
                  ? "Nenhuma norma encontrada com esta busca." 
                  : "Você ainda não possui normas no seu histórico."}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
                {itensExibidos.map((norma, index) => (
                  <NormaCard 
                    key={index} 
                    norma={norma} 
                    onAbrir={handleAbrirNorma} 
                  />
                ))}
              </div>

              {totalPaginas > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button 
                    onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
                    disabled={paginaAtual === 1}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <span className="text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-lg shadow-inner">
                    Página {paginaAtual} de {totalPaginas}
                  </span>

                  <button 
                    onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
                    disabled={paginaAtual === totalPaginas}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {painelVisivel && normasHoje.length > 0 && (
        <div className="fixed z-[9999] animate-slideUp pointer-events-auto" style={{ bottom: "2rem", right: "2rem" }}>
          <div className="w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#72203E] px-5 py-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1.5"><BsBellFill className="w-4 h-4 text-white" /></div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Atualizações de Hoje</p>
                  <p className="text-white/60 text-xs capitalize mt-0.5">{dataHoje}</p>
                </div>
              </div>
              <button onClick={() => setPainelVisivel(false)} className="text-white/60 hover:text-white transition-colors"><IoCloseOutline className="w-5 h-5" /></button>
            </div>
            <div className="px-5 pt-4 pb-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Novas</p>
              <p className="text-5xl font-black text-gray-800 leading-none">{normasHoje.length}</p>
            </div>
            <div className="max-h-[240px] overflow-y-auto divide-y divide-gray-50">
              {normasHoje.map((norma) => (
                <div key={norma.id_norm} className="px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleAbrirNorma(norma)}>
                  <p className="font-bold text-sm text-gray-800 truncate">{norma.norm_titulo}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{norma.norm_codigo}</span>
                    <span className="text-[10px] text-gray-400">📅 {formatarDataLocal(norma.criacao || norma.data_criacao || norma.criado_em)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 p-3">
              <button onClick={() => { setPainelVisivel(false); navigate("/notificacoes"); }} className="w-full flex items-center justify-center gap-2 text-sm font-bold text-[#72203E] hover:bg-[#72203E]/5 py-2 rounded-lg transition-colors uppercase tracking-wide">
                Ver detalhes completos <IoArrowForwardOutline className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ModalVisualizarNorma
        isOpen={modalNormaAberto}
        onClose={() => setModalNormaAberto(false)}
        norma={normaParaVisualizar}
        onAbrirNormaAssociada={handleNavegarTag} 
      />

      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideUp { animation: slideUp 0.25s ease-out both; }
      `}</style>
    </div>
  );
};

export default Home;