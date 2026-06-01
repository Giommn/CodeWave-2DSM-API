import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useNotificacaoDia, NormaAtualizada } from "../context/NotificacaoDiaContext";
 
// ─── BADGE ────────────────────────────────────────────────────────────────────
 
function BadgeTipo({ tipo }: { tipo: NormaAtualizada["tipo"] }) {
  if (tipo === "criacao") {
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f7f0f3] text-[#7d2944] border border-[#e8c4d0] flex-shrink-0">
        <span className="w-1 h-1 rounded-full bg-[#7d2944] inline-block" />
        Criação
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200 flex-shrink-0">
      <span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />
      Edição
    </span>
  );
}
 
// ─── COMPONENTE ───────────────────────────────────────────────────────────────
 
export function ToastNotificacaoDia() {
  const { normas, totalNovas, totalAtualizadas, dispensado, dispensar } =
    useNotificacaoDia();
 
  const [montado,    setMontado]    = useState(false);
  const [saindo,     setSaindo]     = useState(false);
  const [visivelDom, setVisivelDom] = useState(false);
 
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useRef(location.pathname);
 
  // Aparece 800ms após o mount
  useEffect(() => {
    if (normas.length === 0 || dispensado) return;
    const t = setTimeout(() => {
      setVisivelDom(true);
      requestAnimationFrame(() => setMontado(true));
    }, 800);
    return () => clearTimeout(t);
  }, [normas.length, dispensado]);
 
  // Fecha ao trocar de página
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      iniciarSaida(false); // troca de página não marca como dispensado
    }
  }, [location.pathname]);
 
  const iniciarSaida = (marcarDispensado = true) => {
    if (!visivelDom) return;
    setSaindo(true);
    setTimeout(() => {
      setVisivelDom(false);
      setMontado(false);
      setSaindo(false);
    }, 400);
    if (marcarDispensado) dispensar();
  };
 
  const irParaDetalhes = () => {
    iniciarSaida(true);
    setTimeout(() => navigate("/notificacoes"), 400);
  };
 
  if (!visivelDom || normas.length === 0) return null;
 
  return (
    <>
      <style>{`
        @keyframes toastEntrada {
          from { transform: translateX(calc(100% + 24px)); opacity: 0; }
          to   { transform: translateX(0);                 opacity: 1; }
        }
        @keyframes toastSaida {
          from { transform: translateX(0);                 opacity: 1; }
          to   { transform: translateX(calc(100% + 24px)); opacity: 0; }
        }
        @keyframes toastFlutuacao {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-5px); }
        }
        @keyframes sinoPulso {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0;   }
        }
        @keyframes bordaBrilho {
          0%, 100% { box-shadow: 0 8px 32px rgba(125,41,68,0.10), 0 2px 8px rgba(0,0,0,0.07); }
          50%       { box-shadow: 0 8px 32px rgba(125,41,68,0.30), 0 2px 8px rgba(0,0,0,0.12); }
        }
        .toast-entrando  { animation: toastEntrada 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }
        .toast-saindo    { animation: toastSaida   0.4s cubic-bezier(0.55,0,1,0.45) forwards; }
        .toast-flutuando {
          animation:
            toastFlutuacao 3.5s ease-in-out infinite,
            bordaBrilho    3.5s ease-in-out infinite;
        }
        .sino-anel::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          animation: sinoPulso 2s ease-out infinite;
          pointer-events: none;
        }
        .toast-scroll { scrollbar-width: thin; scrollbar-color: #e0b8c6 transparent; }
        .toast-scroll::-webkit-scrollbar       { width: 4px; }
        .toast-scroll::-webkit-scrollbar-thumb { background: #e0b8c6; border-radius: 4px; }
      `}</style>
 
      <div
        role="alert"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[9999] w-[340px] bg-white rounded-2xl overflow-hidden border border-gray-100 ${
          saindo ? "toast-saindo" : montado ? "toast-flutuando" : "toast-entrando"
        }`}
        style={{ willChange: "transform" }}
      >
        {/* CABEÇALHO */}
        <div className="bg-[#7d2944] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative sino-anel w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div>
              <p className="text-white text-[11px] font-black uppercase tracking-widest leading-none">
                Atualizações de hoje
              </p>
              <p className="text-white/60 text-[10px] mt-0.5">
                {new Date().toLocaleDateString("pt-BR", {
                  weekday: "long", day: "numeric", month: "short",
                })}
              </p>
            </div>
          </div>
 
          <button
            onClick={() => iniciarSaida(true)}
            className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors flex-shrink-0"
            aria-label="Fechar notificação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          </button>
        </div>
 
        {/* CONTADORES */}
        <div className="flex border-b border-gray-100">
          {totalNovas > 0 && (
            <div className={`flex-1 px-4 py-3 ${totalAtualizadas > 0 ? "border-r border-gray-100" : ""}`}>
              <p className="text-[9px] font-black text-[#9e6679] uppercase tracking-wider">Novas</p>
              <p className="text-[28px] font-black text-[#7d2944] leading-none mt-0.5">{totalNovas}</p>
            </div>
          )}
          {totalAtualizadas > 0 && (
            <div className="flex-1 px-4 py-3">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Atualizadas</p>
              <p className="text-[28px] font-black text-gray-500 leading-none mt-0.5">{totalAtualizadas}</p>
            </div>
          )}
        </div>
 
        {/* LISTA */}
        <div className="max-h-[220px] overflow-y-auto toast-scroll">
          {normas.map((norma, i) => (
            <div
              key={norma.id}
              className={`px-4 py-3 flex flex-col gap-1.5 ${
                i < normas.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Título + badge */}
              <div className="flex items-start justify-between gap-2">
                <p className="text-[12px] font-bold text-gray-800 leading-snug flex-1 min-w-0">
                  {norma.norm_titulo}
                </p>
                <BadgeTipo tipo={norma.tipo} />
              </div>
 
              {/* Metadados */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Código/versão */}
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {norma.norm_codigo}
                </span>
 
                {/* Criador */}
                <div className="flex items-center gap-1 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
                    fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="text-[10px] text-gray-400 truncate">{norma.nome_criador}</span>
                </div>
 
                {/* Data */}
                <div className="flex items-center gap-1 ml-auto flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
                    fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8"  y1="2" x2="8"  y2="6"/>
                    <line x1="3"  y1="10" x2="21" y2="10"/>
                  </svg>
                  <span className="text-[10px] text-gray-400">{norma.data}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* RODAPÉ */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <button
            onClick={irParaDetalhes}
            className="w-full border-[1.5px] border-[#7d2944] text-[#7d2944] hover:bg-[#7d2944] hover:text-white transition-all duration-200 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider"
          >
            Ver detalhes completos →
          </button>
        </div>
      </div>
    </>
  );
}