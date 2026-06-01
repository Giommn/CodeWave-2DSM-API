import { useState, useEffect, useRef } from "react";
import { IoCloseOutline, IoEyeOutline, IoChevronDownOutline } from "react-icons/io5";
import { ResponseNorm } from "../pages/Normas";
import { ModalPDFViewer } from "./ModalPDFViewer";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

interface Versao {
  id_norm: number;
  norm_titulo: string;
  norm_desc: string;
  norm_codigo: string;
  emissao: string;
  pdf_caminho: string;
  pdf_nome_original: string;
  org_criador: number;
  referencias: string[];
  notas: any[];
  categoria: string | string[];
  createdAt?: string;
}

// --- FUNÇÃO PARA PEGAR O ID DO USUÁRIO LOGADO ---
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

  // --- ESTADOS DE VERSÃO ---
  const [versoes, setVersoes] = useState<Versao[]>([]);
  const [versaoSelecionada, setVersaoSelecionada] = useState<Versao | null>(null);
  const [isCarregandoVersoes, setIsCarregandoVersoes] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Norma ativa: versão selecionada ou norma original
  const normaAtiva: Versao | (ResponseNorm & any) = versaoSelecionada ?? norma;

  // -------------------------------------------------------------------------
  // REGISTRA HISTÓRICO, REMOVE DO OCULTO E BUSCA VERSÕES AO ABRIR MODAL
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!isOpen || !norma?.id_norm) return;

    setVersaoSelecionada(null);
    setNotasExpandidas([]);

    const inicializarDados = async () => {
      const token = localStorage.getItem("token");
      const idUsuario = getIdFromToken();

      if (token && idUsuario) {
        // 1. Salva no banco de dados e remove do Front-end (Limbo)
        try {
          await fetch(`${API_URL}/norma/saveinhistoric`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              id_norm: norma.id_norm,
              id_user: idUsuario
            })
          });

          const ocultosSalvos = JSON.parse(localStorage.getItem("historico_oculto") || "[]");
          if (ocultosSalvos.includes(norma.id_norm)) {
            const novosOcultos = ocultosSalvos.filter((id: number) => id !== norma.id_norm);
            localStorage.setItem("historico_oculto", JSON.stringify(novosOcultos));
          }
        } catch (error) {
          console.error("Falha ao registrar histórico de visualização:", error);
        }
      }

      // 2. Buscar versões da norma
      setIsCarregandoVersoes(true);
      try {
        const res = await fetch(`${API_URL}/norma/versoes/${norma.id_norm}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Erro ao buscar versões");
        const data = await res.json();
        const lista: Versao[] = Array.isArray(data) ? data : (data.resposta ?? []);
        setVersoes(lista);
      } catch (err) {
        console.error("Falha ao buscar versões:", err);
        setVersoes([]);
      } finally {
        setIsCarregandoVersoes(false);
      }
    };

    inicializarDados();
  }, [isOpen, norma]);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Resetar notas quando mudar de versão
  useEffect(() => {
    setNotasExpandidas([]);
  }, [versaoSelecionada]);

  if (!isOpen || !norma) return null;

  const selecionarVersao = (versao: Versao | null) => {
    setVersaoSelecionada(versao);
    setDropdownAberto(false);
    if (pdfData.urlPdf?.startsWith("blob:")) URL.revokeObjectURL(pdfData.urlPdf);
    setPdfData({ isOpen: false, nomeArquivo: "", urlPdf: "" });
  };

  const abrirPdf = async () => {
    const nomeArquivoParaBuscar = normaAtiva.pdf_caminho || normaAtiva.url_arquivo || normaAtiva.nome_arquivo;

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

      if (!res.ok) throw new Error("Falha ao carregar o PDF do servidor.");

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      setPdfData({ 
        isOpen: true, 
        nomeArquivo: normaAtiva.norm_titulo || normaAtiva.nome_arquivo || nomeArquivoParaBuscar, 
        urlPdf: blobUrl 
      });

    } catch (error) {
      console.error(error);
      alert("Erro ao tentar visualizar o PDF. O arquivo pode não existir no servidor.");
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

  const notas = normaAtiva.notas || [];
  const listaNormas = normaAtiva.referencias || normaAtiva.normas_associadas || [];
  const temNormasAssociadas = Array.isArray(listaNormas) && listaNormas.length > 0;

  const labelVersaoAtual = versaoSelecionada
    ? `${versaoSelecionada.norm_codigo} — ${versaoSelecionada.emissao ?? "sem data"}`
    : `Versão atual (${norma.norm_codigo})`;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transition-all duration-300 relative my-auto flex flex-col">
          
          {/* CABEÇALHO */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 shrink-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-800 font-bold text-xl">
                Visualizando Norma: {normaAtiva.norm_titulo}
              </h2>
              {versaoSelecionada && (
                <span className="text-xs font-semibold text-[#72203E] bg-[#72203E]/10 px-2 py-0.5 rounded w-fit">
                  Versão histórica
                </span>
              )}
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <IoCloseOutline className="w-7 h-7" />
            </button>
          </div>

          {/* CORPO DO MODAL */}
          <div className="p-6 max-h-[65vh] overflow-y-auto custom-scrollbar flex flex-col gap-5">
            
            {/* SELETOR DE VERSÃO */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Versão da Norma:
              </label>
              <button
                onClick={() => setDropdownAberto((v) => !v)}
                disabled={isCarregandoVersoes}
                className="w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 bg-white text-sm text-gray-700 font-medium hover:border-[#72203E] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {isCarregandoVersoes ? (
                    <>
                      <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Carregando versões...
                    </>
                  ) : (
                    labelVersaoAtual
                  )}
                </span>
                <IoChevronDownOutline
                  className={`w-4 h-4 text-gray-500 transition-transform ${dropdownAberto ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownAberto && !isCarregandoVersoes && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                  <button
                    onClick={() => selecionarVersao(null)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                      !versaoSelecionada
                        ? "bg-[#72203E] text-white font-bold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span>Versão atual ({norma.norm_codigo})</span>
                    {!versaoSelecionada && (
                      <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">atual</span>
                    )}
                  </button>

                  {versoes.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-400 italic">
                      Nenhuma versão anterior encontrada.
                    </div>
                  ) : (
                    versoes.map((v) => (
                      <button
                        key={v.id_norm}
                        onClick={() => selecionarVersao(v)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between border-t border-gray-100 ${
                          versaoSelecionada?.id_norm === v.id_norm
                            ? "bg-[#72203E] text-white font-bold"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <span>{v.norm_codigo}</span>
                        <span className={`text-xs ${versaoSelecionada?.id_norm === v.id_norm ? "text-white/70" : "text-gray-400"}`}>
                          {v.emissao ?? "sem data"}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* ÁREA DO ARQUIVO */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center border border-dashed border-gray-300">
              <IoEyeOutline className="w-8 h-8 text-gray-500 mb-2" />
              <button 
                onClick={abrirPdf}
                disabled={isCarregandoPdf}
                className={`text-white px-5 py-2 rounded-md text-sm font-bold transition-colors shadow-sm ${
                  isCarregandoPdf ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#72203E] hover:bg-[#5a1931]'
                }`}
              >
                {isCarregandoPdf ? 'Carregando PDF...' : 'Visualizar PDF no Visualizador'}
              </button>
            </div>

            {/* CAMPOS BÁSICOS */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Título:</label>
                <input type="text" disabled value={normaAtiva.norm_titulo ?? ""} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium cursor-not-allowed" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Data de Emissão:</label>
                <input type="text" disabled value={normaAtiva.emissao || "Não definida"} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium cursor-not-allowed" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Descrição:</label>
                <textarea disabled value={normaAtiva.norm_desc ?? ""} rows={2} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium resize-none cursor-not-allowed"></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Categoria:</label>
                <input type="text" disabled value={Array.isArray(normaAtiva.categoria) ? normaAtiva.categoria.join(", ") : (normaAtiva.categoria || "Não definida")} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-600 font-medium cursor-not-allowed" />
              </div>
              
              {/* CAMPO DE NORMAS ASSOCIADAS */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Normas Associadas:</label>
                
                {temNormasAssociadas ? (
                  <div className="flex flex-wrap gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded-md min-h-[42px]">
                    {listaNormas.map((codigoRef: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (onAbrirNormaAssociada) {
                            onAbrirNormaAssociada(codigoRef);
                          } 
                        }}
                        className="bg-white border border-gray-300 text-[#72203E] hover:bg-[#72203E] hover:text-white hover:border-[#72203E] transition-all text-xs font-bold px-3 py-1.5 rounded shadow-sm cursor-pointer flex items-center gap-1"
                        title={`Ir para norma ${codigoRef}`}
                      >
                        <IoEyeOutline className="w-3.5 h-3.5" />
                        {codigoRef}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-500 font-medium cursor-not-allowed italic text-sm">
                    Nenhuma norma associada a este documento.
                  </div>
                )}
              </div>
            </div>

            {/* SEÇÃO DE NOTAS DINÂMICAS */}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <label className="block text-sm font-bold text-gray-800 mb-3">Notas Adicionais (Requisitos):</label>
              
              {notas.length === 0 ? (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 italic">Nenhuma nota ou requisito vinculado a esta norma.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {notas.map((nota: any, index: number) => {
                    const isExpanded = notasExpandidas.includes(index);
                    
                    const tituloDaNota = nota.notaTitulo || nota.nome || "Nota sem título";
                    const interpretacaoTecnica = nota.notaIT || nota.interpretacao_tecnica || "N/A";
                    const abordagensAceitaveis = nota.notaAB || nota.abordagens_aceitaveis || "N/A";
                    const pontosAtencao = nota.notaPA || nota.pontos_atencao || "N/A";

                    return (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <div 
                          onClick={() => toggleNota(index)}
                          className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-white bg-gray-400 px-2 py-0.5 rounded uppercase tracking-wider">
                              #{index + 1}
                            </span>
                            <span className="text-sm font-bold text-gray-700 truncate">
                              {tituloDaNota}
                            </span>
                          </div>
                          <IoChevronDownOutline className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>

                        {isExpanded && (
                          <div className="p-4 border-t border-gray-200 flex flex-col gap-3 bg-white">
                            <div>
                              <label className="block text-xs font-bold text-gray-600 mb-1">Interpretação Técnica:</label>
                              <textarea disabled value={interpretacaoTecnica} rows={2} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-500 text-sm font-medium resize-none cursor-not-allowed"></textarea>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-600 mb-1">Abordagens Aceitáveis:</label>
                              <textarea disabled value={abordagensAceitaveis} rows={2} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-500 text-sm font-medium resize-none cursor-not-allowed"></textarea>
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-gray-600 mb-1">Pontos de Atenção:</label>
                              <textarea disabled value={pontosAtencao} rows={2} className="w-full border border-gray-200 rounded-md p-2 bg-gray-100 text-gray-500 text-sm font-medium resize-none cursor-not-allowed"></textarea>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* RODAPÉ */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end shrink-0 rounded-b-xl">
            <button 
              onClick={onClose} 
              className="px-6 py-2 rounded-md font-bold text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 transition-colors shadow-sm"
            >
              Fechar Visualização
            </button>
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