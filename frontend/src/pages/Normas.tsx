import { useState, useEffect, useCallback } from "react";
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
    <div className="flex flex-col gap-6 p-6 w-full">
      <UploadsCards onNormaCadastrada={fetchNormas} />

      {}
      <div className="flex gap-3 items-center w-full flex-wrap">
        <RemoverFiltros onClick={removerTodosFiltros} />
        <DropdownFiltros
          grupo="Emissor"
          label="Emissor"
          opcoes={emissoresUnicos}
          selecionados={filtrosAtivos
            .filter((f) => f.grupo === "Emissor")
            .map((f) => f.valor)}
          onToggle={(valor) => toggleFiltro("Emissor", valor)}
          className="flex-1 min-w-[160px]"
        />
        <FiltroData
          dataInicio={dataInicio}
          dataFim={dataFim}
          onChangeInicio={setDataInicio}
          onChangeFim={setDataFim}
          className="flex-1 min-w-[200px]"
        />
      </div>

      {}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <BuscarNormas
          className="w-72"
          valor={termoBusca}
          onChange={setTermoBusca}
        />

        {temFiltroAtivo && (
          <div className="flex items-center gap-2 flex-wrap justify-end">
            <span className="text-sm font-semibold text-gray-500">
              Filtros ativos:
            </span>
            {filtrosAtivos.map((f) => (
              <span
                key={`${f.grupo}-${f.valor}`}
                className="flex items-center gap-1 bg-[#cecece] text-black text-sm px-3 py-1 rounded-full"
              >
                {f.valor}
                <button
                  onClick={() => removerFiltro(f.grupo, f.valor)}
                  className="ml-1 text-gray-600 hover:text-black font-bold leading-none"
                >
                  ×
                </button>
              </span>
            ))}
            {(dataInicio || dataFim) && (
              <span className="flex items-center gap-1 bg-[#cecece] text-black text-sm px-3 py-1 rounded-full">
                {dataInicio || "..."} → {dataFim || "..."}
                <button
                  onClick={() => {
                    setDataInicio("");
                    setDataFim("");
                  }}
                  className="ml-1 text-gray-600 hover:text-black font-bold leading-none"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {}
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