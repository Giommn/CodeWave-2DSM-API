import SemFiltro from "../assets/SemFiltro.svg";

function RemoverFiltros({ className = "" }) {
  return (
    <button
      className={`py-1 px-3 bg-[#72203E] rounded-xl inline-flex items-center gap-2 text-white font-semibold ${className}`}
    >
      <img src={SemFiltro} />
      Remover filtros
    </button>
  );
}
export default RemoverFiltros;
