interface FiltroNotificacaoProps {
    userRole: string;
    filtroStatus: string;
    setFiltroStatus: (valor: string) => void;
    filtroUsuario: string;
    setFiltroUsuario: (valor: string) => void;
    usuariosUnicos: string[];
    dataInicio: string;
    setDataInicio: (valor: string) => void;
    dataFim: string;
    setDataFim: (valor: string) => void;
    onLimpar: () => void;
  }
  
  export function FiltroNotificacao({
    userRole,
    filtroStatus, setFiltroStatus,
    filtroUsuario, setFiltroUsuario,
    usuariosUnicos,
    dataInicio, setDataInicio,
    dataFim, setDataFim,
    onLimpar
  }: FiltroNotificacaoProps) {
    
    // Verifica se existe algum filtro ativo para mostrar o botão de limpar
    const temFiltroAtivo = filtroStatus !== "todos" || filtroUsuario !== "todos" || dataInicio !== "" || dataFim !== "";
  
    return (
      <div className="flex flex-wrap items-end gap-4 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Status</label>
          <select 
            value={filtroStatus} 
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white outline-none focus:border-[#72203E]"
          >
            <option value="todos">Todos os status</option>
            <option value="pendente">Pendente</option>
            <option value="aprovado">Aprovado</option>
            <option value="recusado">Recusado</option>
          </select>
        </div>
  
        {/* NOVO: Filtro de Usuários (Aparece apenas para ADM e CHECKER) */}
        {(userRole === "adm" || userRole === "checker") && (
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Usuário</label>
            <select 
              value={filtroUsuario} 
              onChange={(e) => setFiltroUsuario(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-white outline-none focus:border-[#72203E]"
            >
              <option value="todos">Todos os usuários</option>
              {usuariosUnicos.map((usuario, index) => (
                <option key={index} value={usuario}>{usuario}</option>
              ))}
            </select>
          </div>
        )}
  
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Data Início</label>
          <input 
            type="date" 
            value={dataInicio} 
            onChange={(e) => setDataInicio(e.target.value)}
            className="border border-gray-300 rounded-md p-1.5 text-sm text-gray-700 bg-white outline-none focus:border-[#72203E]"
          />
        </div>
  
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Data Fim</label>
          <input 
            type="date" 
            value={dataFim} 
            onChange={(e) => setDataFim(e.target.value)}
            className="border border-gray-300 rounded-md p-1.5 text-sm text-gray-700 bg-white outline-none focus:border-[#72203E]"
          />
        </div>
  
        {temFiltroAtivo && (
          <button 
            onClick={onLimpar}
            className="text-sm font-bold text-[#72203E] hover:underline mb-2 ml-2"
          >
            Limpar Filtros
          </button>
        )}
      </div>
    );
  }