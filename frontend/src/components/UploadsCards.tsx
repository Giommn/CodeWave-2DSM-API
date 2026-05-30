import { useState } from "react";
import nuvemUpload from "../assets/nuvemUpload.png";
import Add from "../assets/Add.png";
import { ModalCriarNorma } from "./ModalCriarNorma"; 
import { ModalCriarNota } from "./ModalCriarNota";
import { ResponseNorm } from "../pages/Normas";

interface Props {
  onNormaCadastrada: () => void;
  normas: ResponseNorm[]; // NOVO: Recebendo as normas do backend
}

function UploadsCards({ onNormaCadastrada, normas }: Props) {
  const [modalNormaAberto, setModalNormaAberto] = useState(false);
  const [modalNotaAberto, setModalNotaAberto] = useState(false);

  return (
    <>
      <div className="flex gap-8 w-full">
        <button
          onClick={() => setModalNormaAberto(true)}
          className="flex-1 flex border border-dashed items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl justify-center hover:bg-[#c8c8c8] transition-colors cursor-pointer shadow-sm hover:shadow-md"
        >
          <img src={nuvemUpload} alt="Upload" />
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Cadastrar norma
          </h1>
        </button>

        <button
          onClick={() => setModalNotaAberto(true)}
          className="flex-1 flex items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl border border-dashed justify-center hover:bg-[#c8c8c8] transition-colors cursor-pointer shadow-sm hover:shadow-md"
        >
          <img src={Add} alt="Add" />
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Adicionar notas
          </h1>
        </button>
      </div>

      {modalNormaAberto && (
        <ModalCriarNorma
          onFechar={() => setModalNormaAberto(false)}
          onSucesso={onNormaCadastrada}
          normasExistentes={normas} // NOVO: Repassando para o modal
        />
      )}

      {modalNotaAberto && (
        <ModalCriarNota
          onFechar={() => setModalNotaAberto(false)}
          onSucesso={onNormaCadastrada}
          normasExistentes={normas} // Repassando para a nota também
        />
      )}
    </>
  );
}

export default UploadsCards;