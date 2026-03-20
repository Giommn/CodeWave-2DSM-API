import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoDocumentOutline, IoHomeOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

function Navbar() {
  const [ativa, setAtiva] = useState("home");

  const menuItems = [
    {
      id: "home",
      texto: "Home",
      icon: <IoHomeOutline className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: "normas",
      texto: "Normas",
      icon: <IoDocumentOutline className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: "perfil",
      texto: "Perfil",
      icon: <CgProfile className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: "admin",
      texto: "Ger. usuarios",
      icon: <GrUserManager className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <nav className="flex justify-center w-full mt-10 mb-6 px-4 sm:px-6 lg:px-8 py-6 overflow-x-auto">
      <ul className="flex items-center gap-2 sm:gap-3 bg-[#70243d] rounded-full p-2 shadow-lg max-w-fit whitespace-nowrap">
        {/* Logo */}
        <li className="pl-4 pr-2">
          <img
            src="/img/Akaer.png"
            alt="Logo Akaer"
            className="w-10 h-auto sm:w-12"
          />
        </li>

        {/* Menu Items */}
        {menuItems.map((item) => {
          const ativar = ativa === item.id;
          return (
            <li
              key={item.id}
              onClick={() => setAtiva(item.id)}
              className={`flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-full px-4 sm:px-6 py-2
                ${ativar ? "bg-white text-black shadow-md" : "text-white hover:bg-[#8a334d]"}`}
            >
              {item.icon}
              <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                {item.texto}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
