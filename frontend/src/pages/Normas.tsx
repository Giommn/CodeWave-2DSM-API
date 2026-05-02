import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import UploadsCards from "../components/UploadsCards";
import DropdownFiltros from "../components/DropdownFiltros";
import FiltroData from "../components/FiltroData";
import BuscarNormas from "../components/Busca";
import RemoverFiltros from "../components/RemoverFiltros";
import ListaNormas from "../components/ListaNormas";

export interface FiltroAtivo {
  grupo: string;
  valor: string;
}

export interface ResponseNorm {
  id_norm: number;
  norm_titulo: string;
  norm_desc: string;
  norm_codigo: string;
  org_criador: string;
  emissao: string;
  adm_criador: string;
  referencias: string[];
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

function Normas() {
  const [normas, setNormas] = useState<ResponseNorm[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [filtrosAtivos, setFiltrosAtivos] = useState<FiltroAtivo[]>([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [termoBusca, setTermoBusca] = useState("");

  const fetchNormas = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/norma/getnorms`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Erro ao buscar normas");
      const data = await res.json();
      setNormas(data.resposta);
    } catch (e: any) {
      setErro(e.message);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    fetchNormas();
  }, [fetchNormas]);

  const emissoresUnicos = [...new Set(normas.map((n) => n.org_criador))];

  const toggleFiltro = (grupo: string, valor: string) => {
    setFiltrosAtivos((prev) => {
      const jaExiste = prev.find((f) => f.grupo === grupo && f.valor === valor);
      return jaExiste
        ? prev.filter((f) => !(f.grupo === grupo && f.valor === valor))
        : [...prev, { grupo, valor }];
    });
  };

  const removerFiltro = (grupo: string, valor: string) =>
    setFiltrosAtivos((prev) =>
      prev.filter((f) => !(f.grupo === grupo && f.valor === valor)),
    );

  const removerTodosFiltros = () => {
    setFiltrosAtivos([]);
    setDataInicio("");
    setDataFim("");
    setTermoBusca("");
  };

  const parseData = (dataStr: string) => {
    const [d, m, y] = dataStr.split("-");
    return new Date(`${y}-${m}-${d}`);
  };

  const normasFiltradas = normas.filter((n) => {
    if (
      termoBusca &&
      !n.norm_titulo.toLowerCase().includes(termoBusca.toLowerCase())
    )
      return false;

    const emissoresFiltro = filtrosAtivos
      .filter((f) => f.grupo === "Emissor")
      .map((f) => f.valor);
    if (emissoresFiltro.length > 0 && !emissoresFiltro.includes(n.org_criador))
      return false;

    if (dataInicio || dataFim) {
      const dataEmissao = parseData(n.emissao);
      if (dataInicio && dataEmissao < new Date(dataInicio)) return false;
      if (dataFim && dataEmissao > new Date(dataFim)) return false;
    }

    return true;
  });

  const temFiltroAtivo = filtrosAtivos.length > 0 || dataInicio || dataFim;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 px-3 sm:px-6 pb-16 sm:pb-6 w-full">
      <Navbar />
      <UploadsCards onNormaCadastrada={fetchNormas} />

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:items-center sm:flex-wrap">
        <div className="flex flex-col items-center gap-2 sm:gap-3 sm:items-start sm:flex-row w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
          <RemoverFiltros onClick={removerTodosFiltros} />
          <DropdownFiltros
            grupo="Emissor"
            label="Emissor"
            opcoes={emissoresUnicos}
            selecionados={filtrosAtivos
              .filter((f) => f.grupo === "Emissor")
              .map((f) => f.valor)}
            onToggle={(valor) => toggleFiltro("Emissor", valor)}
            className="w-full sm:flex-1 sm:min-w-[140px] sm:min-w-[160px]"
          />
          <FiltroData
            dataInicio={dataInicio}
            dataFim={dataFim}
            onChangeInicio={setDataInicio}
            onChangeFim={setDataFim}
            className="w-full sm:flex-1 sm:min-w-[140px] sm:min-w-[200px]"
          />
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xs mx-auto sm:mx-0 sm:w-full">
          <BuscarNormas
            className="w-full sm:max-w-xs"
            valor={termoBusca}
            onChange={setTermoBusca}
          />
        </div>

        {/* Active Filters Display */}
        {temFiltroAtivo && (
          <div className="flex items-start gap-2 flex-wrap">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 leading-8">
              Filtros:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {filtrosAtivos.map((f) => (
                <span
                  key={`${f.grupo}-${f.valor}`}
                  className="flex items-center gap-1 bg-[#cecece] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                >
                  <span className="truncate">{f.valor}</span>
                  <button
                    onClick={() => removerFiltro(f.grupo, f.valor)}
                    className="ml-1 text-gray-600 hover:text-black font-bold leading-none flex-shrink-0"
                  >
                    ×
                  </button>
                </span>
              ))}
              {(dataInicio || dataFim) && (
                <span className="flex items-center gap-1 bg-[#cecece] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                  <span className="truncate text-xs">
                    {dataInicio || "..."} → {dataFim || "..."}
                  </span>
                  <button
                    onClick={() => {
                      setDataInicio("");
                      setDataFim("");
                    }}
                    className="ml-1 text-gray-600 hover:text-black font-bold leading-none flex-shrink-0"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      {carregando ? (
        <div className="text-center py-12 text-gray-400">
          Carregando normas...
        </div>
      ) : erro ? (
        <div className="text-center py-12 text-red-500">{erro}</div>
      ) : (
        <ListaNormas
          arquivos={normasFiltradas}
          apiUrl={API_URL}
          onNormaExcluida={fetchNormas}
        />
      )}
    </div>
  );
}

export default Normas;
