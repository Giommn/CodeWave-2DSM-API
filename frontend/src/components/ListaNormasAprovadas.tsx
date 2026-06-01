import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ResponseNorm } from "../pages/Normas";
import { ModalEditarNorma } from "./ModalEditarNorma";
import { ModalVisualizarNorma } from "./ModalVisualizarNorma";

interface Props {
  arquivos: ResponseNorm[];
  apiUrl: string;
  onAtualizarLista: () => void;
  onFavoritoAlterado: () => void; 
  onVisualizar?: (norma: ResponseNorm) => void;
  onNavegarTag?: (codigo: string | number) => void;
}

const parseDataCriacao = (dataStr?: string) => {
  if (!dataStr) return new Date(0);
  const parts = dataStr.split(/[-/]/);
  if (parts.length === 3) {
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
  return new Date(0);
};

export function ListaNormasAprovadas({ arquivos, apiUrl, onAtualizarLista, onFavoritoAlterado, onNavegarTag }: Props) {
  const userRole = localStorage.getItem("userRole") || "user";
  const [favoritosLocais, setFavoritosLocais] = useState<number[]>([]);
  const [menuAbertoId, setMenuAbertoId] = useState<number | null>(null);
  
  const [normaParaVisualizar, setNormaParaVisualizar] = useState<ResponseNorm | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [normaParaEditar, setNormaParaEditar] = useState<ResponseNorm | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [normaParaExcluir, setNormaParaExcluir] = useState<ResponseNorm | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const ITENS_POR_PAGINA = 10;

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPaginaAtual(1);
  }, [arquivos]);

  useEffect(() => {
    const salvos = localStorage.getItem("favoritos_normas");
    if (salvos) setFavoritosLocais(JSON.parse(salvos));
  }, []);

  const toggleFavorito = (id: number) => {
    const salvos = localStorage.getItem("favoritos_normas");
    const listaAtual = salvos ? JSON.parse(salvos) : [];
    
    const novaLista = listaAtual.includes(id)
      ? listaAtual.filter((favId: number) => favId !== id)
      : [...listaAtual, id];
    
    setFavoritosLocais(novaLista);
    localStorage.setItem("favoritos_normas", JSON.stringify(novaLista));
    
    onFavoritoAlterado(); 
  };

  useEffect(() => {
    const handleClickFora = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuAbertoId(null);
      }
    };
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  const confirmarExclusao = async () => {
    if (!normaParaExcluir) return;
    try {
      const token = localStorage.getItem("token");
      await fetch(`${apiUrl}/norma/delete/${normaParaExcluir.id_norm}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      
      const novaLista = favoritosLocais.filter(id => id !== normaParaExcluir.id_norm);
      setFavoritosLocais(novaLista);
      localStorage.setItem("favoritos_normas", JSON.stringify(novaLista));
    } catch {
      console.warn("Erro ao excluir.");
    }
    setIsDeleteModalOpen(false);
    setNormaParaExcluir(null);
    onAtualizarLista();
  };

  if (arquivos.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 text-gray-500 text-lg rounded-2xl border border-dashed border-gray-300 bg-white">
        Nenhuma norma encontrada.
      </div>
    );
  }

  const arquivosOrdenados = [...arquivos].sort((a, b) => {
    // Mantém a ordenação inteligente usando a criação como prioridade de fato mais recente
    const dataA = parseDataCriacao(a.criacao || a.criado_em || a.data_criacao || a.emissao);
    const dataB = parseDataCriacao(b.criacao || b.criado_em || b.data_criacao || b.emissao);
    return dataB.getTime() - dataA.getTime();
  });

  const totalPaginas = Math.ceil(arquivosOrdenados.length / ITENS_POR_PAGINA);
  const itensExibidos = arquivosOrdenados.slice(
    (paginaAtual - 1) * ITENS_POR_PAGINA,
    paginaAtual * ITENS_POR_PAGINA
  );

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full overflow-hidden">
        <div className="flex flex-col min-w-[1100px] overflow-x-auto">
          <div className="flex items-center px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 border-b border-gray-200">
            <div className="w-[65%] flex items-center">
              <div className="w-[6%]"></div>
              <div className="w-[15%] pl-2">Código</div>
              <div className="w-[49%]">Nome da Norma</div>
              <div className="w-[30%]">Órgão Emissor</div>
            </div>
            {/* AGORA EXIBINDO DATA DE EMISSÃO NA TELA */}
            <div className="w-[15%] text-center">Data de Emissão</div>
            <div className="w-[15%] pl-4">Criado por</div>
            <div className="w-[5%] text-center pr-4">Ações</div>
          </div>

          {itensExibidos.map((norma, index) => (
            <div
              key={norma.id_norm}
              className={`flex items-stretch border-b border-gray-100 relative
                ${index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100 transition-colors"}`}
            >
              <div
                onClick={() => {
                  setNormaParaVisualizar(norma);
                  setIsViewModalOpen(true);
                }}
                className="w-[65%] flex items-center py-4 cursor-pointer group/link"
              >
                <div className="w-[6%] flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorito(norma.id_norm);
                    }}
                    className="text-xl transition-all hover:scale-125 focus:outline-none"
                  >
                    {favoritosLocais.includes(norma.id_norm) ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-300 hover:text-yellow-400">☆</span>
                    )}
                  </button>
                </div>

                <div className="w-[15%] font-bold text-sm text-gray-700 truncate pr-3 pl-2 group-hover/link:text-[#72203E]">
                  {norma.norm_codigo}
                </div>
                <div className="w-[49%] font-bold text-sm text-gray-800 truncate pr-4 group-hover/link:text-[#72203E]">
                  {norma.norm_titulo}
                </div>
                <div className="w-[30%] text-sm font-medium text-gray-600 truncate pr-4 group-hover/link:text-[#72203E]">
                  {norma.org_criador}
                </div>
              </div>

              {/* RENDERIZANDO A DATA DE EMISSÃO */}
              <div className="w-[15%] flex items-center justify-center text-sm font-bold text-gray-600">
                {norma.emissao || "-"}
              </div>
              <div className="w-[15%] flex items-center text-sm font-medium text-gray-800 truncate pl-4 pr-2">
                {norma.adm_criador || "Sistema"}
              </div>

              <div className="w-[5%] flex items-center justify-center pr-4 relative">
                <div ref={menuAbertoId === norma.id_norm ? menuRef : null} className="relative">
                  <button
                    onClick={() => setMenuAbertoId(menuAbertoId === norma.id_norm ? null : norma.id_norm)}
                    className={`p-2 rounded-full transition-colors ${menuAbertoId === norma.id_norm ? "bg-[#72203E] text-white" : "text-gray-400 hover:bg-gray-200 hover:text-gray-900"}`}
                  >
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </button>

                  {menuAbertoId === norma.id_norm && (
                    <div className="absolute right-0 bottom-full mb-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl z-[9999] overflow-hidden flex flex-col">
                      <button
                        onClick={() => {
                          setNormaParaEditar(norma);
                          setIsEditModalOpen(true);
                          setMenuAbertoId(null);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 font-semibold border-b border-gray-100"
                      >
                        Editar Norma
                      </button>
                      {userRole !== "user" && (
                        <button
                          onClick={() => {
                            setNormaParaExcluir(norma);
                            setIsDeleteModalOpen(true);
                            setMenuAbertoId(null);
                          }}
                          className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-semibold"
                        >
                          Excluir Norma
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPaginas > 1 && (
          <div className="flex items-center justify-center gap-4 py-4 bg-gray-50">
            <button 
              onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
              disabled={paginaAtual === 1}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            
            <span className="text-gray-600 font-bold text-sm">
              Página {paginaAtual} de {totalPaginas}
            </span>

            <button 
              onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
              disabled={paginaAtual === totalPaginas}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      <ModalVisualizarNorma
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        norma={normaParaVisualizar}
        onAbrirNormaAssociada={onNavegarTag} 
      />
      
      <ModalEditarNorma
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        normaOriginal={normaParaEditar}
        onSave={onAtualizarLista}
      />

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Excluir Norma definitivamente?</h2>
            <div className="flex gap-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 px-4 py-3 rounded-xl font-bold text-gray-700 border border-gray-300">Cancelar</button>
              <button onClick={confirmarExclusao} className="flex-1 px-4 py-3 rounded-xl font-bold text-white bg-red-600">Sim, Excluir</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}