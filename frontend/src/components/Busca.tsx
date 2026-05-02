import Lupa from "../assets/Lupa.svg";

interface Props {
  className?: string;
  valor: string;
  onChange: (v: string) => void;
}

function BuscarNormas({ className = "", valor, onChange }: Props) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Buscar norma..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-xl py-1.5 pl-3 sm:pl-4 pr-9 sm:pr-10 focus:outline-none focus:ring-2 focus:ring-[#8a1c32] text-xs sm:text-sm"
      />
      <img src={Lupa} className="absolute right-2 sm:right-3 top-2.5 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  );
}

export default BuscarNormas;
