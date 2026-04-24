import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Normas from "./pages/Normas";
import Cadastro from "./pages/cadastro";
import Login from "./pages/Login";
import Notificacoes from "./pages/Notificacoes";

function DevRoleSwitcher() {
  const currentRole = localStorage.getItem("userRole") || "user";

  const changeRole = (newRole: string) => {
    localStorage.setItem("userRole", newRole);
    window.location.reload(); 
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg z-[9999] shadow-2xl backdrop-blur-sm border border-gray-600">
      <p className="text-xs font-bold mb-2 text-gray-300 uppercase tracking-wider">Dev Switcher</p>
      <div className="flex gap-2">
        <button onClick={() => changeRole("adm")} className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "adm" ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>ADM</button>
        <button onClick={() => changeRole("checker")} className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "checker" ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>CHECKER</button>
        <button onClick={() => changeRole("user")} className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "user" ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>USER</button>
      </div>
    </div>
  );
}

function App() {
  const isAuthenticated = true; 
  const userRole = localStorage.getItem("userRole") || "user"; 

  return (
    <BrowserRouter>
      <DevRoleSwitcher /> 

      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/normas" element={isAuthenticated ? <Normas /> : <Navigate to="/login" replace />} />
        
        <Route 
          path="/notificacoes" 
          element={
            isAuthenticated && (userRole === "adm" || userRole === "checker" || userRole === "user") 
            ? <Notificacoes /> 
            : <Navigate to="/" replace /> 
          } 
        />

        {/* MUDANÇA: Rota liberada para todos os usuários logados */}
        <Route 
          path="/cadastro" 
          element={
            isAuthenticated 
            ? <Cadastro /> 
            : <Navigate to="/" replace /> 
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;