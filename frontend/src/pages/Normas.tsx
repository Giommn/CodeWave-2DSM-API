import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import UploadsCards from "../components/UploadsCards";
import DropdownFiltros from "../components/DropdownFiltros";
import FiltroData from "../components/FiltroData";
import BuscarNormas from "../components/Busca";
import RemoverFiltros from "../components/RemoverFiltros";
import { ListaNormasAprovadas } from "../components/ListaNormasAprovadas";
import { BsStar, BsStarFill } from "react-icons/bs";

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
  pdf_caminho?: string;
  data_entrada?: string; 
  criado_por?: string;   
  aprovado_por?: string; 
  tamanho?: string;
  nome_arquivo?: string;
  url_arquivo?: string;
  categoria?: string[];
  interpretacao_tecnica?: string;
  abordagens_aceitaveis?: string;
  pontos_atencao?: string;
  notas?: any[]; 
  is_favorito?: boolean; 
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
  const [apenasFavoritos, setApenasFavoritos] = useState(false);
  const [idsFavoritos, setIdsFavoritos] = useState<number[]>([]);

  // FUNÇÃO NOVA: Atualiza apenas o estado de IDs sem disparar o fetch das normas
  const atualizarFavoritosDoStorage = useCallback(() => {
    const salvos = localStorage.getItem("favoritos_normas");
    if (salvos) {
      setIdsFavoritos(JSON.parse(salvos));
    } else {
      setIdsFavoritos([]);
    }
  }, []);

  const fetchNormas = useCallback(async () => {
    setCarregando(true);
    setErro(null);

    const carregarMock = () => {
      console.warn("Backend inacessível. Carregando dados de teste...");
      setTimeout(() => {
        setNormas([
          {
            id_norm: 1,
            norm_titulo: "Atestado de Matrícula - DSM",
            norm_desc: "Comprova vínculo do aluno com a instituição.",
            norm_codigo: "FATEC-001",
            org_criador: "FATEC",
            emissao: "2025-08-06",
            adm_criador: "Admin Principal",
            referencias: [],
            categoria: ["Documentação Escolar"],
            notas: [],
          },
          {
            id_norm: 2,
            norm_titulo: "Manual de Integração Contínua",
            norm_desc: "Padronização CI/CD.",
            norm_codigo: "DEV-305",
            org_criador: "Engenharia",
            emissao: "2026-04-12",
            adm_criador: "Admin Principal",
            referencias: [],
            categoria: ["DevOps", "Engenharia de Software"],
            notas: [],
          }
        ]);
        setCarregando(false);
      }, 500);
    };

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const res = await fetch(`${API_URL}/norma/getnorms?id_user=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        carregarMock();
        return; 
      }
      
      const data = await res.json();
      setNormas(data.resposta);
      setCarregando(false);
    } catch (e: any) {
      carregarMock();
    }
  }, []);

  useEffect(() => {
    fetchNormas();
    atualizarFavoritosDoStorage();
  }, [fetchNormas, atualizarFavoritosDoStorage]);

  const emissoresUnicos = [...new Set(normas.map((n) => n.org_criador))];
  const categoriasUnicas = [...new Set(normas.flatMap((n) => n.categoria || []))];

  const toggleFiltro = (grupo: string, valor: string) => {
    setFiltrosAtivos((prev) => {
      const jaExiste = prev.find((f) => f.grupo === grupo && f.valor === valor);
      return jaExiste
        ? prev.filter((f) => !(f.grupo === grupo && f.valor === valor))
        : [...prev, { grupo, valor }];
    });
  };

  const removerFiltro = (grupo: string, valor: string) =>
    setFiltrosAtivos((prev) => prev.filter((f) => !(f.grupo === grupo && f.valor === valor)));

  const removerTodosFiltros = () => {
    setFiltrosAtivos([]);
    setDataInicio("");
    setDataFim("");
    setTermoBusca("");
    setApenasFavoritos(false);
  };

  const parseData = (dataStr: string) => {
    if (!dataStr) return new Date();
    if (dataStr.includes("/") || (dataStr.includes("-") && dataStr.split("-")[0].length <= 2)) {
      const divisor = dataStr.includes("/") ? "/" : "-";
      const [dia, mes, ano] = dataStr.split(divisor);
      return new Date(`${ano}-${mes}-${dia}T00:00:00`);
    }
    return new Date(`${dataStr}T00:00:00`);
  };

  const normasFiltradas = normas.filter((n) => {
    const ehFavoritoLocal = idsFavoritos.includes(n.id_norm);
    if (apenasFavoritos && !ehFavoritoLocal) return false;

    if (termoBusca && !n.norm_titulo.toLowerCase().includes(termoBusca.toLowerCase())) return false;
    
    const emissoresFiltro = filtrosAtivos.filter((f) => f.grupo === "Emissor").map((f) => f.valor);
    if (emissoresFiltro.length > 0 && !emissoresFiltro.includes(n.org_criador)) return false;
    
    const categoriasFiltro = filtrosAtivos.filter((f) => f.grupo === "Categoria").map((f) => f.valor);
    if (categoriasFiltro.length > 0) {
      const temCategoria = n.categoria?.some(cat => categoriasFiltro.includes(cat));
      if (!temCategoria) return false;
    }
    
    if (dataInicio || dataFim) {
      const dataFiltro = parseData(n.emissao); 
      if (dataInicio && dataFiltro < new Date(`${dataInicio}T00:00:00`)) return false;
      if (dataFim && dataFiltro > new Date(`${dataFim}T23:59:59`)) return false;
    }
    return true;
  });

  const temFiltroAtivo = filtrosAtivos.length > 0 || dataInicio || dataFim || apenasFavoritos;

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        <UploadsCards onNormaCadastrada={fetchNormas} normas={normas} />
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center w-full flex-wrap">
            <RemoverFiltros onClick={removerTodosFiltros} />
            
            <button
              onClick={() => setApenasFavoritos(!apenasFavoritos)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all border h-[42px]
                ${apenasFavoritos 
                  ? "bg-yellow-400 border-yellow-500 text-yellow-900 shadow-sm" 
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              {apenasFavoritos ? <BsStarFill className="w-4 h-4" /> : <BsStar className="w-4 h-4" />}
              Favoritos
            </button>

            <DropdownFiltros
              grupo="Emissor" label="Emissor" opcoes={emissoresUnicos}
              selecionados={filtrosAtivos.filter((f) => f.grupo === "Emissor").map((f) => f.valor)}
              onToggle={(valor) => toggleFiltro("Emissor", valor)}
              className="flex-1 min-w-[160px]"
            />
            <DropdownFiltros
              grupo="Categoria" label="Categoria" opcoes={categoriasUnicas}
              selecionados={filtrosAtivos.filter((f) => f.grupo === "Categoria").map((f) => f.valor)}
              onToggle={(valor) => toggleFiltro("Categoria", valor)}
              className="flex-1 min-w-[160px]"
            />
            <FiltroData
              dataInicio={dataInicio} dataFim={dataFim}
              onChangeInicio={setDataInicio} onChangeFim={setDataFim}
              className="flex-1 min-w-[200px]"
            />
          </div>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <BuscarNormas className="w-72" valor={termoBusca} onChange={setTermoBusca} />
            
            {temFiltroAtivo && (
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <span className="text-sm font-semibold text-gray-500">Filtros ativos:</span>
                {apenasFavoritos && (
                  <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full border border-yellow-200">
                    ⭐ Favoritos
                    <button onClick={() => setApenasFavoritos(false)} className="ml-1 font-bold">×</button>
                  </span>
                )}
                {filtrosAtivos.map((f) => (
                  <span key={`${f.grupo}-${f.valor}`} className="flex items-center gap-1 bg-[#cecece] text-black text-sm px-3 py-1 rounded-full">
                    {f.valor}
                    <button onClick={() => removerFiltro(f.grupo, f.valor)} className="ml-1 text-gray-600 font-bold">×</button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {carregando ? (
          <div className="text-center py-12 text-gray-400 font-bold">Carregando normas...</div>
        ) : (
          <ListaNormasAprovadas 
            arquivos={normasFiltradas} 
            apiUrl={API_URL} 
            onAtualizarLista={fetchNormas}
            onFavoritoAlterado={atualizarFavoritosDoStorage}
          />
        )}
      </div>
    </div>
  );
}

export default Normas;