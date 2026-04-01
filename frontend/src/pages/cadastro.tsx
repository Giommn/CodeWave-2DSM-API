import { useState, useEffect } from "react";
import { RegisterModal } from "../components/RegisterModal";
import Navibar from "../components/Navibar";
import CardsDados from "../components/CardsDados";

export default function Cadastro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [registeredUsers, setRegisteredUsers] = useState<
    Array<{ id_user?: number; email: string; user_name: string; nivel_user: "ADM" | "USER" }>
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch users from database on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/getusers");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setRegisteredUsers(data.resposta || []);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleRegisterSubmit = async (userData: {
    email: string;
    nome: string;
    senha: string;
    nivel_user: "ADM" | "USER";
  }) => {
    try {
      const response = await fetch("http://localhost:3000/createuser", {
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

      // Refresh users list from database
      const usersResponse = await fetch("http://localhost:3000/getusers");
      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        setRegisteredUsers(usersData.resposta || []);
      }

      setIsModalOpen(false);

      alert(`Usuário registrado com sucesso: ${userData.nome}`);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Falha no registro. Por favor, tente novamente.");
    }
  };

  const filteredUsers = registeredUsers.filter(
    (user) =>
      user.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                      user: { id_user?: number; email: any; user_name: any; nivel_user: "ADM" | "USER" },
                      index: any,
                    ) => (
                      <tr
                        key={user.id_user || index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.user_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.nivel_user === "ADM"
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.nivel_user === "ADM" ? 'Sim' : 'Não'}
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
