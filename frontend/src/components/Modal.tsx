import React from 'react';

// Isso diz ao TypeScript o que o Modal precisa receber para funcionar
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  // Se o estado for falso (não está aberto), ele não renderiza nada na tela
  if (!isOpen) return null;

  return (
    // Fundo escuro transparente (Overlay) que cobre a tela toda
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      
      {/* Caixa do Modal em si */}
      <div className="bg-white p-6 rounded-xl w-[500px] shadow-lg">
        
        {/* Cabeçalho com o botão de fechar */}
        <div className="flex justify-between items-center border-b border-gray-400 pb-3 mb-4">
          <h2 className="text-xl font-bold text-black">Meu Modal de Teste</h2>
          <button 
            onClick={onClose} 
            className="text-black font-bold text-xl hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        {/* Corpo do Modal */}
        <p className="text-gray-700">
          Deu certo! O seu estado do React mudou para "true" e fez este modal aparecer.
        </p>
        
        {/* Botão de fechar no rodapé */}
        <div className="mt-6 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#8a1c32] text-white px-4 py-2 rounded-lg hover:bg-[#6b1526] transition-colors"
          >
            Fechar Modal
          </button>
        </div>

      </div>
    </div>
  );
}

export default Modal;