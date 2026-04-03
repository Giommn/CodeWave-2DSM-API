import { useNavigate, useLocation } from "react-router-dom";
import { IoDocumentOutline, IoHomeOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import AkaerLogo from "../assets/Akaer.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      id: "home",
      texto: "Home",
      icon: <IoHomeOutline className="w-5 h-5 sm:w-6 sm:h-6" />,
      path: "/",
    },
    {
      id: "normas",
      texto: "Normas",
      icon: <IoDocumentOutline className="w-5 h-5 sm:w-6 sm:h-6" />,
      path: "/normas",
    },
    {
      id: "admin",
      texto: "Ger. usuarios",
      icon: <GrUserManager className="w-5 h-5 sm:w-6 sm:h-6" />,
      path: "/cadastro",
    },
  ];

  return (
    <nav className="flex justify-center w-full mt-4 px-4 sm:px-6 lg:px-8 overflow-x-auto">
      <ul className="flex items-center gap-2 sm:gap-3 bg-[#70243d] rounded-full p-2 shadow-lg max-w-fit whitespace-nowrap">
        <li className="pl-4 pr-2">
          <img
            src={AkaerLogo}
            alt="Logo Akaer"
            className="w-10 h-auto sm:w-12"
          />
        </li>

        {menuItems.map((item) => {
          const ativar = location.pathname === item.path;
          return (
            <li
              key={item.id}
              onClick={() => navigate(item.path)}
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

        {/* Botão de Logout */}
        <li
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-full px-4 sm:px-6 py-2 text-white hover:bg-red-600 ml-2"
        >
          <IoLogOutOutline className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base font-bold whitespace-nowrap">
            Sair
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;