import React from "react";
import { FaUserPlus, FaUsers } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";

interface CardsDadosProps {
  setIsModalOpen: (value: boolean) => void;
  totalUsers?: number;
  totalAdmins?: number;
}

const CardsDados: React.FC<CardsDadosProps> = ({
  setIsModalOpen,
  totalAdmins,
  totalUsers,
}) => {
  const dashboardData = [
    {
      id: 1,
      titulo: "Total de usuários",
      valor: totalUsers ?? 0,
      icon: <FaUsers size={20} />,
      isBotao: false,
    },
    {
      id: 2,
      titulo: "Total de admins",
      valor: totalAdmins ?? 0,
      icon: <BsShieldCheck size={20} />,
      isBotao: false,
    },
    {
      id: 3,
      titulo: "Cadastrar novo usuário",
      valor: "Acessar",
      icon: <FaUserPlus size={20} />,
      isBotao: true,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 justify-center items-center">
      {dashboardData.map((item) => (
        <button
          key={item.id}
          onClick={() => item.isBotao && setIsModalOpen(true)}
          className={`flex flex-col items-start flex-1 min-w-[160px] max-w-xs sm:max-w-sm p-4 sm:p-5 rounded-2xl transition-all text-left
            ${
              item.isBotao
                ? "bg-[#D9D9D9] hover:bg-gray-300 active:scale-95 cursor-pointer shadow-sm"
                : "bg-[#D9D9D9] cursor-default"
            }`}
        >
          <div className="text-gray-700 mb-2 text-lg sm:text-xl">{item.icon}</div>
          <h3 className="text-gray-600 font-medium text-xs sm:text-sm leading-tight">
            {item.titulo}
          </h3>
          <span className="text-black font-bold text-base sm:text-lg mt-1">
            {item.valor}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CardsDados;
