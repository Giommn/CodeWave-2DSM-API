import React, { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: {
    email: string;
    nome: string;
    senha: string;
    nivel_user: "ADM" | "USER";
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
  const [nivel_user, setNivelUser] = useState<"ADM" | "USER">("USER");
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[7px] bg-opacity-100 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <div className="relative flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold bg-[#8a334d] text-white text-center rounded-2xl p-2 px-3 sm:px-4">
            Criar Conta
          </h2>
          <button
            onClick={handleClose}
            className="absolute right-0 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold"
            title="Fechar modal"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Nome Completo:
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="confirmSenha"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Confirmar Senha:
            </label>
            <input
              id="confirmSenha"
              type="password"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              placeholder="Confirme sua senha"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-start sm:items-center gap-2">
            <input
              id="nivel_user"
              type="checkbox"
              checked={nivel_user === "ADM"}
              onChange={(e) => setNivelUser(e.target.checked ? "ADM" : "USER")}
              className="w-4 h-4 text-red-600 bg-red-500 border-red-700 rounded focus:ring-2 focus:ring-red-500 mt-1 sm:mt-0 flex-shrink-0"
            />
            <label
              htmlFor="nivel_user"
              className="text-xs sm:text-sm font-medium text-gray-700 leading-tight"
            >
              <b>Administrador</b>, este usuário terá permissão para alterar e
              cadastrar normas e notas técnicas
            </label>
          </div>

          <div className="flex gap-2 sm:gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-3 sm:px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium text-sm hover:bg-gray-300 transition"
              title="Cancelar registro"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-3 sm:px-4 py-2 bg-red-900 text-white rounded-lg font-medium text-sm hover:bg-[#8a334d] transition"
              title="Enviar formulário de registro"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
