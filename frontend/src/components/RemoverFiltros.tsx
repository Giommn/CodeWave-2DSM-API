interface Props {
  onClick: () => void;
}

function RemoverFiltros({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-[#8a1c32] text-white px-4 py-1.5 rounded-xl font-semibold hover:bg-[#6e1628] transition-colors whitespace-nowrap"
    >
      {}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h18M3 4l6 7v5l6 3V11L21 4M3 4l18 18"
        />
      </svg>
      Remover todos os filtros
    </button>
  );
}

export default RemoverFiltros;
