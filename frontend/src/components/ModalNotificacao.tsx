import { useState, useEffect } from "react";
import { IoCloseOutline, IoEyeOutline, IoDocumentTextOutline, IoGitCompareOutline } from "react-icons/io5";
import { ModalPDFViewer } from "./ModalPDFViewer";

export interface PedidoNorma {
  id: number;
  titulo: string;
  descricao: string;
  codigo: string;
  data_emissao: string;
  data_pedido: string;
  emissor: string;
  sigla_emissor: string;
  nome_arquivo: string; 
  url_arquivo: string; 
  tamanho: string;
  nome_solicitante: string;
  tipo_pedido: 'criacao' | 'edicao';
  status: 'pendente' | 'aprovado' | 'recusado';
  normas_relacionadas: string[];
  categoria: string;
  interpretacao_tecnica: string;
  abordagens_aceitaveis: string;
  pontos_atencao: string;
  versao_anterior?: Partial<PedidoNorma>; 
}

export interface NormaEmVigor {
  codigo: string;
  titulo: string;
  descricao: string;
  nome_arquivo: string;
  url_arquivo: string;
}

interface ModalNotificacaoProps {
  isOpen: boolean;
  onClose: () => void;
  pedido: PedidoNorma | null;
  onAprovar: (id: number) => void;
  onRecusar: (id: number) => void;
  onNavegarTag: (codigoNorma: string) => void;
  normaPreviewData: NormaEmVigor | null; 
  onClosePreview: () => void; 
}

export function ModalNotificacao({ 
  isOpen, 
  onClose, 
  pedido, 
  onAprovar, 
  onRecusar, 
  onNavegarTag,
  normaPreviewData,
  onClosePreview
}: ModalNotificacaoProps) {
  
  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });
  
  const [isComparing, setIsComparing] = useState(false);
  const userRole = localStorage.getItem("userRole") || "user";

  useEffect(() => {
    setIsComparing(false);
  }, [pedido]);

  if (!isOpen || !pedido) return null;

  const abrirPdf = (nomeArquivo: string, urlPdf: string) => {
    setPdfData({ isOpen: true, nomeArquivo, urlPdf });
  };

  const FecharEResetar = () => {
    setIsComparing(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6 overflow-y-auto">
        <div className={`bg-white rounded-xl shadow-xl w-full transition-all duration-300 relative my-auto ${isComparing ? 'max-w-7xl' : 'max-w-2xl'}`}>
          
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex flex-col">
              <h2 className="text-gray-800 font-bold text-xl">
                {userRole === "user" ? "Detalhes do seu pedido" : `Avaliando pedido de ${pedido.tipo_pedido === 'edicao' ? 'Edição' : 'Criação'}: ${pedido.codigo}`}
              </h2>
              
              {pedido.normas_relacionadas && pedido.normas_relacionadas.length > 0 && (
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-xs text-gray-500">Baseado nas normas:</span>
                  {pedido.normas_relacionadas.map((tag, idx) => (
                    <button 
                      key={idx}
                      onClick={() => onNavegarTag(tag)} 
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 px-3 py-0.5 rounded text-xs font-bold cursor-pointer transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              {pedido.tipo_pedido === 'edicao' && !isComparing && (
                <button 
                  onClick={() => setIsComparing(true)}
                  className="flex items-center gap-2 bg-white text-[#72203E] border border-[#72203E] hover:bg-gray-50 px-4 py-2 rounded-md font-bold text-sm transition-colors"
                >
                  <IoGitCompareOutline className="w-5 h-5" />
                  Comparar com versão atual
                </button>
              )}
              {isComparing && (
                <button 
                  onClick={() => setIsComparing(false)}
                  className="text-sm font-bold text-gray-500 hover:text-gray-700 underline"
                >
                  Sair da comparação
                </button>
              )}
              <button onClick={FecharEResetar} className="text-gray-400 hover:text-gray-600 transition-colors">
                <IoCloseOutline className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className={`p-6 max-h-[60vh] overflow-y-auto custom-scrollbar ${isComparing ? 'grid grid-cols-2 gap-8 bg-gray-50' : 'flex flex-col gap-4'}`}>
            
            {isComparing && pedido.versao_anterior && (
              <div className="flex flex-col gap-4 border-r border-gray-300 pr-8">
                <h3 className="text-lg font-bold text-gray-700 border-b border-gray-300 pb-2 mb-2">Versão Atual (Em Vigor)</h3>
                
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center border border-gray-300">
                  <IoDocumentTextOutline className="w-6 h-6 text-gray-600 mb-2" />
                  <p className="text-sm text-gray-700 font-bold text-center truncate w-full mb-3">
                    {pedido.versao_anterior.nome_arquivo}
                  </p>
                  <button 
                    onClick={() => abrirPdf(pedido.versao_anterior?.nome_arquivo || "", pedido.versao_anterior?.url_arquivo || "")}
                    className="bg-white border border-gray-400 text-gray-700 px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-50 transition-colors w-full"
                  >
                    Abrir PDF Atual
                  </button>
                </div>

                <div><label className="block text-xs font-bold text-gray-500 mb-1">Título</label><input type="text" disabled value={pedido.versao_anterior.titulo} className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600" /></div>
                <div><label className="block text-xs font-bold text-gray-500 mb-1">Descrição:</label><textarea disabled value={pedido.versao_anterior.descricao} rows={2} className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 resize-none"></textarea></div>
                <div><label className="block text-xs font-bold text-gray-500 mb-1">Interpretação Técnica:</label><textarea disabled value={pedido.versao_anterior.interpretacao_tecnica} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 resize-none"></textarea></div>
                <div><label className="block text-xs font-bold text-gray-500 mb-1">Abordagens Aceitáveis:</label><textarea disabled value={pedido.versao_anterior.abordagens_aceitaveis} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 resize-none"></textarea></div>
                <div><label className="block text-xs font-bold text-gray-500 mb-1">Pontos de Atenção:</label><textarea disabled value={pedido.versao_anterior.pontos_atencao} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-200 text-gray-600 resize-none"></textarea></div>
              </div>
            )}

            <div className={`flex flex-col gap-4 ${isComparing ? 'bg-white p-6 rounded-lg shadow-sm border border-gray-300' : ''}`}>
              {isComparing && (
                <h3 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2 mb-2 flex items-center justify-between">
                  Nova Proposta (Edição)
                  <span className="bg-[#72203E] text-white text-[10px] px-2 py-1 rounded-full uppercase">Novo</span>
                </h3>
              )}

              <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center border border-dashed border-gray-300">
                <IoEyeOutline className="w-8 h-8 text-gray-500 mb-2" />
                <p className="text-sm text-gray-700 font-medium text-center">
                  Documento anexado: <span className="font-bold text-gray-800">{pedido.nome_arquivo}</span>
                </p>
                <button 
                  onClick={() => abrirPdf(pedido.nome_arquivo, pedido.url_arquivo)}
                  className="mt-4 bg-[#72203E] text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-[#5a1931] transition-colors"
                >
                  Visualizar Proposta no Visualizador
                </button>
              </div>

              <div><label className="block text-sm font-bold text-gray-700 mb-1">Título</label><input type="text" disabled value={pedido.titulo} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium" /></div>
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Descrição:</label><textarea disabled value={pedido.descricao} rows={2} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium resize-none"></textarea></div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Categoria:</label>
                <input list="categorias-opcoes" disabled value={pedido.categoria} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium" />
              </div>
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Interpretação Técnica:</label><textarea disabled value={pedido.interpretacao_tecnica} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium resize-none"></textarea></div>
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Abordagens Aceitáveis:</label><textarea disabled value={pedido.abordagens_aceitaveis} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium resize-none"></textarea></div>
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Pontos de Atenção:</label><textarea disabled value={pedido.pontos_atencao} rows={3} className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-800 font-medium resize-none"></textarea></div>
            </div>
          </div>

          {pedido.status === 'pendente' && (userRole === 'adm' || userRole === 'checker') ? (
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => onRecusar(pedido.id)}
                className="px-6 py-2 rounded-md font-bold text-gray-700 border border-gray-400 hover:bg-gray-200 transition-colors bg-white"
              >
                Recusar Proposta
              </button>
              <button 
                onClick={() => onAprovar(pedido.id)}
                className="px-6 py-2 rounded-md font-bold text-white bg-[#72203E] hover:bg-[#5a1931] transition-colors"
              >
                Aprovar e Cadastrar
              </button>
            </div>
          ) : (
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end rounded-b-xl">
              <button onClick={FecharEResetar} className="px-6 py-2 rounded-md font-bold text-gray-700 border border-gray-300 bg-white hover:bg-gray-100">
                Fechar Detalhes
              </button>
            </div>
          )}
        </div>
      </div>

      {normaPreviewData && (
        <div className="fixed inset-0 z-[10010] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative flex flex-col gap-4 border-t-4 border-[#72203E]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Norma em Vigor</span>
                <h3 className="font-bold text-lg text-gray-800 leading-tight">{normaPreviewData.codigo} - {normaPreviewData.titulo}</h3>
              </div>
              <button onClick={onClosePreview} className="text-gray-400 hover:text-gray-600"><IoCloseOutline className="w-6 h-6"/></button>
            </div>
            
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200">
              {normaPreviewData.descricao}
            </p>

            <button 
              onClick={() => abrirPdf(normaPreviewData.nome_arquivo, normaPreviewData.url_arquivo)}
              className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 border border-gray-300 font-bold py-2 rounded hover:bg-gray-50 transition-colors"
            >
              <IoEyeOutline className="w-5 h-5" />
              Visualizar PDF Oficial
            </button>
          </div>
        </div>
      )}

      <ModalPDFViewer 
        isOpen={pdfData.isOpen}
        onClose={() => setPdfData({ ...pdfData, isOpen: false })}
        nomeArquivo={pdfData.nomeArquivo}
        urlPdf={pdfData.urlPdf} 
      />
    </>
  );
}