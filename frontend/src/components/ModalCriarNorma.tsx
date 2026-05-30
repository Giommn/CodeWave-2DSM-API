import { useState, useRef, useEffect, useMemo } from "react";
import { IoCloseOutline, IoChevronDownOutline, IoTrashOutline, IoAddOutline } from "react-icons/io5";
import { FaCloudUploadAlt, FaRegFilePdf } from "react-icons/fa";
import { ModalPDFViewer } from "./ModalPDFViewer"; 
import { ResponseNorm } from "../pages/Normas"; 

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

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
  normasExistentes: ResponseNorm[]; 
}

interface NotaLocal {
  notaTitulo: string;
  notaIT: string;
  notaAB: string;
  notaPA: string;
}

export function ModalCriarNorma({ onFechar, onSucesso, normasExistentes }: ModalProps) {
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  const [pdfData, setPdfData] = useState<{isOpen: boolean, nomeArquivo: string, urlPdf: string}>({
    isOpen: false,
    nomeArquivo: "",
    urlPdf: ""
  });

  const [form, setForm] = useState({
    norm_titulo: "",
    norm_desc: "",
    categoria_texto_livre: "", 
    norm_codigo: "",
    emissao: "",
    org_desc: "",
    org_sigla: "",
  });

  const [notas, setNotas] = useState<NotaLocal[]>([]);

  const [isCategoriaOpen, setIsCategoriaOpen] = useState(false);
  const [categoriaBusca, setCategoriaBusca] = useState("");
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
  const [categoriasDisponiveis, setCategoriasDisponiveis] = useState<string[]>([]); 
  
  const dropdownCatRef = useRef<HTMLDivElement>(null);
  const inputCategoriaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const categoriasUnicas = new Set<string>();

    normasExistentes.forEach(norma => {
      if (norma.categoria) {
        if (Array.isArray(norma.categoria)) {
          norma.categoria.forEach(c => {
            if (c && c.trim()) categoriasUnicas.add(c.trim());
          });
        } else if (typeof norma.categoria === 'string') {
          (norma.categoria as string).split(',').forEach(c => {
            if (c && c.trim()) categoriasUnicas.add(c.trim());
          });
        }
      }
    });

    setCategoriasDisponiveis(Array.from(categoriasUnicas));
  }, [normasExistentes]);

  const categoriasOrdenadas = useMemo(() => {
    const sortedMock = [...categoriasDisponiveis].sort((a, b) => a.localeCompare(b));
    const selecionadas = sortedMock.filter((c) => categoriasSelecionadas.includes(c));
    const naoSelecionadas = sortedMock.filter((c) => !categoriasSelecionadas.includes(c));
    return [...selecionadas, ...naoSelecionadas].filter((cat) => cat.toLowerCase().includes(categoriaBusca.toLowerCase()));
  }, [categoriaBusca, categoriasSelecionadas, categoriasDisponiveis]);

  const toggleCategoria = (cat: string) => {
    setCategoriasSelecionadas((prev) => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const handleCategoriaKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const novaCat = form.categoria_texto_livre.trim();
      if (novaCat) {
        const novasCategorias = novaCat.split(',').map(c => c.trim()).filter(c => c !== "");
        setCategoriasSelecionadas(prev => {
          const atualizadas = [...prev];
          novasCategorias.forEach(c => { if (!atualizadas.includes(c)) atualizadas.push(c); });
          return atualizadas;
        });
        setCategoriasDisponiveis(prev => {
          const atualizadas = [...prev];
          novasCategorias.forEach(c => {
            if (!atualizadas.some(existing => existing.toLowerCase() === c.toLowerCase())) atualizadas.push(c);
          });
          return atualizadas;
        });
        setForm(prev => ({ ...prev, categoria_texto_livre: "" }));
      }
    }
  };

  const [isNormaOpen, setIsNormaOpen] = useState(false);
  const [normaBusca, setNormaBusca] = useState("");
  const [normasSelecionadas, setNormasSelecionadas] = useState<string[]>([]);
  
  const dropdownNormaRef = useRef<HTMLDivElement>(null);

  const normasDisponiveis = useMemo(() => {
    return normasExistentes.map(n => ({
      id: n.id_norm,
      codigo: n.norm_codigo,
      titulo: n.norm_titulo
    }));
  }, [normasExistentes]);

  const normasOrdenadas = useMemo(() => {
    const sorted = [...normasDisponiveis].sort((a, b) => a.titulo.localeCompare(b.titulo));
    const selecionadas = sorted.filter(n => normasSelecionadas.includes(n.codigo));
    const naoSelecionadas = sorted.filter(n => !normasSelecionadas.includes(n.codigo));
    return [...selecionadas, ...naoSelecionadas].filter(n => 
      n.codigo.toLowerCase().includes(normaBusca.toLowerCase()) || 
      n.titulo.toLowerCase().includes(normaBusca.toLowerCase())
    );
  }, [normaBusca, normasSelecionadas, normasDisponiveis]);

  const toggleNorma = (codigo: string) => {
    setNormasSelecionadas(prev => prev.includes(codigo) ? prev.filter(c => c !== codigo) : [...prev, codigo]);
  };

  useEffect(() => {
    const handleClickFora = (e: MouseEvent) => {
      if (dropdownCatRef.current && !dropdownCatRef.current.contains(e.target as Node)) setIsCategoriaOpen(false);
      if (dropdownNormaRef.current && !dropdownNormaRef.current.contains(e.target as Node)) setIsNormaOpen(false);
    };
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type === "application/pdf") {
      setArquivo(f);
      setErroMsg(""); 
    } else {
      setErroMsg("Apenas arquivos PDF são permitidos.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") {
      setArquivo(f);
      setErroMsg("");
    } else {
      setErroMsg("Apenas arquivos PDF são permitidos.");
    }
  };

  const verNovoPdf = (e: React.MouseEvent) => {
    e.preventDefault();
    if (arquivo) {
      const urlTemporaria = URL.createObjectURL(arquivo);
      setPdfData({ isOpen: true, nomeArquivo: arquivo.name, urlPdf: urlTemporaria });
    }
  };

  const adicionarNota = () => {
    setNotas([...notas, { notaTitulo: "", notaIT: "", notaAB: "", notaPA: "" }]);
  };

  const removerNota = (index: number) => {
    setNotas(notas.filter((_, i) => i !== index));
  };

  const atualizarNota = (index: number, campo: keyof NotaLocal, valor: string) => {
    const novasNotas = [...notas];
    novasNotas[index][campo] = valor;
    setNotas(novasNotas);
  };

  const handleSubmit = async () => {
    if (!arquivo) return;
    setEnviando(true);
    setErroMsg("");

    try {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("userRole") || "user";
      const idUsuario = getIdFromToken();

      if (!token || !idUsuario) throw new Error("Usuário não autenticado. Faça login antes de enviar.");

      const categoriasManuais = form.categoria_texto_livre.split(",").map(c => c.trim()).filter(c => c);
      const categoriasFinaisArray = Array.from(new Set([...categoriasSelecionadas, ...categoriasManuais]));

      const referenciasIds = normasSelecionadas
        .map(codigo => {
          const norma = normasExistentes.find(n => n.norm_codigo === codigo);
          return norma ? norma.id_norm : null;
        })
        .filter(id => id !== null); 

      const notasDTO = notas.map(n => ({
        notaTitulo: n.notaTitulo,
        notaIT: n.notaIT,
        notaAB: n.notaAB || "",
        notaPA: n.notaPA || "",
        adm_criador: Number(idUsuario),
        norm_criador: 0 
      }));

      const normPayload = {
        norm_titulo: form.norm_titulo,
        norm_desc: form.norm_desc,
        categoria: categoriasFinaisArray, 
        referencias: referenciasIds, 
        notas: notasDTO, 
        norm_codigo: form.norm_codigo,
        emissao: form.emissao, 
        org_desc: form.org_desc,
        org_sigla: form.org_sigla,
        org_criador: 1, 
        adm_criador: idUsuario 
      };

      let metadata;
      let endpoint = "";

      if (userRole === "user") {
        endpoint = `${API_URL}/pedidos/create`; 
        metadata = {
          id_user: Number(idUsuario),
          acaoAlteracao: "CREATE",
          tipo: "NORMA",
          status: "PENDENTE",
          alteracao: normPayload
        };
      } 
      else {
        endpoint = `${API_URL}/norma/cadastro`;
        metadata = normPayload;
      }

      const formData = new FormData();
      formData.append("arquivo", arquivo);
      formData.append("metadata", JSON.stringify(metadata));

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Erro ao enviar solicitação.");
      }

      onSucesso();
      onFechar();
    } catch (e: any) {
      setErroMsg(e.message);
    } finally {
      setEnviando(false);
    }
  };

  const hasCategoria = categoriasSelecionadas.length > 0 || form.categoria_texto_livre.trim().length > 0;
  
  const notasValidas = notas.every(n => n.notaTitulo.trim() !== "" && n.notaIT.trim() !== "");
  const camposValidos = form.norm_titulo && form.norm_desc && hasCategoria && form.emissao && form.org_desc && form.org_sigla && form.norm_codigo && arquivo && notasValidas;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
        <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative max-h-[90vh] flex flex-col">
          
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-800">Adicionando nova norma</h2>
            <button onClick={onFechar} className="text-gray-400 hover:text-gray-600 transition-colors">
              <IoCloseOutline className="w-7 h-7" />
            </button>
          </div>

          <div className="px-6 py-5 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
            
            {/* UPLOAD */}
            {arquivo ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3">
                <div className="flex flex-col items-center min-w-0 px-2">
                  <span className="text-xs font-bold text-green-700 uppercase mb-1">Arquivo Selecionado:</span>
                  <span className="text-sm font-bold text-gray-800 break-all">{arquivo.name}</span>
                  <span className="text-xs text-gray-500 font-medium">{(arquivo.size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={verNovoPdf} className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-bold text-[#72203E] hover:bg-gray-50 transition-colors shadow-sm">
                    <FaRegFilePdf className="w-4 h-4" /> Visualizar PDF
                  </button>
                  <label className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                    <FaCloudUploadAlt className="w-4 h-4" /> Trocar Arquivo
                    <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
                  </label>
                </div>
              </div>
            ) : (
              <label
                className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${dragging ? "border-[#bd95a2] bg-[#f9f2f4]" : "border-gray-300 bg-gray-50 hover:border-[#bd95a2]"}`}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
              >
                <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
                <div className="flex flex-col items-center gap-2 text-gray-500">
                  <FaCloudUploadAlt className="w-10 h-10 text-gray-300" />
                  <span className="text-sm font-bold text-gray-600">Upload da norma...</span>
                  <span className="text-xs text-gray-400 font-medium">Somente arquivo PDF — arraste ou clique</span>
                </div>
              </label>
            )}

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Título</label>
                <input name="norm_titulo" type="text" placeholder="Ex: norma exemplo 1..." value={form.norm_titulo} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Descrição:</label>
                <textarea name="norm_desc" value={form.norm_desc} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" />
              </div>

              {/* CATEGORIAS */}
              <div className="relative z-20" ref={dropdownCatRef}>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Categorias:</label>
                <div 
                  className="flex flex-wrap items-center gap-2 w-full border border-gray-300 rounded-lg px-3 py-1.5 min-h-[40px] bg-white cursor-text focus-within:ring-1 focus-within:ring-[#bd95a2]"
                  onClick={() => inputCategoriaRef.current?.focus()}
                >
                  {categoriasSelecionadas.map((cat, idx) => (
                    <span key={cat} className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${idx % 2 === 0 ? "bg-white text-gray-800 border-gray-300" : "bg-gray-100 text-gray-800 border-gray-300"}`}>
                      {cat}
                      <IoCloseOutline className="w-3.5 h-3.5 cursor-pointer hover:scale-110 text-gray-500 hover:text-red-500 transition-colors" onClick={(e) => { e.stopPropagation(); toggleCategoria(cat); }} />
                    </span>
                  ))}
                  <input 
                    ref={inputCategoriaRef}
                    name="categoria_texto_livre" 
                    type="text" 
                    placeholder={categoriasSelecionadas.length === 0 ? "Selecione ou digite categorias manuais..." : "Digite mais..."} 
                    value={form.categoria_texto_livre} 
                    onChange={handleChange}
                    onKeyDown={handleCategoriaKeyDown} 
                    onFocus={() => setIsCategoriaOpen(true)}
                    className="flex-1 min-w-[150px] outline-none text-sm bg-transparent text-gray-800 py-0.5" 
                  />
                  <button type="button" onClick={(e) => { e.stopPropagation(); setIsCategoriaOpen(!isCategoriaOpen); }} className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-auto">
                    <IoChevronDownOutline className={`w-4 h-4 transition-transform ${isCategoriaOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {isCategoriaOpen && (
                  <div className="absolute right-0 top-[calc(100%+4px)] w-72 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col z-50">
                    <div className="p-2 border-b border-gray-100 bg-gray-50">
                      <input type="text" placeholder="Pesquisar categoria..." value={categoriaBusca} onChange={(e) => setCategoriaBusca(e.target.value)} className="w-full border border-gray-200 rounded p-1.5 text-sm focus:outline-none focus:border-gray-300" />
                    </div>
                    <ul className="max-h-48 overflow-y-auto custom-scrollbar">
                      {categoriasOrdenadas.length > 0 ? categoriasOrdenadas.map((cat, idx) => {
                        const isSelected = categoriasSelecionadas.includes(cat);
                        return (
                          <li key={cat} onClick={() => toggleCategoria(cat)} className={`flex items-center gap-3 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors text-gray-700 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${isSelected ? 'font-bold' : ''}`}>
                            <input type="checkbox" checked={isSelected} readOnly className="w-3.5 h-3.5 cursor-pointer accent-[#bd95a2]" />
                            {cat}
                          </li>
                        );
                      }) : <li className="px-3 py-2 text-sm text-gray-500 text-center italic bg-white">Nenhuma encontrada.</li>}
                    </ul>
                  </div>
                )}
                <p className="text-[10px] text-gray-400 mt-1 font-medium px-1">* Você pode marcar várias categorias. Caso deseje criar uma nova, digite e aperte Enter.</p>
              </div>

              {/* NORMAS ASSOCIADAS */}
              <div className="relative z-10" ref={dropdownNormaRef}>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Normas Associadas (Opcional):</label>
                <div 
                  className="flex flex-wrap items-center gap-2 w-full border border-gray-300 rounded-lg px-3 py-1.5 min-h-[40px] bg-white cursor-pointer hover:border-gray-400 transition-colors"
                  onClick={() => setIsNormaOpen(!isNormaOpen)}
                >
                  {normasSelecionadas.map((codigo, idx) => {
                    const normaEncontrada = normasDisponiveis.find(n => n.codigo === codigo);
                    const tituloExibicao = normaEncontrada ? normaEncontrada.titulo : codigo;

                    return (
                      <span key={codigo} className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${idx % 2 === 0 ? "bg-white text-gray-800 border-gray-300" : "bg-gray-100 text-gray-800 border-gray-300"}`}>
                        {tituloExibicao}
                        <IoCloseOutline className="w-3.5 h-3.5 cursor-pointer hover:scale-110 text-gray-500 hover:text-red-500 transition-colors" onClick={(e) => { e.stopPropagation(); toggleNorma(codigo); }} />
                      </span>
                    )
                  })}
                  
                  {normasSelecionadas.length === 0 && (
                    <span className="text-sm text-gray-400 py-0.5">Selecione normas complementares...</span>
                  )}
                  
                  <div className="ml-auto p-1 text-gray-400 hover:text-gray-600">
                    <IoChevronDownOutline className={`w-4 h-4 transition-transform ${isNormaOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                
                {isNormaOpen && (
                  <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col z-50">
                    <div className="p-2 border-b border-gray-100 bg-gray-50">
                      <input 
                        type="text" 
                        placeholder="Pesquisar por título..." 
                        value={normaBusca} 
                        onChange={(e) => setNormaBusca(e.target.value)} 
                        className="w-full border border-gray-200 rounded p-1.5 text-sm focus:outline-none focus:border-gray-300" 
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <ul className="max-h-48 overflow-y-auto custom-scrollbar">
                      {normasOrdenadas.length > 0 ? normasOrdenadas.map((norma, idx) => {
                        const isSelected = normasSelecionadas.includes(norma.codigo);
                        return (
                          <li 
                            key={norma.id} 
                            onClick={() => toggleNorma(norma.codigo)} 
                            className={`flex items-center gap-3 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors text-gray-700 
                              ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                              ${isSelected ? 'font-bold bg-gray-100' : ''}`}
                          >
                            <input type="checkbox" checked={isSelected} readOnly className="w-3.5 h-3.5 cursor-pointer accent-[#bd95a2] flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                              <span className="text-gray-800 text-sm truncate">{norma.titulo}</span>
                            </div>
                          </li>
                        );
                      }) : <li className="px-3 py-2 text-sm text-gray-500 text-center italic bg-white">Nenhuma norma encontrada.</li>}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Código:</label>
                <input name="norm_codigo" type="text" placeholder="Ex: ISO-9001" value={form.norm_codigo} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-sm font-bold text-gray-700 mb-1 block">Data de emissão:</label>
                  <input name="emissao" type="date" value={form.emissao} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] text-gray-600" />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-bold text-gray-700 mb-1 block">Sigla do emissor:</label>
                  <input name="org_sigla" type="text" placeholder="Ex: ABNT" value={form.org_sigla} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">Emissor (Nome Completo):</label>
                <input name="org_desc" type="text" placeholder="Ex: Associação Brasileira de Normas Técnicas" value={form.org_desc} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" />
              </div>
            </div>

            {/* SEÇÃO DE NOTAS DA NORMA */}
            <div className="border-t border-gray-200 pt-5 mt-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-gray-800">Notas Adicionais (Requisitos)</label>
                  <p className="text-[10px] text-gray-500">Adicione os detalhes técnicos que compõem a norma.</p>
                </div>
                <button 
                  onClick={adicionarNota} 
                  className="flex items-center gap-1 text-xs font-bold text-white bg-gray-800 hover:bg-black px-3 py-1.5 rounded-md transition-colors"
                >
                  <IoAddOutline className="w-4 h-4" /> Adicionar Nota
                </button>
              </div>

              {notas.length === 0 ? (
                <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-500 italic">Nenhuma nota cadastrada para esta norma.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {notas.map((nota, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative">
                      <button 
                        onClick={() => removerNota(index)} 
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remover Nota"
                      >
                        <IoTrashOutline className="w-5 h-5" />
                      </button>
                      
                      <div className="flex flex-col gap-3 pr-8">
                        <div>
                          <label className="text-xs font-bold text-gray-700 mb-1 block">Título da Nota <span className="text-red-500">*</span></label>
                          <input 
                            type="text" 
                            placeholder="Ex: Criptografia de Dados Pessoais" 
                            value={nota.notaTitulo} 
                            onChange={(e) => atualizarNota(index, "notaTitulo", e.target.value)} 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2]" 
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-700 mb-1 block">Interpretação Técnica <span className="text-red-500">*</span></label>
                          <textarea 
                            rows={2} 
                            placeholder="Descreva a interpretação técnica principal..." 
                            value={nota.notaIT} 
                            onChange={(e) => atualizarNota(index, "notaIT", e.target.value)} 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-700 mb-1 block">Abordagens Aceitáveis (Opcional)</label>
                          <textarea 
                            rows={2} 
                            placeholder="Descreva abordagens válidas..." 
                            value={nota.notaAB} 
                            onChange={(e) => atualizarNota(index, "notaAB", e.target.value)} 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-700 mb-1 block">Pontos de Atenção (Opcional)</label>
                          <textarea 
                            rows={2} 
                            placeholder="Descreva pontos de atenção ou falhas comuns..." 
                            value={nota.notaPA} 
                            onChange={(e) => atualizarNota(index, "notaPA", e.target.value)} 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#bd95a2] resize-none" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* RODAPÉ E BOTÃO */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl shrink-0 flex flex-col gap-2 relative z-0">
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
              {enviando ? "Processando..." : (localStorage.getItem("userRole") === "user" ? "Enviar Solicitação de Norma" : "Cadastrar nova norma")}
            </button>
          </div>

        </div>
      </div>

      <ModalPDFViewer 
        isOpen={pdfData.isOpen}
        onClose={() => setPdfData({ ...pdfData, isOpen: false })}
        nomeArquivo={pdfData.nomeArquivo}
        urlPdf={pdfData.urlPdf} 
      />
    </>
  );
}