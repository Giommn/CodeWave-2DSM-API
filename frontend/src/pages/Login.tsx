import LogoAkaer from "../assets/LogoAkaer.png";
import AkaerEscrita from "../assets/AkaerEscrita.png";

function Login() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-[64px]">BEM-VINDO</h1>
          <p className="font-bold italic text-[20px] text-[#78787A] mb-35">
            Insira seu dados para efetuar o login
          </p>
          <form className="flex flex-col w-[500px]">
            <label className="text-[20px]">E-mail:</label>
            <input
              type="text"
              placeholder="Insira seu Email"
              className="text-[20px] border rounded-full py-3 pl-4 mb-5 font-light italic"
            />
            <label className="text-[20px]">Senha:</label>
            <input
              type="password"
              placeholder="Insira sua Senha"
              className="text-[20px] border rounded-full py-3 pl-4 mb-10 font-light italic"
            />
            <button
              type="submit"
              className="bg-[#74213D] rounded-full font-bold text-[32px] text-white"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-10 bg-[#C8C8C8]">
          <img src={LogoAkaer} alt="Logo da Akaer" className="" />
          <img src={AkaerEscrita} alt="Akaer" />
        </div>
      </div>
    </>
  );
}

export default Login;
