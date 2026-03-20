/**
 * Modal de Registro de Usuários
 * 
 * Componente responsável por exibir um popup modal para cadastro de novos usuários.
 * Valida os dados de entrada (nome, email, senha) antes de enviar para processamento.
 * 
 * @component
 * @example
 * <RegisterModal isOpen={true} onClose={handleClose} onSubmit={handleRegister} />
 */

import React, { useState } from 'react';

/**
 * Props do componente RegisterModal
 * @interface RegisterModalProps
 * @property {boolean} isOpen - Define se o modal está aberto ou fechado
 * @property {() => void} onClose - Função chamada ao fechar o modal
 * @property {(userData) => void} onSubmit - Função chamada ao enviar o formulário com dados do usuário
 */
interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: { email: string; name: string; password: string }) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro

  /**
   * Manipula o envio do formulário de registro
   * Valida todos os campos antes de enviar os dados
   * @param {React.FormEvent} e - Evento do formulário
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação: verifica se todos os campos foram preenchidos
    if (!email || !name || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    // Validação: verifica se as senhas são iguais
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // Validação: verifica tamanho mínimo da senha
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Validação: verifica formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um endereço de email válido');
      return;
    }

    // Envia os dados do usuário para processamento
    onSubmit({ email, name, password });
    resetForm();
  };

  /**
   * Limpa todos os campos do formulário
   */
  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  /**
   * Manipula o fechamento do modal, limpando o formulário
   */
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Não renderiza o modal se não estiver aberto
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Criar Conta</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            title="Fechar modal"
          >
            ×
          </button>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Formulário de Registro */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo de Nome Completo */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Campo de Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Campo de Confirmação de Senha */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha:
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
              title="Cancelar registro"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
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
