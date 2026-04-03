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
        placeholder="buscar nome da norma..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#c4c4c4] text-black placeholder-gray-600 rounded-xl py-1.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
      />
      <img src={Lupa} className="absolute right-3 top-2 w-5 h-5" />
    </div>
  );
}

export default BuscarNormas;
