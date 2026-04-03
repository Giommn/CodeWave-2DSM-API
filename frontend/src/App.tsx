import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Normas from "./pages/Normas";
import Cadastro from "./pages/cadastro";
import Login from "./pages/Login";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota do Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota padrão (raiz) - redireciona para login se não autenticado */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          } 
        />
        
        {/* Outras rotas protegidas */}
        <Route 
          path="/normas" 
          element={
            isAuthenticated ? <Normas /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/cadastro" 
          element={
            isAuthenticated ? <Cadastro /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;