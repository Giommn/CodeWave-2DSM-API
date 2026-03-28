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
      localStorage.setItem("token", data.token);
      navigate("/Home");
    } catch (err) {
      setError("Email ou senha incorretos.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-[64px]">BEM-VINDO</h1>
          <p className="font-bold italic text-[20px] text-[#78787A] mb-35">
            Insira seu dados para efetuar o login
          </p>
          <form onSubmit={handleLogin} className="flex flex-col w-[500px]">
            <label className="text-[20px]">E-mail:</label>
            <input
              type="text"
              placeholder="Insira seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[20px] border rounded-full py-3 pl-4 mb-5 font-light italic"
            />
            <label className="text-[20px]">Senha:</label>
            <input
              type="password"
              placeholder="Insira sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[20px] border rounded-full py-3 pl-4 mb-10 font-light italic"
            />
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-[#74213D] rounded-full font-bold text-[32px] text-white"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-10 bg-[#C8C8C8]">
          <img src={LogoAkaer} alt="Logo da Akaer" />
          <img src={AkaerEscrita} alt="Akaer" />
        </div>
      </div>
    </>
  );
}

export default Login;
