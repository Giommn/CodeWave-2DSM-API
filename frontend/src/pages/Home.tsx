import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ResponseNorm } from "./Normas";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma";
import { IoCloseOutline, IoArrowForwardOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
 
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
 
// --- ÍCONES ---
const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
 
// --- CARD DE NORMA ---
interface NormaCardProps {
  norma: ResponseNorm;
  onAbrir: (norma: ResponseNorm) => void;
}
 
const NormaCard = ({ norma, onAbrir }: NormaCardProps) => (
  <div className="flex flex-col rounded-xl overflow-hidden h-[280px] shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
    <div className="bg-[#e2e2e2] h-[160px] p-4">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{norma.norm_titulo}</h3>
    </div>
    <div className="bg-[#8c8c8c] flex-1 p-4 flex flex-col justify-between">
      <div className="space-y-2">
        <p className="text-[12px] text-white font-bold">Descrição: {norma.norm_desc}</p>
        <p className="text-[12px] text-white font-bold">Quantidade de notas: {norma.notas?.length || 0}</p>
      </div>
      <div className="mt-2 w-full">
        <button
          className="w-full bg-[#d1d1d1] hover:bg-white text-[#444] text-[11px] py-2 rounded-lg font-black transition-colors uppercase"
          onClick={() => onAbrir(norma)}
        >
          Abrir
        </button>
      </div>
    </div>
  </div>
);
 
// --- HELPERS ---
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
 
async function get_normas(id_user: number) {
  const response = await fetch(`${API_URL}/norma/gethistoricacess/${id_user}`, { method: "GET" });
  return await response.json();
}
 
function parseDateBR(dateStr: string): Date {
  const [dia, mes, ano] = dateStr.split("-");
  return new Date(Number(ano), Number(mes) - 1, Number(dia));
}
 
function formatarData(dateStr: string): string {
  try {
    return parseDateBR(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
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
 
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [listaNormas, setListaNormas] = useState<ResponseNorm[]>([]);
  const [normaSelecionada, setNormaSelecionada] = useState<ResponseNorm | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [painelVisivel, setPainelVisivel] = useState(false);
  const [normasHoje, setNormasHoje] = useState<ResponseNorm[]>([]);
 
  useEffect(() => {
    const salvarNormas = async () => {
      const idUser = getIdFromToken();
      if (!idUser) return;
      const dados = await get_normas(idUser);
      if (dados?.resposta) setListaNormas(dados.resposta);
    };
    salvarNormas();
  }, []);
 
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
 
        const filtradas = todas.filter((n) => {
          if (!n.criacao) return false;
          return isMesmoDia(n.criacao);
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
 
  const dataHoje = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "short" });
 
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      <header className="relative w-full h-[500px] flex flex-col items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="../../img/logo1.png" alt="Fundo Akaer" className="absolute -left-[250px] -top-[-5px] w-[1200px] max-w-none h-120 object-contain" />
        </div>
        <div className="z-10 text-center mt-24 px-4 relative">
          <h1 className="text-4xl md:text-[52px] font-black text-[#1a1a1a] leading-tight max-w-5xl mx-auto tracking-tight">
            Bem vindo a Plataforma do Conteúdo<br />Técnico de Normas Aeronáuticas
          </h1>
        </div>
      </header>
 
      <main className="bg-[#7d2944] w-full flex-1 py-10 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4 relative z-10">
            <h2 className="text-white text-xl font-bold border-b-2 border-white/20 pb-1">
              Historico de normas acessadas/baixadas:
            </h2>
            <div className="relative group w-full max-w-xs">
              <input type="text" placeholder="buscar nome da norma..." className="w-full bg-[#bcbcbc] rounded-md py-2 pl-4 pr-10 outline-none focus:bg-white transition-all text-sm font-semibold placeholder-gray-600 shadow-inner" />
              <span className="absolute right-3 top-2.5 text-gray-700"><SearchIcon /></span>
            </div>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 relative z-10">
            {listaNormas.map((norma) => (
              <NormaCard key={norma.id_norm} norma={norma} onAbrir={(n) => { setNormaSelecionada(n); setModalOpen(true); }} />
            ))}
          </div>
        </div>
      </main>
 
      <ModalVisualizarNorma isOpen={modalOpen} onClose={() => setModalOpen(false)} norma={normaSelecionada} />
 
      {/* PAINEL DE NOTIFICAÇÃO — sem overlay, sem blur, site continua clicável */}
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
                <div key={norma.id_norm} className="px-5 py-3 hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-sm text-gray-800 truncate">{norma.norm_titulo}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{norma.norm_codigo}</span>
                    <span className="text-[10px] text-gray-400">📅 {formatarData(norma.criacao!)}</span>
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
 
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideUp { animation: slideUp 0.25s ease-out both; }
      `}</style>
    </div>
  );
};
 
export default Home;
