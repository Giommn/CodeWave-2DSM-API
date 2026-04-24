import { IoCloseOutline } from "react-icons/io5";

interface ModalPDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  nomeArquivo: string;
  // TODO: BACKEND - Esta URL deve ser o link real do S3/Servidor onde o PDF está hospedado
  urlPdf: string; 
}

export function ModalPDFViewer({ isOpen, onClose, nomeArquivo, urlPdf }: ModalPDFViewerProps) {
  if (!isOpen) return null;

  return (
    // Z-index [10005] para garantir que fique por cima do ModalNotificacao (z-[9999])
    <div className="fixed inset-0 z-[10005] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Cabeçalho do Visualizador */}
        <div className="flex justify-between items-center p-4 bg-[#70243d] text-white">
          <h2 className="font-bold text-lg truncate pr-4">Visualizando: {nomeArquivo}</h2>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-300 transition-colors bg-white/10 p-1 rounded-md"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        {/* Corpo do Visualizador (Nativo do Navegador)
          O uso do iframe permite usar o CTRL+F nativo do navegador e selecionar texto facilmente.
        */}
        <div className="flex-1 w-full h-full bg-gray-100">
          <iframe 
            src={`${urlPdf}#toolbar=0`} // O '#toolbar=0' tenta esconder a barra de download superior em alguns navegadores
            className="w-full h-full border-none"
            title={`Visualizador do arquivo ${nomeArquivo}`}
          />
        </div>

      </div>
    </div>
  );
}