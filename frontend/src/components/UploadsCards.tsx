import { useState } from "react";
import nuvemUpload from "../assets/nuvemUpload.png";
import Add from "../assets/Add.png";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// Decodifica o JWT pra pegar o id_user sem biblioteca extra
function getIdFromToken(): number | null {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id_user ?? payload.id ?? null;
  } catch {
    return null;
  }
}

interface ModalProps {
  onFechar: () => void;
  onSucesso: () => void;
}

function ModalCadastrarNorma({ onFechar, onSucesso }: ModalProps) {
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  const [form, setForm] = useState({
    norm_titulo: "",
    norm_desc: "",
    emissao: "",
    org_desc: "",
    org_sigla: "",
    norm_codigo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) setArquivo(f);
  };

  const handleSubmit = async () => {
    if (!arquivo) return;
    setEnviando(true);
    setErroMsg("");

    try {
      const token = localStorage.getItem("token");
      const adm_criador = getIdFromToken();

      if (!token || !adm_criador) {
        throw new Error("Usuário não autenticado. Faça login antes de enviar.");
      }

      const metadata = {
        norm_titulo: form.norm_titulo,
        norm_desc: form.norm_desc,
        emissao: form.emissao,
        org_desc: form.org_desc,
        org_sigla: form.org_sigla,
        norm_codigo: form.norm_codigo,
        adm_criador,
      };

      const formData = new FormData();
      formData.append("arquivo", arquivo);
      formData.append("metadata", JSON.stringify(metadata));

      const res = await fetch(`${API_URL}/norma/cadastro`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Erro ao cadastrar norma");
      }

      onSucesso();
      onFechar();
    } catch (e: any) {
      setErroMsg(e.message);
    } finally {
      setEnviando(false);
    }
  };

  const camposValidos =
    form.norm_titulo &&
    form.norm_desc &&
    form.emissao &&
    form.org_desc &&
    form.org_sigla &&
    form.norm_codigo &&
    arquivo;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">
            Adicionando nova norma:
          </h2>
          <button
            onClick={onFechar}
            className="text-gray-400 hover:text-black text-2xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-4">
          {/* Área de upload */}
          <label
            className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-colors
              ${
                dragging
                  ? "border-[#8a1c32] bg-[#fdf0f2]"
                  : "border-gray-300 bg-[#D9D9D9] hover:border-[#8a1c32]"
              }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf,image/*"
              className="hidden"
              onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
            />
            {arquivo ? (
              <div className="flex flex-col items-center gap-1 px-4 text-center">
                <svg
                  className="w-8 h-8 text-[#8a1c32]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  {arquivo.name}
                </span>
                <span className="text-xs text-gray-400">
                  {(arquivo.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-500">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <span className="text-sm">Upload das normas...</span>
                <span className="text-xs text-gray-400">
                  PDF ou imagem — arraste ou clique
                </span>
              </div>
            )}
          </label>

          {/* Titulo */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Titulo
            </label>
            <input
              name="norm_titulo"
              type="text"
              placeholder="Ex: norma exemplo 1..."
              value={form.norm_titulo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Descrição:
            </label>
            <textarea
              name="norm_desc"
              value={form.norm_desc}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32] resize-none"
            />
          </div>

          {/* Código */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Código:
            </label>
            <input
              name="norm_codigo"
              type="text"
              placeholder="Ex: ISO-9001"
              value={form.norm_codigo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
          </div>

          {/* Data + Emissor */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Data de emissão:
              </label>
              <input
                name="emissao"
                type="date"
                value={form.emissao}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Emissor:
              </label>
              <input
                name="org_desc"
                type="text"
                placeholder="Ex: Associação Brasileira de Normas Técnicas"
                value={form.org_desc}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
              />
            </div>
          </div>

          {/* Sigla */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Sigla do emissor:
            </label>
            <input
              name="org_sigla"
              type="text"
              placeholder="Ex: ABNT"
              value={form.org_sigla}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a1c32]"
            />
          </div>

          {erroMsg && (
            <p className="text-red-500 text-sm text-center">{erroMsg}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={!camposValidos || enviando}
            className="w-full bg-[#8a1c32] text-white font-semibold py-3 rounded-xl hover:bg-[#6e1628] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {enviando ? "Cadastrando..." : "Cadastrar nova norma"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface Props {
  onNormaCadastrada: () => void;
}

function UploadsCards({ onNormaCadastrada }: Props) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="flex gap-8 w-full">
        <button
          onClick={() => setModalAberto(true)}
          className="flex-1 flex border border-dashed items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl justify-center hover:bg-[#c8c8c8] transition-colors cursor-pointer"
        >
          <img src={nuvemUpload} alt="Upload" />
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Cadastrar norma
          </h1>
        </button>

        <div className="flex-1 flex items-center bg-[#D9D9D9] p-40 gap-3 rounded-2xl border border-dashed justify-center">
          <img src={Add} alt="Add" />
          <h1 className="text-[#78787A] font-medium text-[32px]">
            Adicionar requisitos
          </h1>
        </div>
      </div>

      {modalAberto && (
        <ModalCadastrarNorma
          onFechar={() => setModalAberto(false)}
          onSucesso={onNormaCadastrada}
        />
      )}
    </>
  );
}

export default UploadsCards;
