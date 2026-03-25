import nuvemUpload from "../assets/nuvemUpload.png";
import Add from "../assets/Add.png";

function UploadsCards() {
  return (
    <>
      <div className="flex gap-8 justify-center">
        <div className="flex border border-dashed items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl">
          <img src={nuvemUpload}></img>
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Cadastrar norma
          </h1>
        </div>
        <div className="flex items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl border border-dashed">
          <img src={Add}></img>
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Adicionar requisitos
          </h1>
        </div>
      </div>
    </>
  );
}
export default UploadsCards;
