import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home          from "./pages/Home";
import Normas        from "./pages/Normas";
import Cadastro      from "./pages/cadastro";
import Login         from "./pages/Login";
import Notificacoes  from "./pages/Notificacoes";
import { UserBadge }      from "./components/UserBadge";
import { LayoutProtegido } from "./layouts/LayoutProtegido";

// ─── Helper ──────────────────────────────────────────────────────────────────
function getRole(): string {
  return (localStorage.getItem("userRole") ?? "user").trim().toLowerCase();
}

// ─── DEV TOOL (remover em produção) ──────────────────────────────────────────
function DevRoleSwitcher() {
  const currentRole = getRole();
  const changeRole  = (newRole: string) => {
    localStorage.setItem("userRole", newRole);
    window.location.reload();
  };
  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg z-[9999] shadow-2xl backdrop-blur-sm border border-gray-600">
      <p className="text-xs font-bold mb-2 text-gray-300 uppercase tracking-wider">Dev Switcher</p>
      <div className="flex gap-2">
        <button onClick={() => changeRole("adm")}     className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "adm"     ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>ADM</button>
        <button onClick={() => changeRole("checker")} className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "checker" ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>CHECKER</button>
        <button onClick={() => changeRole("user")}    className={`px-2 py-1 text-xs font-bold rounded ${currentRole === "user"    ? "bg-[#72203E]" : "bg-gray-700 hover:bg-gray-600"}`}>USER</button>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  const userRole        = getRole();
  const isAdmOrChecker  = userRole === "adm" || userRole === "checker";

  console.debug("[App] userRole:", JSON.stringify(userRole), "| isAdmOrChecker:", isAdmOrChecker);

  return (
    <BrowserRouter>

      

      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        <Route element={isAuthenticated ? <LayoutProtegido /> : <Navigate to="/login" replace />}>
          <Route path="/"             element={<Home />} />
          <Route path="/normas"       element={<Normas />} />
          <Route path="/notificacoes" element={<Notificacoes />} />

          {/* Cadastro restrito a ADM e CHECKER */}
          <Route
            path="/cadastro"
            element={isAdmOrChecker ? <Cadastro /> : <Navigate to="/" replace />}
          />
        </Route>

        {/* Qualquer rota desconhecida redireciona para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;