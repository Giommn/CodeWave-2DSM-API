import React from "react";
import { CiSearch } from "react-icons/ci";

interface User {
  id: string;
  nome: string;
  email: string;
  nivel: string;
  isAdmin: boolean;
  avatarUrl?: string;
}

const TabelaUser: React.FC = () => {
  const users: User[] = [
    {
      id: "#291",
      nome: "yuri gonçalves",
      email: "yurigoncalvesds@gmail.com",
      nivel: "Administrador",
      isAdmin: true,
      avatarUrl: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white rounded-xl shadow-sm m-5">
      <div className="bg-[#722F37] p-4 rounded-t-xl">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <CiSearch size={18} />
          </span>
          <input
            type="text"
            placeholder="Procurar usuario"
            className="w-full pl-10 pr-4 py-2 rounded-md border-none focus:ring-2 focus:ring-pink-300 outline-none text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 font-bold text-sm text-black border-r border-gray-200 w-16 text-center">
                id
              </th>
              <th className="p-4 font-bold text-sm text-black border-r border-gray-200">
                nome do usuario
              </th>
              <th className="p-4 font-bold text-sm text-black border-r border-gray-200">
                email do usuario
              </th>
              <th className="p-4 font-bold text-sm text-black border-r border-gray-200">
                nivel de acesso
              </th>
              <th className="p-4 font-bold text-sm text-black text-center">
                Administrador
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 text-sm border-r border-gray-200 text-center font-medium">
                  {user.id}
                </td>
                <td className="p-4 text-sm border-r border-gray-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatarUrl}
                      alt={user.nome}
                      className="w-8 h-8 rounded-full border border-gray-200"
                    />
                    {user.nome}
                  </div>
                </td>
                <td className="p-4 text-sm border-r border-gray-200 text-blue-600 underline decoration-gray-400 cursor-pointer">
                  {user.email}
                </td>
                <td className="p-4 text-sm border-r border-gray-200 text-center">
                  {user.nivel}
                </td>
                <td className="p-4 text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={user.isAdmin}
                      className="sr-only peer"
                      readOnly
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-green-400 after:content-[''] after:absolute  after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </td>
              </tr>
            ))}

            {[...Array(5)].map((_, i) => (
              <tr key={`empty-${i}`} className="border-b border-gray-100 h-12">
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaUser;
