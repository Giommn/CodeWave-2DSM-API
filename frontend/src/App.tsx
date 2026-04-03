import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Normas from "./pages/Normas";
import Cadastro from "./pages/cadastro"; // 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normas" element={<Normas />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* ← Adicione esta linha */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;