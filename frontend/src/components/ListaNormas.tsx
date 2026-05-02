import { useState } from "react";

interface ResponseNorm {
  id_norm: number;
  norm_titulo: string;
  norm_desc: string;
  norm_codigo: string;
  org_criador: string;
  emissao: string;
  adm_criador: string;
  referencias: string[];
  pdf_caminho?: string;
}

interface Props {
  arquivos: ResponseNorm[];
  apiUrl: string;
  onNormaExcluida: () => void;
}

function ListaNormas({ arquivos, apiUrl, onNormaExcluida }: Props) {
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [excluindo, setExcluindo] = useState<number | null>(null);

  const toggleSelecionado = (id: number) =>
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

  const toggleTodos = () =>
    setSelecionados(
      selecionados.length === arquivos.length
        ? []
        : arquivos.map((a) => a.id_norm),
    );

  const handleExcluir = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta norma?")) return;
    setExcluindo(id);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/norma/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      onNormaExcluida();
    } catch {
      alert("Erro ao excluir norma.");
    } finally {
      setExcluindo(null);
    }
  };

  if (arquivos.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 sm:p-12 text-gray-400 text-base sm:text-lg rounded-2xl border border-dashed border-gray-300">
        Nenhuma norma encontrada.
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4 bg-gray-100 px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide overflow-x-auto">
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#8a1c32] flex-shrink-0"
            checked={
              selecionados.length === arquivos.length && arquivos.length > 0
            }
            onChange={toggleTodos}
          />
          <span className="flex-[3]">Nome da norma</span>
          <span className="flex-[1]">Código</span>
          <span className="w-28 flex-shrink-0">Data</span>
          <span className="flex-[2]">Emissor</span>
          <span className="flex-[2]">Criador</span>
          <span className="w-24 flex-shrink-0 text-center">Ações</span>
        </div>

        {arquivos.map((norma, index) => (
          <div
            key={norma.id_norm}
            className={`flex items-center gap-4 px-4 py-3 text-sm border-t border-gray-200 transition-colors overflow-x-auto
              ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              hover:bg-[#fdf0f2]`}
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#8a1c32] flex-shrink-0"
              checked={selecionados.includes(norma.id_norm)}
              onChange={() => toggleSelecionado(norma.id_norm)}
            />

            <span className="flex-[3] font-medium text-gray-800 truncate">
              {norma.norm_titulo}
            </span>

            <span className="flex-[1] text-gray-500 text-xs font-mono truncate">
              {norma.norm_codigo}
            </span>

            <span className="w-28 flex-shrink-0">
              <span className="border border-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-lg whitespace-nowrap inline-block">
                {norma.emissao}
              </span>
            </span>

            <span className="flex-[2] text-gray-600 truncate">
              {norma.org_criador}
            </span>

            <span className="flex-[2] text-gray-500 truncate">
              {norma.adm_criador}
            </span>

            <div className="w-24 flex-shrink-0 flex items-center justify-center gap-2">
              <button
                title="Download"
                className="text-gray-400 hover:text-[#8a1c32] transition-colors"
                onClick={() =>
                  window.open(`${apiUrl}/norma/getpdf/${norma.pdf_caminho}`, "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </button>

              <button
                title="Excluir"
                disabled={excluindo === norma.id_norm}
                onClick={() => handleExcluir(norma.id_norm)}
                className="text-gray-400 hover:text-red-600 transition-colors disabled:opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                  />
                </svg>
              </button>

              <button
                title="Mais opções"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="12" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 p-4">
        {arquivos.map((norma) => (
          <div
            key={norma.id_norm}
            className="border border-gray-200 rounded-lg p-4 bg-white hover:bg-[#fdf0f2] transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#8a1c32] mt-1 flex-shrink-0"
                checked={selecionados.includes(norma.id_norm)}
                onChange={() => toggleSelecionado(norma.id_norm)}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 break-words mb-1">
                  {norma.norm_titulo}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  Código: {norma.norm_codigo}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-3 px-0">
              <div>
                <p className="font-semibold text-gray-600">Data</p>
                <span className="border border-gray-300 text-gray-700 px-2 py-1 rounded inline-block">
                  {norma.emissao}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Emissor</p>
                <p className="text-gray-600 break-words">{norma.org_criador}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold text-gray-600">Criador</p>
                <p className="text-gray-500 break-words">{norma.adm_criador}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-3">
              <button
                title="Download"
                className="text-gray-400 hover:text-[#8a1c32] transition-colors"
                onClick={() =>
                  window.open(`${apiUrl}/norma/getpdf/${norma.pdf_caminho}`, "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </button>

              <button
                title="Excluir"
                disabled={excluindo === norma.id_norm}
                onClick={() => handleExcluir(norma.id_norm)}
                className="text-gray-400 hover:text-red-600 transition-colors disabled:opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                  />
                </svg>
              </button>

              <button
                title="Mais opções"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="12" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaNormas;