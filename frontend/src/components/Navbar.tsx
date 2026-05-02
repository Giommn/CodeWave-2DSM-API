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
    <>
      {/* Desktop Menu */}
      <nav className="hidden sm:flex justify-center w-full mt-4 px-4 lg:px-8 relative z-40">
        <div className="flex items-center gap-2 sm:gap-3 bg-[#70243d] rounded-full p-2 shadow-lg max-w-fit">
          <div className="pl-2 sm:pl-4 pr-1 sm:pr-2">
            <img
              src={AkaerLogo}
              alt="Logo Akaer"
              className="w-8 h-auto sm:w-10 lg:w-12"
            />
          </div>

          {menuItems.map((item) => {
            const ativar = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-full px-3 sm:px-4 lg:px-6 py-2
                  ${ativar ? "bg-white text-black shadow-md" : "text-white hover:bg-[#8a334d]"}`}
              >
                {item.icon}
                <span className="text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap">
                  {item.texto}
                </span>
              </button>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-full px-3 sm:px-4 lg:px-6 py-2 text-white hover:bg-red-600 ml-1 sm:ml-2"
          >
            <IoLogOutOutline className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap">
              Sair
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#70243d] border-t border-[#8a334d] shadow-lg z-40">
        <div className="flex items-center justify-around h-16">
          {menuItems.map((item) => {
            const ativar = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center w-full h-full py-2 transition-colors
                  ${ativar ? "bg-white text-[#70243d]" : "text-white hover:bg-[#8a334d]"}`}
              >
                {item.icon}
                <span className="text-xs font-bold mt-0.5 whitespace-nowrap">{item.texto}</span>
              </button>
            );
          })}

          {/* Mobile Logout Button */}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center justify-center w-full h-full py-2 text-white hover:bg-red-600 transition-colors"
          >
            <IoLogOutOutline className="w-5 h-5" />
            <span className="text-xs font-bold mt-0.5 whitespace-nowrap">Sair</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;