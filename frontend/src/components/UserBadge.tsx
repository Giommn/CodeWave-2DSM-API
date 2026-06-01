import React, { useEffect, useState } from 'react';
import { FaUserShield, FaUserCheck, FaUserCircle } from 'react-icons/fa';

// Função para extrair o cargo REAL de dentro do Token do Backend
function getRealRoleFromToken(): string {
  try {
    const token = localStorage.getItem("token");
    if (!token) return "user";
    
    const payload = JSON.parse(atob(token.split(".")[1]));
    // Puxa o nivel_user (que é o nome da sua coluna no BD) ou tenta variações comuns
    const role = payload.nivel_user || payload.role || payload.tipo || "user";
    
    return String(role).toLowerCase();
  } catch {
    return "user";
  }
}

export const UserBadge: React.FC = () => {
  const [role, setRole] = useState<string>('user');

  useEffect(() => {
    // Agora ele ignora o DevSwitcher e pega o cargo que veio do login real
    setRole(getRealRoleFromToken());
  }, []);

  const getRoleConfig = () => {
    switch (role) {
      case 'adm':
      case 'administrador':
        return { 
          label: 'Administrador', 
          color: 'bg-[#72203E] text-white', 
          icon: <FaUserShield className="w-4 h-4" /> 
        };
      case 'checker':
        return { 
          label: 'Checker', 
          color: 'bg-blue-600 text-white', 
          icon: <FaUserCheck className="w-4 h-4" /> 
        };
      case 'user':
      default:
        return { 
          label: 'Usuário', 
          color: 'bg-gray-600 text-white', 
          icon: <FaUserCircle className="w-4 h-4" /> 
        };
    }
  };

  const { label, color, icon } = getRoleConfig();

  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl z-[9999] backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-default ${color}`}>
      {icon}
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-white/70 font-bold uppercase tracking-widest mb-0.5">Logado como</span>
        <span className="text-xs font-black uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
};