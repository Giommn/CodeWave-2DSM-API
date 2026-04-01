import UploadsCards from "../components/UploadsCards";
import DropdownFiltros from "../components/DropdownFiltros";
import BuscarNormas from "../components/Busca";
import RemoverFiltros from "../components/RemoverFiltros";

function Normas() {
  return (
    <div className="flex flex-col gap-6 p-6 w-full">
      <UploadsCards />
      <div className="flex gap-4 items-center w-full">
        <RemoverFiltros />
        <DropdownFiltros className="flex-1" />
        <DropdownFiltros className="flex-1" />
        <DropdownFiltros className="flex-1" />
      </div>
      <BuscarNormas className="w-70 h-20" />
    </div>
  );
}
export default Normas;
