import { useState } from "react";
import { RegisterModal } from "../components/RegisterModal";
import Navibar from "../components/Navibar";
import CardsDados from "../components/CardsDados";

export default function Cadastro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [registeredUsers, setRegisteredUsers] = useState<
    Array<{ email: string; name: string; isAdmin: boolean }>
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRegisterSubmit = async (userData: {
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
  }) => {
    try {
      const response = await fetch("/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      console.log("Usuário registrado com sucesso:", result);

      setRegisteredUsers([...registeredUsers, userData]);

      setIsModalOpen(false);

      alert(`Usuário registrado com sucesso: ${userData.name}`);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Falha no registro. Por favor, tente novamente.");
    }
  };

  const filteredUsers = registeredUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navibar />

      <CardsDados setIsModalOpen={setIsModalOpen} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {registeredUsers.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Buscar usuários por nome ou email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-2">
                Total de usuários: {registeredUsers.length} | Resultados encontrados: {filteredUsers.length}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(
                    (
                      user: { name: any; email: any;  isAdmin: boolean },
                      index: any,
                    ) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.isAdmin
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.isAdmin ? 'Sim' : 'Não'}
                          </span>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">
              Nenhum usuário registrado ainda.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Clique no botão acima para registrar um novo usuário.
            </p>
          </div>
        )}
      </div>

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRegisterSubmit}
      />
    </div>
  );
}
