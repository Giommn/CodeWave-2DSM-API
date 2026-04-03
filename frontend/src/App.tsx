import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Normas from "./pages/Normas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normas" element={<Normas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
