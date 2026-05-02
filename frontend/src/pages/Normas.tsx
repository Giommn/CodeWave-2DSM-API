import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import UploadsCards from "../components/UploadsCards";
import DropdownFiltros from "../components/DropdownFiltros";
import BuscarNormas from "../components/Busca";
import RemoverFiltros from "../components/RemoverFiltros";
import { ListaNormasAprovadas } from "../components/ListaNormasAprovadas";
import { ModalVisualizarNorma } from "../components/ModalVisualizarNorma";

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
  aprovado_por?: string;
  referencias: string[];
  pdf_caminho?: string;
  categoria?: string[];
  notas?: any[];
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

function getIdFromToken(): number | null {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id_user ?? null;
  } catch {
    return null;
  }
}

function Normas() {
  const [normas, setNormas] = useState<ResponseNorm[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [filtrosAtivos, setFiltrosAtivos] = useState<FiltroAtivo[]>([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [normaSelecionada, setNormaSelecionada] = useState<ResponseNorm | null>(
    null,
  );
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const fetchNormas = useCallback(async () => {
    setCarregando(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/norma/getnorms`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setNormas(data.resposta);
    } catch {
      setNormas([
        {
          id_norm: 1,
          norm_titulo: "Atestado de Matrícula - DSM",
          norm_desc: "Vínculo institucional.",
          norm_codigo: "FATEC-001",
          org_criador: "FATEC",
          emissao: "2025-08-06",
          adm_criador: "Admin",
          referencias: ["NBR-ISO-9001", "ISO-14001"],
          categoria: ["Documentação"],
          notas: [],
        },
      ]);
    } finally {
      setCarregando(false);
    }
  }, []);

  const fetchFavoritos = useCallback(async () => {
    const idUsuario = getIdFromToken();
    if (!idUsuario) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/norma/favoritas/${idUsuario}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return;
      const data = await res.json();
      const ids = (data.resposta ?? []).map((n: ResponseNorm) => n.id_norm);
      setFavoritos(ids);
    } catch {}
  }, []);

  useEffect(() => {
    fetchNormas();
    fetchFavoritos();
  }, [fetchNormas, fetchFavoritos]);

  const toggleFavorito = async (id_norm: number) => {
    const idUsuario = getIdFromToken();
    if (!idUsuario) return;
    const token = localStorage.getItem("token");
    const jaFavoritado = favoritos.includes(id_norm);

    if (jaFavoritado) {
      await fetch(
        `${API_URL}/norma/favoritas/deletar/${idUsuario}/${id_norm}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setFavoritos((prev) => prev.filter((id) => id !== id_norm));
    } else {
      await fetch(`${API_URL}/norma/favoritar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_user: idUsuario, id_norm }),
      });
      setFavoritos((prev) => [...prev, id_norm]);
    }
  };

  const handleAbrirNormaPorCodigo = (codigo: string) => {
    const encontrada = normas.find((n) => n.norm_codigo === codigo);
    if (encontrada) setNormaSelecionada(encontrada);
    else alert(`Norma ${codigo} não encontrada.`);
  };

  const toggleFiltro = (grupo: string, valor: string) => {
    setFiltrosAtivos((prev) =>
      prev.find((f) => f.grupo === grupo && f.valor === valor)
        ? prev.filter((f) => !(f.grupo === grupo && f.valor === valor))
        : [...prev, { grupo, valor }],
    );
  };

  const normasFiltradas = normas.filter((n) => {
    if (mostrarFavoritos && !favoritos.includes(n.id_norm)) return false;
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
    return true;
  });

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        <UploadsCards onNormaCadastrada={fetchNormas} normas={normas} />

        <div className="flex gap-3 items-center flex-wrap">
          <RemoverFiltros
            onClick={() => {
              setFiltrosAtivos([]);
              setTermoBusca("");
              setMostrarFavoritos(false);
            }}
          />
          <DropdownFiltros
            grupo="Emissor"
            label="Emissor"
            opcoes={[...new Set(normas.map((n) => n.org_criador))]}
            selecionados={filtrosAtivos
              .filter((f) => f.grupo === "Emissor")
              .map((f) => f.valor)}
            onToggle={(v) => toggleFiltro("Emissor", v)}
          />

          <button
            onClick={() => setMostrarFavoritos((prev) => !prev)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm border transition-all ${
              mostrarFavoritos
                ? "bg-yellow-400 text-yellow-900 border-yellow-400 shadow-md"
                : "bg-white text-gray-600 border-gray-300 hover:border-yellow-400 hover:text-yellow-500"
            }`}
          >
            {mostrarFavoritos ? "★" : "☆"} Favoritos
          </button>

          <BuscarNormas
            className="w-72"
            valor={termoBusca}
            onChange={setTermoBusca}
          />
        </div>

        {carregando ? (
          <div className="text-center py-12 text-gray-400 font-bold">
            Carregando...
          </div>
        ) : (
          <ListaNormasAprovadas
            arquivos={normasFiltradas}
            apiUrl={API_URL}
            onAtualizarLista={fetchNormas}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
            onVisualizar={(n: any) => {
              setNormaSelecionada(n);
              setIsModalOpen(true);
            }}
          />
        )}
      </div>

      <ModalVisualizarNorma
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setNormaSelecionada(null);
        }}
        norma={normaSelecionada}
        onAbrirNormaAssociada={handleAbrirNormaPorCodigo}
      />
    </div>
  );
}

export default Normas;
