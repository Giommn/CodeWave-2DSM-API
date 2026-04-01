import Lupa from "../assets/Lupa.svg";
function BuscarNormas({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="buscar nome da norma..."
        className="inline-flex items-center gap-2 w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-xl py-1 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
      />
      <img src={Lupa} className="absolute right-3 top-2 w-5 h-5" />
    </div>
  );
}
export default BuscarNormas;
