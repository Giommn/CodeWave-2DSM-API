import { useState, useEffect } from 'react';

interface Props {
  onChange?: (selecionados: number[]) => void;
}

function ListaRequisitoCheckBoxCategorizacao({ onChange }: Props) {
  const [estaAberto, setEstaAberto] = useState(false);
  
  // 1. Estado para guardar o texto da busca
  const [termoBusca, setTermoBusca] = useState('');

  const [itensSelecionados, setItensSelecionados] = useState<number[]>(() => {
    const salvos = localStorage.getItem('categoriasSelecionadas');
    return salvos ? JSON.parse(salvos) : [];
  });

  const categoriasOriginais = [
    { id: 1, titulo: 'Exemplo de Categoria 1' },
    { id: 2, titulo: 'Exemplo de Categoria 2' },
    { id: 3, titulo: 'Exemplo de Categoria 3' },
    { id: 4, titulo: 'Exemplo de Categoria 4' },
    { id: 5, titulo: 'Exemplo de Categoria 5' },
  ];

  const [listaExibicao, setListaExibicao] = useState(categoriasOriginais);

  useEffect(() => {
    localStorage.setItem('categoriasSelecionadas', JSON.stringify(itensSelecionados));
    if (onChange) {
      onChange(itensSelecionados);
    }
  }, [itensSelecionados, onChange]);

  useEffect(() => {
    if (estaAberto) {
      const marcados = categoriasOriginais.filter(c => itensSelecionados.includes(c.id));
      const desmarcados = categoriasOriginais.filter(c => !itensSelecionados.includes(c.id));
      setListaExibicao([...marcados, ...desmarcados]);
    } else {
      // Limpa a barra de pesquisa ao fechar o menu
      setTermoBusca('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAberto]);

  const alternarItem = (id: number) => {
    setItensSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // 2. Filtra as categorias baseadas no que o usuário digitou
  const itensFiltrados = listaExibicao.filter((item) =>
    item.titulo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="relative w-full font-sans">
      <button
        type="button"
        onClick={() => setEstaAberto(!estaAberto)}
        className="w-full flex justify-between items-center bg-[#cecece] px-4 py-3 rounded-xl text-black font-semibold hover:bg-[#c0c0c0] transition-colors"
      >
        <span className="text-xl">Categorização</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${estaAberto ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {estaAberto && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#e5e5e5] border border-gray-300 rounded-xl p-2 shadow-lg z-50">
          
          {/* 3. BARRA DE PESQUISA DA CATEGORIA */}
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Buscar categoria..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-xl py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <ul className="space-y-1 max-h-48 overflow-y-auto pr-1">
            {/* 4. Renderiza apenas os itens filtrados */}
            {itensFiltrados.length > 0 ? (
              itensFiltrados.map((item) => (
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
              ))
            ) : (
              <li className="p-2 text-gray-500 text-sm text-center">
                Nenhum resultado encontrado.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListaRequisitoCheckBoxCategorizacao;
