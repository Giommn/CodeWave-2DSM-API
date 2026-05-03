import { useState, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCloudUploadAlt, FaRegFilePdf } from "react-icons/fa";
import { ResponseNorm } from "../pages/Normas";
import { ModalPDFViewer } from "./ModalPDFViewer";

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

interface ModalEditarNormaProps {
  isOpen: boolean;
  onClose: () => void;
  normaOriginal: ResponseNorm | any;
  onSave: () => void;
}

export function ModalEditarNorma({ isOpen, onClose, normaOriginal, onSave }: ModalEditarNormaProps) {
  const [codigo, setCodigo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [emissao, setEmissao] = useState("");
  const [novoArquivo, setNovoArquivo] = useState<File | null>(null);
  
  const [enviando, setEnviando] = useState(false);
  const [carregandoPdfAtual, setCarregandoPdfAtual] = useState(false);

  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });

  const [isReviewMode, setIsReviewMode] = useState(false);
  const [tempoEspera, setTempoEspera] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const userRole = localStorage.getItem("userRole") || "user";

  useEffect(() => {
    if (normaOriginal) {
      setCodigo(normaOriginal.norm_codigo || "");
      setTitulo(normaOriginal.norm_titulo || "");
      setDescricao(normaOriginal.norm_desc || "");
      
      let dataEmissaoFormatada = normaOriginal.emissao || "";
      if (dataEmissaoFormatada.includes("/")) {
        const partes = dataEmissaoFormatada.split("/");
        if (partes.length === 3) {
          dataEmissaoFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
        }
      }
      setEmissao(dataEmissaoFormatada);

      setNovoArquivo(null); 
      setIsReviewMode(false);
      setTempoEspera(0);
      setEnviando(false);
    }
  }, [normaOriginal, isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isReviewMode && tempoEspera > 0) {
      interval = setInterval(() => setTempoEspera((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isReviewMode, tempoEspera]);

  if (!isOpen || !normaOriginal) return null;

  const handlePrimeiroConfirmar = () => {
    if (!novoArquivo) {
      alert("Atenção: É obrigatório anexar um novo PDF para editar a norma, conforme exigido pelo sistema.");
      return;
    }
    if (!codigo || !titulo || !descricao) {
      alert("Por favor, preencha todos os campos obrigatórios (Código, Título e Descrição).");
      return;
    }
    setIsReviewMode(true);
    setTempoEspera(3);
  };

  const handleConfirmacaoFinal = async () => {
    if (!novoArquivo) return;
    setEnviando(true);

    try {
      const token = localStorage.getItem("token");
      const idUsuario = getIdFromToken();

      if (!token || !idUsuario) throw new Error("Usuário não autenticado.");

      // Objeto exato mapeado para UpdateNormDTO
      const baseMetadata = {
        norm_codigoAtual: normaOriginal.norm_codigo,
        norm_codigo: codigo,
        norm_titulo: titulo,
        norm_desc: descricao,
        emissao: emissao,
        pdf_nome_original: "",
        pdf_caminho: ""
      };

      let metadata;
      let endpoint = "";

      if (userRole === "user") {
        endpoint = `${API_URL}/pedidos/create`; 
        metadata = {
          id_user: Number(idUsuario),
          acaoAlteracao: "UPDATE",
          tipo: "NORMA",
          status: "PENDENTE",
          id_norma: normaOriginal.id_norm, 
          alteracao: baseMetadata 
        };
      } else {
        endpoint = `${API_URL}/norma/update`;
        metadata = baseMetadata;
      }

      const formData = new FormData();
      formData.append("arquivo", novoArquivo);
      formData.append("metadata", JSON.stringify(metadata));

      const metodoHTTP = userRole === "user" ? "POST" : "PUT";

      const res = await fetch(endpoint, {
        method: metodoHTTP, 
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Falha ao enviar a solicitação para o servidor.");
      }

      onSave(); 
      onClose(); 
      setIsReviewMode(false);
    } catch (error: any) {
      alert("Erro: " + error.message);
    } finally {
      setEnviando(false);
    }
  };

  const FecharOuCancelar = () => {
    if (isReviewMode) {
      setIsReviewMode(false);
      setTempoEspera(0);
    } else {
      onClose();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setNovoArquivo(e.target.files[0]);
    }
  };

  const verPdfAtual = async () => {
    const nomeArquivoParaBuscar = normaOriginal.pdf_caminho || normaOriginal.url_arquivo || normaOriginal.nome_arquivo;
    if (!nomeArquivoParaBuscar) return;

    setCarregandoPdfAtual(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/norma/getpdf/${encodeURIComponent(nomeArquivoParaBuscar)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Falha ao carregar o PDF atual.");
      
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) throw new Error("Arquivo não encontrado.");

      const arrayBuffer = await res.arrayBuffer();
      const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(pdfBlob);

      setPdfData({
        isOpen: true,
        nomeArquivo: normaOriginal.norm_titulo || "Documento Atual",
        urlPdf: blobUrl
      });
    } catch (error) {
      alert("Erro ao tentar visualizar o arquivo atual.");
    } finally {
      setCarregandoPdfAtual(false);
    }
  };

  const verNovoPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (novoArquivo) {
      try {
        const arrayBuffer = await novoArquivo.arrayBuffer();
        const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const urlTemporaria = URL.createObjectURL(pdfBlob);
        
        setPdfData({ isOpen: true, nomeArquivo: novoArquivo.name, urlPdf: urlTemporaria });
      } catch (error) {
        alert("Erro ao tentar visualizar o arquivo selecionado.");
      }
    }
  };

  const fecharPdf = () => {
    if (pdfData.urlPdf && pdfData.urlPdf.startsWith("blob:")) {
      URL.revokeObjectURL(pdfData.urlPdf);
    }
    setPdfData({ ...pdfData, isOpen: false, urlPdf: "" });
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 overflow-y-auto">
        <div className={`bg-white rounded-xl shadow-2xl w-full transition-all duration-300 relative my-auto flex flex-col ${isReviewMode ? 'max-w-xl border-2 border-[#72203E]' : 'max-w-2xl'}`}>
          
          <div className={`flex justify-between items-center p-6 border-b border-gray-200 shrink-0 ${isReviewMode ? 'bg-red-50 rounded-t-xl' : ''}`}>
            <h2 className="text-gray-800 font-bold text-xl">
              {isReviewMode ? "Revisão Final da Edição" : `Editar Norma: ${normaOriginal.norm_codigo}`}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <IoCloseOutline className="w-7 h-7" />
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar flex flex-col gap-5">
            
            {!isReviewMode ? (
              <>
                <div className="bg-white border border-dashed border-gray-300 p-6 rounded-lg flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded border border-gray-200">
                    <div className="flex flex-col min-w-0 justify-center">
                      <span className="text-sm font-bold text-gray-700 uppercase">Documento PDF Atual</span>
                    </div>
                    <button 
                      onClick={verPdfAtual} 
                      disabled={carregandoPdfAtual}
                      className="flex items-center gap-1 text-[#72203E] text-sm font-bold hover:underline ml-4 whitespace-nowrap disabled:opacity-50"
                    >
                      <FaRegFilePdf /> {carregandoPdfAtual ? "Carregando..." : "Ver Atual"}
                    </button>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center gap-2 border-t border-gray-100 pt-4">
                    {novoArquivo ? (
                      <div className="flex items-center justify-between w-full bg-green-50 p-3 rounded border border-green-200">
                        <div className="flex flex-col text-left min-w-0">
                          <span className="text-[10px] font-bold text-green-600 uppercase">Novo Arquivo:</span>
                          <p className="text-sm font-bold text-gray-800 truncate break-all">{novoArquivo.name}</p>
                        </div>
                        <button onClick={verNovoPdf} className="flex items-center gap-1 text-green-700 text-xs font-bold hover:underline ml-4 whitespace-nowrap">
                          <FaRegFilePdf /> Ver Novo
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 italic">Nenhum novo arquivo selecionado.</p>
                    )}

                    <input type="file" accept="application/pdf" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                    <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors mt-2 shadow-sm">
                      <FaCloudUploadAlt className="w-5 h-5 text-gray-500" />
                      {novoArquivo ? "Alterar Novo PDF" : "Substituir PDF"}
                    </button>
                    <p className="text-[10px] text-gray-400">* O backend exige um arquivo para atualização</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Código da Norma</label>
                    <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#72203E]" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Título</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#72203E]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Descrição</label>
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800 font-medium resize-none focus:outline-none focus:ring-1 focus:ring-[#72203E]"></textarea>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4 text-left">
                <p className="text-sm text-gray-600 text-center mb-2">Revise as informações antes de enviar.</p>
                
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Código Antigo:</span>
                    <p className="text-sm font-medium text-gray-500 break-all">{normaOriginal.norm_codigo}</p>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#72203E] uppercase block mb-1">Novo Código:</span>
                    <p className={`text-sm font-bold break-all ${codigo !== normaOriginal.norm_codigo ? 'text-green-700' : 'text-gray-800'}`}>{codigo}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Título Antigo:</span>
                    <p className="text-sm font-medium text-gray-500 break-words">{normaOriginal.norm_titulo}</p>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#72203E] uppercase block mb-1">Novo Título:</span>
                    <p className={`text-sm font-bold break-words ${titulo !== normaOriginal.norm_titulo ? 'text-green-700' : 'text-gray-800'}`}>{titulo}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Descrição Antiga:</span>
                    <p className="text-sm font-medium text-gray-500 break-words">{normaOriginal.norm_desc}</p>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#72203E] uppercase block mb-1">Nova Descrição:</span>
                    <p className={`text-sm font-bold break-words ${descricao !== normaOriginal.norm_desc ? 'text-green-700' : 'text-gray-800'}`}>{descricao}</p>
                  </div>
                </div>

              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 shrink-0 rounded-b-xl">
            <button onClick={FecharOuCancelar} className="px-6 py-2 rounded-md font-bold text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 transition-colors shadow-sm">
              {isReviewMode ? "Voltar para Edição" : "Cancelar"}
            </button>
            
            {!isReviewMode ? (
               <button onClick={handlePrimeiroConfirmar} className="px-6 py-2 rounded-md font-bold text-white bg-[#72203E] hover:bg-[#5a1931] transition-colors shadow-md">
                Avançar e Revisar
              </button>
            ) : (
              <button 
                onClick={handleConfirmacaoFinal}
                disabled={tempoEspera > 0 || enviando} 
                className={`px-6 py-2 rounded-md font-bold text-white transition-colors min-w-[250px] shadow-md ${tempoEspera > 0 || enviando ? "bg-gray-400 cursor-not-allowed" : "bg-[#72203E] hover:bg-[#5a1931]"}`}
              >
                {enviando ? "Processando..." : tempoEspera > 0 ? `Aguarde... (${tempoEspera}s)` : (userRole === 'user' ? "Enviar para Aprovação" : "Confirmar Edição")}
              </button>
            )}
          </div>
        </div>
      </div>

      <ModalPDFViewer 
        isOpen={pdfData.isOpen}
        onClose={fecharPdf}
        nomeArquivo={pdfData.nomeArquivo}
        urlPdf={pdfData.urlPdf} 
      />
    </>
  );
}