import LogoAkaer from "../assets/LogoAkaer.png";
function Login() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="font-bold text-[64px]">BEM-VINDO</h1>
          <p className="font-bold italic text-[20px] text-[#78787A] mb-28">
            Insira seu dados para efetuar o login
          </p>
          <form className="flex flex-col">
            <label>E-mail:</label>
            <input type="text" placeholder="Insira seu Email" className="" />
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Insira sua Senha"
              className=""
            />
            <button
              type="submit"
              className="bg-[#74213D] rounded-full font-bold text-[32px] text-white "
            >
              Enviar
            </button>
          </form>
        </div>
        <img src={LogoAkaer} alt="" />
      </div>
    </>
  );
}

export default Login;
