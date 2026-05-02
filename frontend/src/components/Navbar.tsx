import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoDocumentOutline, IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import AkaerLogo from "../assets/Akaer.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const userRole = localStorage.getItem("userRole") || "user";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole"); 
    navigate("/login");
  };

  const menuItems = [
    {
      id: "home",
      texto: "Home",
      icon: <IoHomeOutline className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      path: "/",
      roles: ["adm", "checker", "user"] 
    },
    {
      id: "normas",
      texto: "Normas",
      icon: <IoDocumentOutline className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      path: "/normas",
      roles: ["adm", "checker", "user"] 
    },
    {
      id: "admin",
      // MUDANÇA: Nome dinâmico
      texto: userRole === "adm" ? "Ger. usuarios" : "Usuários",
      icon: <GrUserManager className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      path: "/cadastro",
      // MUDANÇA: Liberado para todos verem
      roles: ["adm", "checker", "user"] 
    },
    {
      id: "notificacao",
      texto: userRole === "user" ? "Pedidos" : "Notificação",
      icon: <IoIosNotificationsOutline className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />,
      path: "/notificacoes",
      roles: ["adm", "checker", "user"] 
    }
  ];

  const itensPermitidos = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <>
      <div className="h-24 w-full"></div>

      <nav className={`fixed left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "top-2" : "top-4"}`}>
        
        <ul className="flex items-center gap-1 sm:gap-2 bg-[#70243d] rounded-full p-2 shadow-lg max-w-fit whitespace-nowrap transition-all duration-300">
          
          <li className={`transition-all duration-300 flex items-center justify-center ${isScrolled ? "px-2" : "px-4"}`}>
            <img
              src={AkaerLogo}
              alt="Logo Akaer"
              className={`h-auto transition-all duration-300 ${isScrolled ? "w-8 sm:w-10" : "w-10 sm:w-12"}`}
            />
          </li>

          {itensPermitidos.map((item) => {
          const ativar = location.pathname === item.path;
          return (
            <li
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex items-center cursor-pointer transition-all duration-300 rounded-full font-bold antialiased transform-gpu backface-hidden text-sm sm:text-base
                ${isScrolled ? "px-3 py-2" : "px-4 sm:px-6 py-2"}
                ${ativar ? "bg-white text-black shadow-md" : "text-white hover:bg-[#8a334d]"}`}
            >
              {item.icon}
              
              <span 
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                  ${isScrolled ? "max-w-0 opacity-0 ml-0" : "max-w-[150px] opacity-100 ml-2"}`}
              >
                {item.texto}
              </span>
            </li>
          );
        })}

          <li
            onClick={handleLogout}
            className={`flex items-center cursor-pointer transition-all duration-300 rounded-full font-bold antialiased text-sm sm:text-base text-white hover:bg-red-600 
              ${isScrolled ? "px-3 py-2 ml-1" : "px-4 sm:px-6 py-2 ml-2"}`}
          >
            <IoLogOutOutline className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            
            <span 
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                ${isScrolled ? "max-w-0 opacity-0 ml-0" : "max-w-[150px] opacity-100 ml-2"}`}
            >
              Sair
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;