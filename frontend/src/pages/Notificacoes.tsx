import { useState, useEffect, useCallback, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import {
  ModalNotificacao,
  PedidoNorma,
  NormaEmVigor,
} from "../components/ModalNotificacao";
import { FiltroNotificacao } from "../components/FiltroNotificacao"; // IMPORT DO NOVO COMPONENTE
import { FaFilePdf } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

function Notificacoes() {
  const [pedidos, setPedidos] = useState<PedidoNorma[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [modalAberto, setModalAberto] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] =
    useState<PedidoNorma | null>(null);
  const [normaPreview, setNormaPreview] = useState<NormaEmVigor | null>(null);

  // Estados dos Filtros
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [filtroUsuario, setFiltroUsuario] = useState<string>("todos");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");

  const userRole = localStorage.getItem("userRole") || "user";
  const userNomeMock = "Yuri Gonçalves de Souza";

  const normasAprovadas_BD: NormaEmVigor[] = [
    {
      codigo: "FATEC-001",
      titulo: "Atestado de Matrícula - DSM",
      descricao:
        "Comprova vínculo regular do aluno com a Fatec SJC no curso de DSM.",
      nome_arquivo:
        "AtestadodeMatriculaSimples_1461392521017_FATEC-SJC_D.S.M._Manhã.PDF",
      url_arquivo:
        "/AtestadodeMatriculaSimples_1461392521017_FATEC-SJC_D.S.M._Manhã.PDF",
    },
  ];

  const fetchPedidos = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    try {
      setTimeout(() => {
        const mockData: PedidoNorma[] = [
          {
            id: 1,
            titulo: "Projeto Censo SJC - PMSJC",
            descricao: "Análise detalhada dos dados do Censo.",
            categoria: "Análise de Dados",
            interpretacao_tecnica:
              "Aplica-se aos dados fornecidos via API Sidra/IBGE.",
            abordagens_aceitaveis: "Desenvolvimento em Python no Colab.",
            pontos_atencao: "Orçamento apertado (RN.P.1).",
            normas_relacionadas: ["FATEC-001"],
            codigo: "PMSJC-001",
            data_emissao: "15/09/2025",
            data_pedido: "15/04/2026",
            emissor: "Fatec SJC / Prefeitura",
            sigla_emissor: "PMSJC",
            nome_arquivo: "API Desafio do Parceiro 1DSM - PMSJC.pdf",
            url_arquivo: "/API Desafio do Parceiro 1DSM - PMSJC.pdf",
            tamanho: "1.2 MB",
            nome_solicitante: "Yuri Gonçalves de Souza",
            tipo_pedido: "criacao",
            status: "pendente",
          },
          {
            id: 2,
            titulo: "Plataforma de Normas Aeronáuticas",
            descricao: "Nova proposta de documentação estruturada.",
            categoria: "Engenharia de Software",
            interpretacao_tecnica:
              "A engenharia exige conformidade estrita com normas.",
            abordagens_aceitaveis: "Utilizar NodeJS, React e BD Relacional.",
            pontos_atencao: "Foco na documentação da API.",
            normas_relacionadas: ["FATEC-001"],
            codigo: "Akaer-002",
            data_emissao: "01/02/2026",
            data_pedido: "10/04/2026",
            emissor: "Akaer",
            sigla_emissor: "AKAER",
            nome_arquivo:
              "Desafio do Parceiro Acadêmico 2DSM - Akaer Rev02 (1).pdf",
            url_arquivo:
              "/Desafio do Parceiro Acadêmico 2DSM - Akaer Rev02 (1).pdf",
            versao_anterior: {
              titulo: "Plataforma de Normas (Versão 1)",
              descricao: "Versão antiga da plataforma de documentação.",
              categoria: "Engenharia de Software",
              interpretacao_tecnica: "Processo manual e descentralizado.",
              abordagens_aceitaveis: "Uso de planilhas Excel.",
              pontos_atencao: "Risco de inconsistências.",
              nome_arquivo: "API Desafio do Parceiro 1DSM - PMSJC.pdf",
              url_arquivo: "/API Desafio do Parceiro 1DSM - PMSJC.pdf",
            },
            tamanho: "8.1 MB",
            nome_solicitante: "Walmir Duque",
            tipo_pedido: "edicao",
            status: "aprovado",
          },
          {
            id: 3,
            titulo: "Diretrizes de Acessibilidade Web",
            descricao: "Inclusão de regras WCAG 2.1 para o novo portal.",
            categoria: "UI/UX",
            interpretacao_tecnica:
              "Contraste mínimo de 4.5:1 para textos normais.",
            abordagens_aceitaveis:
              "Uso de ferramentas automatizadas como Lighthouse.",
            pontos_atencao: "Validar navegação por teclado.",
            normas_relacionadas: [],
            codigo: "UX-101",
            data_emissao: "01/03/2026",
            data_pedido: "05/04/2026",
            emissor: "Design Team",
            sigla_emissor: "DSG",
            nome_arquivo: "Diretrizes_Acessibilidade.pdf",
            url_arquivo: "/Diretrizes_Acessibilidade.pdf",
            tamanho: "2.5 MB",
            nome_solicitante: "Yuri Gonçalves de Souza",
            tipo_pedido: "criacao",
            status: "recusado",
          },
          {
            id: 4,
            titulo: "Revisão de Segurança de Dados",
            descricao: "Atualização das políticas de criptografia no banco.",
            categoria: "Segurança",
            interpretacao_tecnica:
              "Criptografia AES-256 obrigatória para senhas.",
            abordagens_aceitaveis: "Hashing com bcrypt e salt dinâmico.",
            pontos_atencao: "Impacto no tempo de login.",
            normas_relacionadas: ["FATEC-001"],
            codigo: "SEC-202",
            data_emissao: "10/01/2025",
            data_pedido: "20/03/2026",
            emissor: "TI Security",
            sigla_emissor: "TIS",
            nome_arquivo: "Politica_Seguranca_v2.pdf",
            url_arquivo: "/Politica_Seguranca_v2.pdf",
            versao_anterior: {
              titulo: "Política de Segurança v1",
              descricao: "Versão antiga usando MD5.",
              categoria: "Segurança",
              interpretacao_tecnica: "Uso de MD5 para senhas.",
              abordagens_aceitaveis: "Armazenamento em texto puro proibido.",
              pontos_atencao: "Vulnerável a ataques de colisão.",
              nome_arquivo: "Politica_Seguranca_v1.pdf",
              url_arquivo: "/Politica_Seguranca_v1.pdf",
            },
            tamanho: "4.0 MB",
            nome_solicitante: "Yuri Gonçalves de Souza",
            tipo_pedido: "edicao",
            status: "aprovado",
          },
          {
            id: 5,
            titulo: "Manual de Integração Contínua (CI/CD)",
            descricao: "Padronização dos pipelines do GitHub Actions.",
            categoria: "DevOps",
            interpretacao_tecnica:
              "Todos os PRs devem passar por testes unitários antes do merge.",
            abordagens_aceitaveis:
              "Uso de Jest para front-end e pytest para back-end.",
            pontos_atencao:
              "Garantir que os segredos não sejam expostos nos logs.",
            normas_relacionadas: [],
            codigo: "DEV-305",
            data_emissao: "12/04/2026",
            data_pedido: "18/04/2026",
            emissor: "Engenharia de Software",
            sigla_emissor: "ENG",
            nome_arquivo: "Manual_CICD_Draft.pdf",
            url_arquivo: "/Manual_CICD_Draft.pdf",
            tamanho: "3.1 MB",
            nome_solicitante: "Walmir Duque",
            tipo_pedido: "criacao",
            status: "pendente",
          },
        ];

        if (userRole === "user") {
          setPedidos(
            mockData.filter((p) => p.nome_solicitante === userNomeMock),
          );
        } else {
          setPedidos(mockData);
        }

        setCarregando(false);
      }, 600);
    } catch (e: any) {
      setErro(e.message);
      setCarregando(false);
    }
  }, [userRole]);

  useEffect(() => {
    fetchPedidos();
  }, [fetchPedidos]);

  const abrirRevisao = (pedido: PedidoNorma) => {
    setPedidoSelecionado(pedido);
    setModalAberto(true);
  };

  const handleNavegarTag = (codigoClicado: string) => {
    const normaEncontrada = normasAprovadas_BD.find(
      (n) => n.codigo === codigoClicado,
    );
    if (normaEncontrada) {
      setNormaPreview(normaEncontrada);
    } else {
      alert(
        `Erro: A norma referenciada (${codigoClicado}) não foi encontrada no banco de normas aprovadas.`,
      );
    }
  };

  const handleAprovar = async (id: number) => {
    setModalAberto(false);
  };
  const handleRecusar = async (id: number) => {
    setModalAberto(false);
  };

  // Função para converter data do formato DD/MM/YYYY (do mock) para o JavaScript
  const parseData = (dataStr: string) => {
    const [d, m, y] = dataStr.split("/");
    return new Date(`${y}-${m}-${d}T00:00:00`);
  };

  // Extrai uma lista única de usuários para popular o dropdown
  const usuariosUnicos = Array.from(
    new Set(pedidos.map((p) => p.nome_solicitante)),
  );

  // Aplicação dos Filtros
  const pedidosFiltrados = pedidos.filter((pedido) => {
    // 1. Filtro de Status
    if (filtroStatus !== "todos" && pedido.status !== filtroStatus)
      return false;

    // 2. Filtro de Usuário (Só aplica se estiver visível/selecionado)
    if (filtroUsuario !== "todos" && pedido.nome_solicitante !== filtroUsuario)
      return false;

    // 3. Filtro de Data
    if (dataInicio || dataFim) {
      const dataPed = parseData(pedido.data_pedido);
      if (dataInicio) {
        const inicio = new Date(`${dataInicio}T00:00:00`);
        if (dataPed < inicio) return false;
      }
      if (dataFim) {
        const fim = new Date(`${dataFim}T23:59:59`);
        if (dataPed > fim) return false;
      }
    }
    return true;
  });

  const limparFiltros = () => {
    setFiltroStatus("todos");
    setFiltroUsuario("todos");
    setDataInicio("");
    setDataFim("");
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case "aprovado":
        return (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-xs font-bold border border-green-200">
            Aprovado
          </span>
        );
      case "recusado":
        return (
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-md text-xs font-bold border border-red-200">
            Recusado
          </span>
        );
      case "pendente":
      default:
        return (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-xs font-bold border border-yellow-200">
            Pendente
          </span>
        );
    }
  };

  const renderTipoPedido = (tipo: string) => {
    if (tipo === "criacao")
      return (
        <span className="bg-gray-100 text-gray-700 border border-gray-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
          Criação
        </span>
      );
    return (
      <span className="bg-gray-600 text-white border border-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
        Edição
      </span>
    );
  };

  interface NormaCardProps {
    tipo: "novo" | "atualizacao";
    titulo?: string;
    criador?: string;
    data?: string;
    onVerCompleta?: () => void;
  }

  const NormaCard: React.FC<NormaCardProps> = ({
    tipo,
    titulo = "Norma_nome",
    criador = "adm_criador",
    data = "01/01/2025",
    onVerCompleta,
  }) => {
    const statusColor = tipo === "novo" ? "bg-red-600" : "bg-emerald-400";
    const tipoTexto = tipo === "novo" ? "Novo" : "Atualização";

    return (
      <div className="w-full max-w-[340px] sm:max-w-[290px] md:max-w-[320px] bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4 transition-all hover:shadow-lg mx-auto sm:mx-0">
        <div className="flex items-center gap-3">
          <span className={`w-5 h-5 rounded-full ${statusColor} shrink-0`} />
          <h3 className="text-xl sm:text-2xl font-normal text-gray-900 truncate">
            {tipoTexto}
          </h3>
        </div>

        <div className="w-full bg-[#D9D9D9] rounded-sm h-[110px] flex items-center justify-center p-4">
          <div className="bg-white rounded shadow-sm px-3 py-2 flex flex-col items-center justify-center border border-gray-200">
            <FaFilePdf className="text-red-600 text-3xl" />
            <span className="text-[10px] font-bold text-red-600 mt-0.5 tracking-wider">
              PDF
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-gray-700 text-sm sm:text-base font-normal pl-1">
          <p className="truncate">{titulo}</p>
          <p className="truncate">{criador}</p>
          <p>{data}</p>
        </div>

        <button
          onClick={onVerCompleta}
          className="w-full sm:w-auto self-center bg-[#D9D9D9] hover:bg-gray-300 text-gray-800 text-xs font-medium py-2 px-6 rounded-full transition-colors mt-2"
        >
          Ver Norma Completa
        </button>
      </div>
    );
  };

  const CarrosselNotificacoes: React.FC = () => {
    const carrosselRef = useRef<HTMLDivElement>(null);

    const dadosMockados = [
      {
        id: 1,
        tipo: "novo" as const,
        titulo: "Norma ABNT 1012",
        criador: "adm_joao",
        data: "12/05/2026",
      },
      {
        id: 2,
        tipo: "atualizacao" as const,
        titulo: "Portaria Inmetro",
        criador: "adm_maria",
        data: "28/05/2026",
      },
      {
        id: 3,
        tipo: "novo" as const,
        titulo: "Norma Interna v2",
        criador: "adm_pedro",
        data: "15/04/2026",
      },
      {
        id: 4,
        tipo: "atualizacao" as const,
        titulo: "ISO 9001 Revisão",
        criador: "adm_lucas",
        data: "10/05/2026",
      },
    ];

    // Triplicamos os itens para garantir que sempre haja conteúdo nas pontas para o efeito infinito funcionar no clique
    const listaInfinita = [
      ...dadosMockados,
      ...dadosMockados,
      ...dadosMockados,
    ];

    const scroll = (direction: "left" | "right") => {
      if (!carrosselRef.current) return;

      const container = carrosselRef.current;
      const cardWidth = 280 + 24; // Largura do card + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      // Rola suavemente apenas na direção do clique
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const handleScroll = () => {
      if (!carrosselRef.current) return;

      const container = carrosselRef.current;
      const currentScroll = container.scrollLeft;

      // Define o tamanho de um terço exato da nossa lista triplicada
      const oneThirdWidth = container.scrollWidth / 3;

      // SE CHEGOU PERTO DO FIM: Volta imperceptivelmente para o bloco do meio
      if (currentScroll >= oneThirdWidth * 2) {
        container.style.scrollBehavior = "auto"; // Desliga o smooth temporariamente
        container.scrollLeft = currentScroll - oneThirdWidth;
        container.style.scrollBehavior = "smooth"; // Religa o smooth
      }
      // SE CHEGOU PERTO DO INÍCIO: Avança imperceptivelmente para o bloco do meio
      else if (currentScroll <= 0) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = currentScroll + oneThirdWidth;
        container.style.scrollBehavior = "smooth";
      }
    };
    return (
      <div className="w-full max-w-7xl mx-auto mt-4 relative group px-4">
        {/* Botão Anterior (Esquerda) */}
        <button
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-6 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 transition-colors border border-gray-200"
          onClick={() => scroll("left")}
          onScroll={handleScroll}
        >
          <FaArrowAltCircleLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div
          ref={carrosselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

          {listaInfinita.map((item, index) => (
            <NormaCard
              key={`${item.id}-${index}`}
              tipo={item.tipo}
              titulo={item.titulo}
              criador={item.criador}
              data={item.data}
              onVerCompleta={() => alert(`Abrindo: ${item.titulo}`)}
            />
          ))}
        </div>

        <button
          className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-6 top-1/2 -translate-y-1/2 z-20 hover:bg-gray-100 transition-colors border border-gray-200"
          onClick={() => scroll("right")}
          onScroll={handleScroll}
        >
          <FaArrowAltCircleRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-6 mt-4 justify-start items-center sm:items-start">
        <CarrosselNotificacoes />
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-7xl mx-auto mt-4">
        <h1 className="text-2xl font-bold text-[#72203E] mb-6 border-b border-gray-200 pb-4">
          {userRole === "user" ? "Meus Pedidos" : "Solicitações de Normas"}
        </h1>

        {/* COMPONENTE DE FILTRO SENDO CHAMADO AQUI */}
        <FiltroNotificacao
          userRole={userRole}
          filtroStatus={filtroStatus}
          setFiltroStatus={setFiltroStatus}
          filtroUsuario={filtroUsuario}
          setFiltroUsuario={setFiltroUsuario}
          usuariosUnicos={usuariosUnicos}
          dataInicio={dataInicio}
          setDataInicio={setDataInicio}
          dataFim={dataFim}
          setDataFim={setDataFim}
          onLimpar={limparFiltros}
        />

        {carregando ? (
          <div className="text-center py-12 text-gray-500">
            Carregando pedidos...
          </div>
        ) : erro ? (
          <div className="text-center py-12 text-[#72203E]">{erro}</div>
        ) : pedidosFiltrados.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Nenhuma solicitação encontrada para estes filtros.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-3 min-w-[950px]">
              <div className="flex items-center justify-between px-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                <div className="w-[40%] pl-12">Documento / Tipo</div>
                <div className="flex items-center gap-6 w-[45%]">
                  <span className="w-16 text-center">Tamanho</span>
                  <span className="w-24 text-center">Data Pedido</span>
                  <span className="flex-1">Solicitante</span>
                </div>
                <div className="w-24 text-center pr-2">Status</div>
              </div>

              {pedidosFiltrados.map((pedido) => (
                <div
                  key={pedido.id}
                  onClick={() => abrirRevisao(pedido)}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-[#72203E] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4 w-[40%] pr-4">
                    <input
                      type="checkbox"
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 cursor-pointer text-[#72203E] rounded border-gray-300 focus:ring-[#72203E]"
                    />
                    <div className="bg-gray-50 border border-gray-200 p-2 rounded text-[#72203E] flex-shrink-0 group-hover:bg-[#72203E] group-hover:text-white transition-colors">
                      <FaFilePdf className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col overflow-hidden gap-0.5">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm text-gray-800 truncate">
                          {pedido.titulo}
                        </p>
                        {renderTipoPedido(pedido.tipo_pedido)}
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        {pedido.nome_arquivo}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 w-[45%] text-sm text-gray-700">
                    <span className="w-16 text-center bg-gray-100 border border-gray-200 rounded px-1 py-0.5 text-xs font-bold text-gray-600">
                      {pedido.tamanho}
                    </span>
                    <span className="w-24 text-center font-bold">
                      {pedido.data_pedido}
                    </span>
                    <span className="flex-1 truncate font-bold text-gray-800">
                      {pedido.nome_solicitante}
                    </span>
                  </div>

                  <div className="w-24 flex justify-center">
                    {renderStatus(pedido.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ModalNotificacao
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        pedido={pedidoSelecionado}
        onAprovar={handleAprovar}
        onRecusar={handleRecusar}
        onNavegarTag={handleNavegarTag}
        normaPreviewData={normaPreview}
        onClosePreview={() => setNormaPreview(null)}
      />
    </div>
  );
}

export default Notificacoes;
