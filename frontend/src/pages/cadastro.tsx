import { useState, useEffect, useMemo } from "react";
import { RegisterModal } from "../components/RegisterModal";
import Navbar from "../components/Navbar";
import CardsDados from "../components/CardsDados";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export default function Cadastro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState<
    Array<{
      id_user?: number;
      email: string;
      user_name: string;
      nivel_user: "ADM" | "USER" | "CHECKER";
    }>
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  const userRole = localStorage.getItem("userRole") || "user";
  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = getToken();
        const response = await fetch(`${API_URL}/getusers`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch users");
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
    nivel_user: "ADM" | "USER" | "CHECKER";
  }) => {
    try {
      const token = getToken();
      const response = await fetch(`${API_URL}/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Registration failed");

      const usersResponse = await fetch(`${API_URL}/getusers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        setRegisteredUsers(usersData.resposta || []);
      }

      setIsModalOpen(false);
      alert(`Usuário registrado com sucesso!`);
    } catch (error) {
      alert("Falha no registro.");
    }
  };

  const filteredUsers = registeredUsers.filter(
    (user) =>
      user.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // === CONTAGENS PARA OS QUADRADOS (CardsDados) ===
  const totalUsers = useMemo(() => registeredUsers.length, [registeredUsers]);
  const totalAdmins = useMemo(() => registeredUsers.filter((u) => u.nivel_user === "ADM").length, [registeredUsers]);
  const totalCheckers = useMemo(() => registeredUsers.filter((u) => u.nivel_user === "CHECKER").length, [registeredUsers]);
  const totalCommonUsers = useMemo(() => registeredUsers.filter((u) => u.nivel_user === "USER").length, [registeredUsers]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* QUADRADOS DE CONTAGEM EMBAIXO DA NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* @ts-ignore */}
        <CardsDados
          setIsModalOpen={userRole === "adm" ? setIsModalOpen : () => {}}
          totalAdmins={totalAdmins}
          totalCheckers={totalCheckers}
          totalCommonUsers={totalCommonUsers}
          totalUsers={totalUsers}
          userRole={userRole}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {registeredUsers.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Buscar usuários..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr className="text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    <th className="px-6 py-4">Nome</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4 text-center">Admin</th>
                    <th className="px-6 py-4 text-center">Checker</th>
                    <th className="px-6 py-4 text-center">User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user, index) => (
                    <tr key={user.id_user || index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.user_name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                      
                      {/* Coluna ADMIN - SIM ou NÃO */}
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-bold ${user.nivel_user === 'ADM' ? 'text-red-600' : 'text-gray-300'}`}>
                          {user.nivel_user === "ADM" ? "SIM" : "NÃO"}
                        </span>
                      </td>

                      {/* Coluna CHECKER - SIM ou NÃO */}
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-bold ${user.nivel_user === 'CHECKER' ? 'text-blue-600' : 'text-gray-300'}`}>
                          {user.nivel_user === "CHECKER" ? "SIM" : "NÃO"}
                        </span>
                      </td>

                      {/* Coluna USER - SIM ou NÃO */}
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-bold ${user.nivel_user === 'USER' ? 'text-emerald-600' : 'text-gray-300'}`}>
                          {user.nivel_user === "USER" ? "SIM" : "NÃO"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500">
            Nenhum usuário encontrado.
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