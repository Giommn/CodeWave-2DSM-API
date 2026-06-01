import React from "react";
import { FaUserPlus, FaUsers } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";

interface CardsDadosProps {
  setIsModalOpen: (value: boolean) => void;
  totalUsers?: number;
  totalAdmins?: number;
  userRole?: string; // NOVO: Propriedade para receber a função do usuário
}

const CardsDados: React.FC<CardsDadosProps> = ({
  setIsModalOpen,
  totalAdmins,
  totalUsers,
  userRole = "user", // Fallback seguro
}) => {
  // 1. Criamos a lista base (apenas com os cards de leitura)
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
  ];

  // 2. Condição de Segurança: Adiciona o card de "Cadastrar" SOMENTE se for ADM
  if (userRole === "adm") {
    dashboardData.push({
      id: 3,
      titulo: "Cadastrar novo usuário",
      valor: "Acessar",
      icon: <FaUserPlus size={20} />,
      isBotao: true,
    });
  }

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
      {dashboardData.map((item) => (
        <button
          key={item.id}
          onClick={() => item.isBotao && setIsModalOpen(true)}
          className={`flex flex-col items-start w-64 p-4 rounded-2xl transition-all text-left
            ${
              item.isBotao
                ? "bg-[#D9D9D9] hover:bg-gray-300 active:scale-95 cursor-pointer shadow-sm"
                : "bg-[#D9D9D9] cursor-default"
            }`}
        >
          <div className="text-gray-700 mb-2">{item.icon}</div>
          <h3 className="text-gray-600 font-medium text-sm leading-tight">
            {item.titulo}
          </h3>
          <span className="text-black font-bold text-lg mt-1">
            {item.valor}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CardsDados;