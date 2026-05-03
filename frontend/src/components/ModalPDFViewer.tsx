import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

// 1. Importação principal do PDF.js
import * as pdfjsLib from "pdfjs-dist";

// 2. Importação CRUCIAL do Worker para Vite/React (Version 5.x)
// Isso resolve o erro "Setting up fake worker failed"
import "pdfjs-dist/build/pdf.worker.mjs";

interface ModalPDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  nomeArquivo: string;
  urlPdf: string;
}

export function ModalPDFViewer({ isOpen, onClose, nomeArquivo, urlPdf }: ModalPDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && urlPdf) {
      renderizarPDF();
    }
    // Cleanup ao fechar o modal
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [isOpen, urlPdf]);

  async function renderizarPDF() {
    setLoading(true);
    setError(null);

    try {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";

      // Carrega o documento
      const loadingTask = pdfjsLib.getDocument(urlPdf);
      const pdf = await loadingTask.promise;

      // Renderiza página por página em um Canvas
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        
        // Scale 2.0 garante que o texto fique nítido em telas de alta resolução
        const viewport = page.getViewport({ scale: 2.0 });
        
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          // Estilização das páginas (Canvas)
          canvas.className = "mb-8 shadow-2xl mx-auto w-full max-w-4xl bg-white rounded-sm transition-opacity duration-500";
          canvas.style.display = "block";

          await page.render({ canvasContext: context, viewport }).promise;
          containerRef.current.appendChild(canvas);
        }
      }
      setLoading(false);
    } catch (err: any) {
      console.error("ERRO CRITICAL PDF:", err);
      // Se o erro for de CORS, ele aparecerá aqui
      setError("Não foi possível carregar o documento. Verifique se o link é válido ou se há restrições de segurança (CORS) no servidor de origem.");
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10005] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-[#323639] rounded-xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header Customizado - Sem ferramentas de download */}
        <div className="flex justify-between items-center p-4 bg-[#70243d] text-white border-b border-white/10 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-1.5 rounded">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.363 2c1.171 0 2.107.936 2.107 2.107v11.786c0 1.171-.936 2.107-2.107 2.107H2.107C.936 18 0 17.064 0 15.893V4.107C0 2.936.936 2 2.107 2h9.256zM19.477 12.012l4.523 4.523V5.465l-4.523 4.523v2.024z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-sm truncate max-w-[300px]">{nomeArquivo}</h2>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Visualização Segura (Somente Leitura)</p>
            </div>
          </div>
          
          <button 
            onClick={onClose} 
            className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90"
            title="Fechar Visualizador"
          >
            <IoCloseOutline className="w-7 h-7" />
          </button>
        </div>

        {/* Área de Visualização com Scroll */}
        <div 
          className="flex-1 overflow-y-auto p-6 bg-[#525659] relative scroll-smooth"
          onContextMenu={(e) => e.preventDefault()} // Bloqueia clique direito
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-[#525659] z-50">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-white/20 border-t-[#70243d] rounded-full animate-spin"></div>
                <p className="text-sm font-semibold tracking-wide">Descriptografando e renderizando...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#323639] p-8 z-50 text-center">
               <div className="max-w-md">
                <p className="text-red-400 font-bold text-lg mb-4">⚠️ Erro de Carregamento</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{error}</p>
                <button 
                  onClick={onClose} 
                  className="px-6 py-2 bg-[#70243d] hover:bg-[#8b2d4b] text-white rounded-lg font-bold transition-colors"
                >
                  Voltar para a lista
                </button>
               </div>
            </div>
          )}

          {/* O container onde os Canvas serão injetados */}
          <div ref={containerRef} className="flex flex-col items-center select-none" />
        </div>

        {/* Rodapé de Proteção */}
        <div className="bg-[#202124] px-4 py-2 flex justify-center border-t border-white/5">
          <span className="text-[9px] text-gray-500 font-medium uppercase tracking-[0.2em]">
            Proteção de Direitos Digitais • Impressão e Download Desabilitados
          </span>
        </div>
      </div>
    </div>
  );
}