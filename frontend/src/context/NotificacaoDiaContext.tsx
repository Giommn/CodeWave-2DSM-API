import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// ─── TIPOS ────────────────────────────────────────────────────────────────────
export interface NormaAtualizada {
  id: number | string;
  norm_titulo: string;
  norm_codigo: string;
  nome_criador: string;
  tipo: "criacao" | "edicao";
  data: string;
  rawNorm: any;
}

interface NotificacaoDiaContextValue {
  normas: NormaAtualizada[];
  totalNovas: number;
  totalAtualizadas: number;
  dispensado: boolean;
  dispensar: () => void;
}

const NotificacaoDiaContext = createContext<NotificacaoDiaContextValue>({
  normas: [],
  totalNovas: 0,
  totalAtualizadas: 0,
  dispensado: false,
  dispensar: () => {},
});

export function useNotificacaoDia() {
  return useContext(NotificacaoDiaContext);
}

// ─── HELPER DE DATA (Lê DD-MM-YYYY sem sofrer com Fuso Horário) ──────────────
function ehHoje(dataStr: string | null | undefined): boolean {
  if (!dataStr) return false;
  try {
    let data: Date;
    // Se vier DD-MM-YYYY ou DD/MM/YYYY do backend (Como está no seu map do repository: criado_em)
    if (dataStr.match(/^\d{2}[-/]\d{2}[-/]\d{4}$/)) {
      const parts = dataStr.split(/[-/]/);
      // JS Date: YYYY, MM (0-11), DD
      data = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    } 
    // Se vier Padrão ISO
    else if (dataStr.includes("T")) {
      const [y, m, d] = dataStr.split("T")[0].split("-");
      data = new Date(Number(y), Number(m) - 1, Number(d));
    } else {
      data = new Date(dataStr);
    }

    if (isNaN(data.getTime())) return false;

    const hoje = new Date();
    return (
      data.getFullYear() === hoje.getFullYear() &&
      data.getMonth() === hoje.getMonth() &&
      data.getDate() === hoje.getDate()
    );
  } catch {
    return false;
  }
}

// ─── PROVIDER ─────────────────────────────────────────────────────────────────
const POLL_INTERVAL_MS = 2 * 60 * 1000;

export function NotificacaoDiaProvider({ children }: { children: ReactNode }) {
  const [normas, setNormas] = useState<NormaAtualizada[]>([]);
  const [dispensado, setDispensado] = useState(false);

  const fetchAtualizacoes = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${API_URL}/norma/getnorms`, { 
        headers: { Authorization: `Bearer ${token}` } 
      });

      if (!res.ok) return;
      const dataNormas = await res.json();
      
      const normasApi = Array.isArray(dataNormas) ? dataNormas : (dataNormas.resposta || []);

      const listaNormasDoDia: NormaAtualizada[] = normasApi
        // AGORA UTILIZAMOS A DATA DE CRIAÇÃO (criado_em) DO SEU REPOSITÓRIO
        .filter((n: any) => ehHoje(n.criado_em))
        .map((n: any) => {
          return {
            id: n.id_norm || Math.random().toString(), 
            norm_titulo: n.norm_titulo || "Sem título",
            norm_codigo: n.norm_codigo || "N/A",
            nome_criador: n.adm_criador || "Administração / Sistema", 
            tipo: "criacao", 
            // Formata a exibição para a data de criação
            data: n.criado_em ? n.criado_em.replace(/-/g, '/') : "N/A",
            rawNorm: n 
          };
        });

      setNormas(listaNormasDoDia);
    } catch (err) {
      console.warn("[NotificacaoDia] Erro ao buscar atualizações:", err);
    }
  }, []);

  useEffect(() => { fetchAtualizacoes(); }, [fetchAtualizacoes]);

  useEffect(() => {
    const intervalo = setInterval(fetchAtualizacoes, POLL_INTERVAL_MS);
    return () => clearInterval(intervalo);
  }, [fetchAtualizacoes]);

  useEffect(() => {
    const aoVoltar = () => { if (document.visibilityState === "visible") fetchAtualizacoes(); };
    document.addEventListener("visibilitychange", aoVoltar);
    window.addEventListener("focus", fetchAtualizacoes);
    return () => {
      document.removeEventListener("visibilitychange", aoVoltar);
      window.removeEventListener("focus", fetchAtualizacoes);
    };
  }, [fetchAtualizacoes]);

  return (
    <NotificacaoDiaContext.Provider
      value={{
        normas,
        totalNovas: normas.filter((n) => n.tipo === "criacao").length,
        totalAtualizadas: normas.filter((n) => n.tipo === "edicao").length,
        dispensado,
        dispensar: () => setDispensado(true),
      }}
    >
      {children}
    </NotificacaoDiaContext.Provider>
  );
}