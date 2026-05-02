import { useState, useRef, useEffect } from "react";

interface Props {
  grupo: string;
  label: string;
  opcoes: string[];
  selecionados: string[];
  onToggle: (valor: string) => void;
  className?: string;
}

function DropdownFiltros({
  label,
  opcoes,
  selecionados,
  onToggle,
  className,
}: Props) {
  const [aberto, setAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAberto(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const opcoesFiltradas = opcoes.filter((op) =>
    op.toLowerCase().includes(busca.toLowerCase()),
  );

  const textoLabel =
    selecionados.length > 0 ? `${label} (${selecionados.length})` : label;

  return (
    <div ref={ref} className={`relative font-sans ${className}`}>
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className={`w-full flex justify-between items-center px-3 sm:px-4 py-1.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors
          ${
            selecionados.length > 0
              ? "bg-[#8a1c32] text-white hover:bg-[#6e1628]"
              : "bg-[#cecece] text-black hover:bg-[#c0c0c0]"
          }`}
      >
        <span className="truncate">{textoLabel}</span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ml-1`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {aberto && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#e5e5e5] border border-gray-300 rounded-xl p-2 sm:p-3 shadow-lg z-50 min-w-[140px] sm:min-w-[160px] max-w-xs">
          {/* Search Field */}
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-lg py-1.5 pl-2 sm:pl-3 pr-7 sm:pr-8 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
            <svg
              className="absolute right-2 top-2 w-3 h-3 sm:w-4 sm:h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Options List */}
          <ul className="space-y-1 max-h-48 overflow-y-auto">
            {opcoesFiltradas.length > 0 ? (
              opcoesFiltradas.map((op) => (
                <li
                  key={op}
                  onClick={() => onToggle(op)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#d4d4d4] cursor-pointer transition-colors text-xs sm:text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selecionados.includes(op)}
                    onChange={() => {}}
                    className="w-4 h-4 accent-[#8a1c32]"
                  />
                  <span className="truncate">{op}</span>
                </li>
              ))
            ) : (
              <li className="text-xs text-gray-500 p-2 text-center">
                Nenhuma opção encontrada
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownFiltros;
