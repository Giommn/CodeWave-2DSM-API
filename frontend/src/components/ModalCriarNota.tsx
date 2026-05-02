import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ResponseNorm } from "../pages/Normas";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// Função para pegar o ID do usuário logado
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

interface ModalCriarNotaProps {
  onFechar: () => void;
  onSucesso: () => void;
  normasExistentes: ResponseNorm[]; // Recebe as normas reais do backend
}

export function ModalCriarNota({ onFechar, onSucesso, normasExistentes }: ModalCriarNotaProps) {
  const [enviando, setEnviando] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  // Estado alinhado com o backend
  const [form, setForm] = useState({
    notaTitulo: "",
    norm_criador: "", 
    notaIT: "",
    notaAB: "",
    notaPA: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setEnviando(true);
    setErroMsg("");

    try {
      const token = localStorage.getItem("token");
      const adm_criador = getIdFromToken();

      if (!token || !adm_criador) throw new Error("Usuário não autenticado.");

      // Monta o Payload exatamente como o CreateNotaDTO espera
      const payload = {
        notaTitulo: form.notaTitulo,
        notaIT: form.notaIT,
        notaAB: form.notaAB || undefined, // Opcional no DTO
        notaPA: form.notaPA || undefined, // Opcional no DTO
        norm_criador: Number(form.norm_criador), // ID da norma selecionada
        adm_criador: Number(adm_criador), // ID do usuário
      };

      const res = await fetch(`${API_URL}/nota/create`, { // Verifique se a rota do backend é exatamente essa
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Erro ao cadastrar nota");
      }

      onSucesso();
      onFechar();
    } catch (e: any) {
      setErroMsg(e.message);
    } finally {
      setEnviando(false);
    }
  };

  // Validação: Título, Norma e Interpretação Técnica são obrigatórios. (O resto é opcional no DTO)
  const camposValidos =
    form.notaTitulo.trim() !== "" &&
    form.norm_criador !== "" &&
    form.notaIT.trim() !== "";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative my-auto flex flex-col max-h-[90vh]">
        
        {/* CABEÇALHO */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="text-xl font-bold text-gray-800">
            Adicionando nova nota:
          </h2>
          <button
            onClick={onFechar}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IoCloseOutline className="w-7 h-7" />
          </button>
        </div>

        {/* CORPO DO FORMULÁRIO */}
        <div className="px-6 py-5 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col gap-4">
            
            {/* Título */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1 block">Título da Nota <span className="text-[#bd95a2]">*</span></label>
              <input 
                name="notaTitulo" 
                type="text" 
                placeholder="Ex: Requisito ABC..." 
                value={form.notaTitulo} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" 
              />
            </div>

            {/* Dropdown de Vincular Norma (Dados Reais) */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1 block">Vincular norma <span className="text-[#bd95a2]">*</span></label>
              <select
                name="norm_criador"
                value={form.norm_criador}
                onChange={handleChange}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] appearance-none bg-white cursor-pointer
                  ${form.norm_criador === "" ? "text-gray-400 border-gray-300" : "text-gray-800 border-gray-400"}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='%239ca3af' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em` }}
              >
                <option value="" disabled>Selecione uma norma existente...</option>
                {normasExistentes.map((norma) => (
                  <option key={norma.id_norm} value={norma.id_norm} className="text-gray-800">
                    {norma.norm_codigo} - {norma.norm_titulo}
                  </option>
                ))}
              </select>
            </div>

            {/* Interpretação Técnica */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1 block">Interpretação técnica <span className="text-[#bd95a2]">*</span></label>
              <textarea 
                name="notaIT" 
                value={form.notaIT} 
                onChange={handleChange} 
                rows={3} 
                placeholder="Descreva a interpretação principal..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
              />
            </div>

            {/* Abordagens Aceitáveis */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1 block">Abordagens aceitáveis (Opcional):</label>
              <textarea 
                name="notaAB" 
                value={form.notaAB} 
                onChange={handleChange} 
                rows={3} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
              />
            </div>

            {/* Pontos de Atenção */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-1 block">Pontos de atenção (Opcional):</label>
              <textarea 
                name="notaPA" 
                value={form.notaPA} 
                onChange={handleChange} 
                rows={3} 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
              />
            </div>

          </div>
        </div>

        {/* RODAPÉ E BOTÃO */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl shrink-0 flex flex-col gap-2">
          {erroMsg && <p className="text-red-500 text-sm text-center font-bold bg-red-50 py-1 rounded border border-red-100">{erroMsg}</p>}
          
          <button
            onClick={handleSubmit}
            disabled={!camposValidos || enviando}
            className={`w-full font-bold py-2.5 rounded-lg transition-all duration-300 ${
              camposValidos && !enviando
                ? "bg-[#72203E] hover:bg-[#5a1931] text-white shadow-md cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {enviando ? "Cadastrando..." : "Cadastrar nova nota"}
          </button>
        </div>

      </div>
    </div>
  );
}