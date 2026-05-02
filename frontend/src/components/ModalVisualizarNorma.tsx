import { useState } from "react";
import { IoCloseOutline, IoEyeOutline, IoChevronDownOutline } from "react-icons/io5";
import { ResponseNorm } from "../pages/Normas";
import { ModalPDFViewer } from "./ModalPDFViewer";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

interface ModalVisualizarNormaProps {
  isOpen: boolean;
  onClose: () => void;
  norma: ResponseNorm | any;
  onAbrirNormaAssociada?: (codigoNorma: string) => void; 
}

export function ModalVisualizarNorma({ isOpen, onClose, norma, onAbrirNormaAssociada }: ModalVisualizarNormaProps) {
  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });
  
  const [isCarregandoPdf, setIsCarregandoPdf] = useState(false);
  const [notasExpandidas, setNotasExpandidas] = useState<number[]>([]);

  if (!isOpen || !norma) return null;

  const abrirPdf = async () => {
    const nomeArquivoParaBuscar = norma.pdf_caminho || norma.url_arquivo || norma.nome_arquivo;
    if (!nomeArquivoParaBuscar) {
      alert("Nenhum arquivo PDF associado a esta norma.");
      return;
    }
    setIsCarregandoPdf(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/norma/getpdf/${nomeArquivoParaBuscar}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Falha ao carregar o PDF.");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setPdfData({ 
        isOpen: true, 
        nomeArquivo: norma.norm_titulo || norma.nome_arquivo || nomeArquivoParaBuscar, 
        urlPdf: blobUrl 
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao visualizar o PDF.");
    } finally {
      setIsCarregandoPdf(false);
    }
  };

  const fecharPdf = () => {
    if (pdfData.urlPdf && pdfData.urlPdf.startsWith("blob:")) {
      URL.revokeObjectURL(pdfData.urlPdf);
    }
    setPdfData({ ...pdfData, isOpen: false, urlPdf: "" });
  };

  const toggleNota = (index: number) => {
    setNotasExpandidas((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const listaReferencias = Array.isArray(norma.referencias) ? norma.referencias : [];
  const notas = Array.isArray(norma.notas) ? norma.notas : [];

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transition-all duration-300 relative my-auto flex flex-col">
          
          <div className="flex justify-between items-center p-6 border-b border-gray-200 shrink-0">
            <h2 className="text-gray-800 font-bold text-xl">
              Visualizando Norma: {norma.norm_titulo}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <IoCloseOutline className="w-7 h-7" />
            </button>
          </div>

          <div className="p-6 max-h-[65vh] overflow-y-auto custom-scrollbar flex flex-col gap-5">
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center border border-dashed border-gray-300">
              <IoEyeOutline className="w-8 h-8 text-gray-500 mb-2" />
              <button 
                onClick={abrirPdf}
                disabled={isCarregandoPdf}
                className={`text-white px-5 py-2 rounded-md text-sm font-bold transition-colors shadow-sm ${
                  isCarregandoPdf ? 'bg-gray-400' : 'bg-[#72203E] hover:bg-[#5a1931]'
                }`}
              >
                {isCarregandoPdf ? 'Carregando PDF...' : 'Visualizar PDF no Visualizador'}
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Título:</label>
                <input type="text" disabled value={norma.norm_titulo} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Data de Emissão:</label>
                <input type="text" disabled value={norma.emissao || "Não definida"} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Descrição:</label>
                <textarea disabled value={norma.norm_desc} rows={2} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium resize-none"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Normas Referenciadas:</label>
                {listaReferencias.length > 0 ? (
                  <div className="flex flex-wrap gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded-md">
                    {listaReferencias.map((codigoRef: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => onAbrirNormaAssociada?.(codigoRef)}
                        className="bg-white border border-gray-300 text-[#72203E] hover:bg-[#72203E] hover:text-white transition-all text-xs font-bold px-3 py-1.5 rounded shadow-sm flex items-center gap-1"
                      >
                        <IoEyeOutline className="w-3.5 h-3.5" />
                        {codigoRef}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-500 italic text-sm">
                    Nenhuma norma referenciada.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-2">
              <label className="block text-sm font-bold text-gray-800 mb-3">Notas Adicionais:</label>
              {notas.length === 0 ? (
                <p className="text-sm text-gray-500 italic">Nenhuma nota vinculada.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {notas.map((nota: any, index: number) => {
                    const isExpanded = notasExpandidas.includes(index);
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <div onClick={() => toggleNota(index)} className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer">
                          <span className="text-sm font-bold text-gray-700">{nota.notaTitulo || nota.nome || `Nota #${index + 1}`}</span>
                          <IoChevronDownOutline className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                        {isExpanded && (
                          <div className="p-4 border-t border-gray-200 flex flex-col gap-3">
                            <p className="text-xs font-bold">Interpretação: <span className="font-normal text-gray-600">{nota.notaIT || nota.interpretacao_tecnica || "N/A"}</span></p>
                            <p className="text-xs font-bold">Abordagens: <span className="font-normal text-gray-600">{nota.notaAB || nota.abordagens_aceitaveis || "N/A"}</span></p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end rounded-b-xl">
            <button onClick={onClose} className="px-6 py-2 rounded-md font-bold text-gray-700 border bg-white hover:bg-gray-100 transition-colors">Fechar</button>
          </div>
        </div>
      </div>

      <ModalPDFViewer isOpen={pdfData.isOpen} onClose={fecharPdf} nomeArquivo={pdfData.nomeArquivo} urlPdf={pdfData.urlPdf} />
    </>
  );
}