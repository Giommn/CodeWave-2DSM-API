import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ResponseNorm } from "./Normas";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma";

// --- ÍCONES ---
const SearchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// --- COMPONENTE DO CARD DE NORMA ---
// Modificado: Agora ele apenas avisa o componente pai quando foi clicado
interface NormaCardProps {
  norma: ResponseNorm;
  onAbrir: (norma: ResponseNorm) => void;
}

const NormaCard = ({ norma, onAbrir }: NormaCardProps) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden h-[280px] shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
      <div className="bg-[#e2e2e2] h-[160px] p-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {norma.norm_titulo}
        </h3>
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
};

// --- COMPONENTE PRINCIPAL (HOME) ---
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
  const response = await fetch(`${import.meta.env.VITE_API_URL}/norma/gethistoricacess/${id_user}`, { 
    method: "GET"
  });
  return await response.json();
}

const Home: React.FC = () => {
  const [listaNormas, setListaNormas] = useState<ResponseNorm[]>([]);
  
  // NOVOS ESTADOS: Controlam o modal centralizado na raiz da Home
  const [normaSelecionada, setNormaSelecionada] = useState<ResponseNorm | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const salvarNormas = async () => {
      const idUser = getIdFromToken();
      if (!idUser) return;
      
      const dados = await get_normas(idUser);
      if (dados && dados.resposta) {
        setListaNormas(dados.resposta);
      }
    };
    salvarNormas();
  }, []);

  const handleAbrirModal = (norma: ResponseNorm) => {
    setNormaSelecionada(norma);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />
      
      <header className="relative w-full h-[500px] flex flex-col items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="../../img/logo1.png"
            alt="Fundo Akaer"
            className="absolute -left-[250px] -top-[-5px] w-[1200px] max-w-none h-120 object-contain"
          />
        </div>

        <div className="z-10 text-center mt-24 px-4 relative">
          <h1 className="text-4xl md:text-[52px] font-black text-[#1a1a1a] leading-tight max-w-5xl mx-auto tracking-tight">
            Bem vindo a Plataforma do Conteúdo
            <br />
            Técnico de Normas Aeronáuticas
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
              <input
                type="text"
                placeholder="buscar nome da norma..."
                className="w-full bg-[#bcbcbc] rounded-md py-2 pl-4 pr-10 outline-none focus:bg-white transition-all text-sm font-semibold placeholder-gray-600 shadow-inner"
              />
              <span className="absolute right-3 top-2.5 text-gray-700">
                <SearchIcon />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 relative z-10">
            {listaNormas.map((norma: ResponseNorm) => (
              <NormaCard 
                key={norma.id_norm} 
                norma={norma} 
                onAbrir={handleAbrirModal} 
              />
            ))}
          </div>
        </div>
      </main>

      {/* O MODAL FOI TRAZIDO PARA O TOPO DA HOME (Fora do grid e livre de herança do transform) */}
      <ModalVisualizarNorma 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        norma={normaSelecionada}  
      />   
    </div>
  );
};

export default Home;