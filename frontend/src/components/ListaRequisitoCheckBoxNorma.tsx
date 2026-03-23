import React, { useState, useEffect } from 'react';

function ListaRequisitoCheckBoxNorma() {
  const [estaAberto, setEstaAberto] = useState(false);
  
  // 1. MEMÓRIA: Busca as normas salvas ou inicia vazio
  const [itensSelecionados, setItensSelecionados] = useState<number[]>(() => {
    const salvos = localStorage.getItem('normasSelecionadas');
    return salvos ? JSON.parse(salvos) : [];
  });

  const normasOriginais = [
    { id: 1, titulo: 'Exemplo de Norma 1' },
    { id: 2, titulo: 'Exemplo de Norma 2' },
    { id: 3, titulo: 'Exemplo de Norma 3' },
    { id: 4, titulo: 'Exemplo de Norma 4' },
    { id: 5, titulo: 'Exemplo de Norma 5' },
  ];

  const [listaExibicao, setListaExibicao] = useState(normasOriginais);

  // 2. SALVAMENTO AUTOMÁTICO
  useEffect(() => {
    localStorage.setItem('normasSelecionadas', JSON.stringify(itensSelecionados));
  }, [itensSelecionados]);

  // 3. REORDENAÇÃO: Roda sempre que o menu é aberto
  useEffect(() => {
    if (estaAberto) {
      const marcados = normasOriginais.filter(n => itensSelecionados.includes(n.id));
      const desmarcados = normasOriginais.filter(n => !itensSelecionados.includes(n.id));
      setListaExibicao([...marcados, ...desmarcados]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAberto]);

  const alternarItem = (id: number) => {
    setItensSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative w-full font-sans">
      <button
        type="button"
        onClick={() => setEstaAberto(!estaAberto)}
        className="w-full flex justify-between items-center bg-[#cecece] px-4 py-3 rounded-xl text-black font-semibold hover:bg-[#c0c0c0] transition-colors"
      >
        <span className="text-xl">Norma</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${estaAberto ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {estaAberto && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#e5e5e5] border border-gray-300 rounded-xl p-2 shadow-lg z-50">
          <ul className="space-y-1 max-h-48 overflow-y-auto pr-1">
            {listaExibicao.map((item) => (
              <li 
                key={item.id} 
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#d4d4d4] cursor-pointer transition-colors"
                onClick={() => alternarItem(item.id)}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#8a1c32] rounded border-gray-400 cursor-pointer shrink-0"
                  checked={itensSelecionados.includes(item.id)}
                  onChange={() => {}} 
                />
                <span className="text-base text-black font-medium">{item.titulo}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListaRequisitoCheckBoxNorma;