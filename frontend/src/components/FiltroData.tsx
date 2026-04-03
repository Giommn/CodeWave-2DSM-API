import { useState, useRef, useEffect } from "react";

interface Props {
  dataInicio: string;
  dataFim: string;
  onChangeInicio: (v: string) => void;
  onChangeFim: (v: string) => void;
  className?: string;
}

function FiltroData({
  dataInicio,
  dataFim,
  onChangeInicio,
  onChangeFim,
  className,
}: Props) {
  const [aberto, setAberto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setAberto(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const temFiltro = dataInicio || dataFim;

  return (
    <div ref={ref} className={`relative font-sans ${className}`}>
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className={`w-full flex justify-between items-center px-4 py-1.5 rounded-xl font-semibold transition-colors
          ${
            temFiltro
              ? "bg-[#8a1c32] text-white hover:bg-[#6e1628]"
              : "bg-[#cecece] text-black hover:bg-[#c0c0c0]"
          }`}
      >
        <span>
          {temFiltro ? `${dataInicio || "..."} → ${dataFim || "..."}` : "Data"}
        </span>
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
        <div className="absolute top-full left-0 mt-1 bg-[#e5e5e5] border border-gray-300 rounded-xl p-4 shadow-lg z-50 min-w-[240px]">
          <p className="text-xs font-semibold text-gray-500 mb-3">
            Intervalo de datas
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">De:</label>
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => onChangeInicio(e.target.value)}
                className="w-full bg-[#c4c4c4] text-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Até:</label>
              <input
                type="date"
                value={dataFim}
                onChange={(e) => onChangeFim(e.target.value)}
                className="w-full bg-[#c4c4c4] text-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FiltroData;
