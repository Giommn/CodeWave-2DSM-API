import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoAkaer from "../assets/LogoAkaer.png";
import AkaerEscrita from "../assets/AkaerEscrita.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.resposta.token);
      window.dispatchEvent(new Event("storage"))
      window.location.href = "/";
    } catch (err) {
      setError("Email ou senha incorretos.");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 lg:py-0">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-[64px] text-center">BEM-VINDO</h1>
          <p className="font-bold italic text-lg sm:text-xl lg:text-[20px] text-[#78787A] mb-8 sm:mb-12 lg:mb-35 text-center max-w-md">
            Insira seu dados para efetuar o login
          </p>
          <form onSubmit={handleLogin} className="flex flex-col w-full max-w-sm lg:w-[500px] px-2 sm:px-0">
            <label className="text-lg sm:text-xl lg:text-[20px] font-medium">E-mail:</label>
            <input
              type="text"
              placeholder="Insira seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base sm:text-lg lg:text-[20px] border rounded-full py-3 pl-4 mb-4 sm:mb-5 font-light italic"
            />
            <label className="text-lg sm:text-xl lg:text-[20px] font-medium">Senha:</label>
            <input
              type="password"
              placeholder="Insira sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-base sm:text-lg lg:text-[20px] border rounded-full py-3 pl-4 mb-6 sm:mb-10 font-light italic"
            />
            {error && <p className="text-red-500 text-center mb-4 text-sm sm:text-base">{error}</p>}
            <button
              type="submit"
              className="bg-[#74213D] rounded-full font-bold text-2xl sm:text-3xl lg:text-[32px] text-white py-3 hover:bg-[#8a334d] transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 sm:gap-10 bg-[#C8C8C8] py-8 lg:py-0 px-4">
          <img src={LogoAkaer} alt="Logo da Akaer" className="w-32 sm:w-44 h-auto" />
          <img src={AkaerEscrita} alt="Akaer" className="w-40 sm:w-56 h-auto" />
        </div>
      </div>
    </>
  );
}

export default Login;
