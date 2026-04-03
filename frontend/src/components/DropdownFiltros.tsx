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

  // Fecha ao clicar fora
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

  // Label do botão: mostra quantos estão selecionados
  const textoLabel =
    selecionados.length > 0 ? `${label} (${selecionados.length})` : label;

  return (
    <div ref={ref} className={`relative font-sans ${className}`}>
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className={`w-full flex justify-between items-center px-4 py-1.5 rounded-xl font-semibold transition-colors
          ${
            selecionados.length > 0
              ? "bg-[#8a1c32] text-white hover:bg-[#6e1628]"
              : "bg-[#cecece] text-black hover:bg-[#c0c0c0]"
          }`}
      >
        <span>{textoLabel}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${aberto ? "rotate-180" : ""}`}
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
        <div className="absolute top-full left-0 w-full mt-1 bg-[#e5e5e5] border border-gray-300 rounded-xl p-2 shadow-lg z-50 min-w-[160px]">
          {/* Busca dentro do dropdown */}
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-lg py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
            <svg
              className="absolute right-2 top-2 w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <ul className="space-y-1 max-h-48 overflow-y-auto">
            {opcoesFiltradas.length > 0 ? (
              opcoesFiltradas.map((op) => (
                <li
                  key={op}
                  onClick={() => onToggle(op)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#d4d4d4] cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#8a1c32] cursor-pointer shrink-0"
                    checked={selecionados.includes(op)}
                    onChange={() => {}}
                  />
                  <span className="text-sm text-black font-medium">{op}</span>
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500 text-sm text-center">
                Nenhum resultado.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownFiltros;
