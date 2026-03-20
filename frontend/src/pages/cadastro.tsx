/**
 * Página de Cadastro de Usuários
 * 
 * Componente principal que gerencia a página de registro de usuários.
 * Exibe um botão para abrir o modal de registro e uma tabela com os
 * usuários já registrados no sistema.
 * 
 * @component
 * @returns {JSX.Element} Página de cadastro com modal de registro e lista de usuários
 */

import { useState } from 'react';
import { RegisterModal } from '../components/RegisterModal';

/**
 * Componente da página de cadastro de usuários
 * Gerencia o estado do modal de registro e a lista de usuários registrados
 */
export default function Cadastro() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estado para armazenar a lista de usuários registrados
  const [registeredUsers, setRegisteredUsers] = useState<
    Array<{ email: string; name: string; password: string }>
  >([]);

  /**
   * Manipula o envio do formulário de registro de usuário
   * Envia os dados para a API de backend e adiciona o usuário à lista local
   * @param {Object} userData - Dados do usuário (email, name, password)
   */
  const handleRegisterSubmit = async (userData: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      // Envia requisição POST para registrar novo usuário
      // TODO: Substituir com o endpoint real da sua API
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.json();
      console.log('Usuário registrado com sucesso:', result);

      // Adiciona o novo usuário à lista local (para fins de demonstração)
      setRegisteredUsers([...registeredUsers, userData]);

      // Fecha o modal após registro bem-sucedido
      setIsModalOpen(false);

      // Exibe mensagem de sucesso
      alert(`Usuário registrado com sucesso: ${userData.name}`);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Falha no registro. Por favor, tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da Página */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Cadastro de Usuários</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Botão para Abrir Modal de Registro */}
        <div className="mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
            title="Abrir formulário para novo registro de usuário"
          >
            + Novo Cadastro de Usuário
          </button>
        </div>

        {/* Tabela de Usuários Registrados */}
        {registeredUsers.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Usuários Registrados ({registeredUsers.length})
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nome</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Senha (Comprimento)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registeredUsers.map((user, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {'*'.repeat(user.password.length)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">Nenhum usuário registrado ainda.</p>
            <p className="text-gray-500 text-sm mt-2">
              Clique no botão acima para registrar um novo usuário.
            </p>
          </div>
        )}
      </div>

      {/* Modal de Registro */}
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRegisterSubmit}
      />
    </div>
  );
}
