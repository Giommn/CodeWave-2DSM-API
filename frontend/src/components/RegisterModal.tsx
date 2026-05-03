import React, { useState } from "react";
import { FaUserShield, FaUserCheck, FaUser } from "react-icons/fa";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: {
    email: string;
    nome: string;
    senha: string;
    nivel_user: "ADM" | "CHECKER" | "USER";
  }) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [nivel_user, setNivelUser] = useState<"ADM" | "CHECKER" | "USER">("USER");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !nome || !senha || !confirmSenha) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    if (senha !== confirmSenha) {
      setError("As senhas não coincidem");
      return;
    }

    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um endereço de email válido");
      return;
    }

    onSubmit({ email, nome, senha, nivel_user });
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setNome("");
    setSenha("");
    setConfirmSenha("");
    setNivelUser("USER");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  // Definição dos tipos de usuários para mapeamento nos Cards
  const roles = [
    {
      id: "ADM" as const,
      titulo: "Administrador",
      descricao: "Controle total. Pode aprovar pedidos e gerenciar usuários.",
      Icone: FaUserShield
    },
    {
      id: "CHECKER" as const,
      titulo: "Verificador",
      descricao: "Faz o mesmo que o ADM, mas não gerencia outros usuários.",
      Icone: FaUserCheck
    },
    {
      id: "USER" as const,
      titulo: "Usuário Padrão",
      descricao: "Apenas cria pedidos para serem aprovados por superiores.",
      Icone: FaUser
    }
  ];

  return (
    // Aumentado padding e overflow-y para evitar que corte em telas menores
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[7px] flex items-center justify-center z-50 p-4 overflow-y-auto">
      {/* Modal esticado para max-w-3xl para caber as 3 colunas confortavelmente */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-8 mx-auto my-auto">
        
        {/* Cabeçalho */}
        <div className="relative flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Criar Nova Conta
          </h2>
          <button
            onClick={handleClose}
            className="absolute right-0 text-gray-400 hover:text-gray-700 text-3xl font-bold leading-none mb-1 transition-colors"
            title="Fechar modal"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* GRUPO 1: Campos de Texto (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-1.5">
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome completo"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a334d] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a334d] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-bold text-gray-700 mb-1.5">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Crie uma senha"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a334d] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="confirmSenha" className="block text-sm font-bold text-gray-700 mb-1.5">
                Confirmar Senha
              </label>
              <input
                id="confirmSenha"
                type="password"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                placeholder="Repita a senha"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a334d] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* GRUPO 2: Área de Seleção de Cargo (Caixinhas Horizontais) */}
          <div className="pt-2">
            <label className="block text-sm font-bold text-gray-700 mb-3 text-center md:text-left">
              Nível de Acesso (Cargo)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {roles.map((role) => {
                const isSelected = nivel_user === role.id;
                return (
                  <div
                    key={role.id}
                    onClick={() => setNivelUser(role.id)}
                    className={`flex flex-col items-center text-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:-translate-y-1
                      ${isSelected 
                        ? 'border-[#8a334d] bg-red-50 shadow-md' 
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-sm'
                      }`}
                  >
                    <role.Icone 
                      className={`w-8 h-8 mb-3 transition-colors 
                        ${isSelected ? 'text-[#8a334d]' : 'text-gray-400'}`} 
                    />
                    <span className={`text-sm font-bold mb-1 ${isSelected ? 'text-[#8a334d]' : 'text-gray-800'}`}>
                      {role.titulo}
                    </span>
                    <span className={`text-xs leading-snug ${isSelected ? 'text-[#8a334d]/80' : 'text-gray-500'}`}>
                      {role.descricao}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GRUPO 3: Botões de Ação (Direita) */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors min-w-[120px]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-[#8a334d] text-white rounded-lg font-bold hover:bg-[#6b253b] transition-colors shadow-md min-w-[160px]"
            >
              Registrar Conta
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};