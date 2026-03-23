import React, { useState } from 'react';
import Modal from './Modal';

function TelaRequisito() {
  const [modal, setModal] = useState(false);

  return (
    /* --- COMO MUDAR A POSIÇÃO DO QUADRADO (Container Pai) ---
      
      Atualmente, o 'flex' e o 'justify-center' estão centralizando o botão na tela.
      
      - Para mover para a ESQUERDA: Troque 'justify-center' por 'justify-start'
      - Para mover para a DIREITA: Troque 'justify-center' por 'justify-end'
      - Para colocar DOIS botões lado a lado: Adicione 'gap-8' aqui nessa div e 
        crie outro <button> igual a esse logo abaixo.
    */
    <div className="p-10 flex justify-center w-full">
      
      {/* --- O BOTÃO GIGANTE (O Quadrado) ---
        
        - w-[600px] h-[350px]: Define o tamanho exato do quadrado (largura e altura).
        - bg-[#e5e5e5]: É a cor cinza clarinha de fundo.
        - rounded-3xl: Deixa as bordas bem arredondadas.
        - flex items-center justify-center: Garante que o ícone e o texto fiquem no meio exato.
        - space-x-4: Dá o espaço entre o ícone e o texto.
        
        *DICA DE MARGEM*: Se você quiser apenas empurrar ele um pouco pra baixo, 
        adicione 'mt-10' (margin-top). Se quiser empurrar para a esquerda, adicione 'ml-10'.
      */}
      <button 
        onClick={() => setModal(true)}
        className="w-[600px] h-[350px] bg-[#e5e5e5] rounded-3xl flex items-center justify-center space-x-4 hover:bg-[#d4d4d4] transition-colors cursor-pointer"
      >
        
        {/* ÍCONE (Símbolo de Mais no círculo) */}
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#8c8c8c" /* Cor cinza do ícone */
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>

        {/* TEXTO */}
        <span className="text-4xl font-semibold text-[#8c8c8c]">
          Adicionar requisito
        </span>

      </button>

      {/* O Modal continua aqui embaixo, sem alterações */}
      <Modal isOpen={modal} onClose={() => setModal(false)} />
    </div>
  )
}

export default TelaRequisito;