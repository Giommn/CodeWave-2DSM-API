import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import Normas from "./pages/Normas";
import Cadastro from "./pages/cadastro";
import Login from "./pages/Login";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Rota do Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota padrão (raiz) - redireciona para login se não autenticado */}
        <Route 
          path="/" 
          element={
            <Home />
          } 
        />
        
        {/* Outras rotas protegidas */}
        <Route 
          path="/normas" 
          element={
            <Normas />
          } 
        />
        <Route 
          path="/cadastro" 
          element={
            <Cadastro />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;