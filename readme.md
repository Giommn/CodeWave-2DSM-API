<div align="center">

## API 2º Semestre DSM - 2026

</div>

<div align="center">
  
### Projeto de Cadastro de Normas Técnicas Aeronáuticas - Akaer

</div>

<p align="center">
  <img src="doc/img/CodeWave_logo.png" alt="Logo da equipe"
     width="400"/>
</p>

<h1 align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/></a>
  <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
</h1>

<p align="center">
  <a href ="#Objetivo"> Objetivo</a>  |
  <a href ="#requisitos"> Requisitos do Cliente</a>  |  
  <a href ="#estrategia-branches"> Estratégia de Branches</a>  |
  <a href ="#tipos-commits"> Tipos de Commits</a>  |
  <a href ="#componentes"> Componentes</a>  |
  <a href ="#mvp"> MVP</a>  |
  <a href ="#cronogramaPJ"> Cronograma de Evolução do Projeto</a>  |
  <a href ="#sprint1-requisitos"> Sprint 1 - Requisitos</a>  |
  <a href ="#cenarios-sprint1"> Cenários Sprint 1</a>  |
  <a href ="#escala-estimativa"> Escala de Estimativa de Esforço</a>  |
  <a href ="#product-backlog"> Product Backlog</a>  |
  <a href ="#equipe"> Equipe</a>  |
  <a href ="#focalpoint"> Focal Point</a>
</p>

<br>

> Status do Projeto: Em andamento Sprint 1! :hourglass_flowing_sand:

## :dart: Objetivo <a id="Objetivo"></a>
O desafio consiste em desenvolver uma plataforma web estruturada para centralizar, organizar e correlacionar requisitos normativos aeronáuticos. O sistema visa transformar o processo atual, que é manual e descentralizado, em uma fonte de dados organizada que reduza o tempo de análise e o risco de inconsistências interpretativas, apoiando a tomada de decisão de profissionais habilitados.

## :medal_sports: Requisitos do Cliente <a id="requisitos"></a>

AAKAER solicitou o desenvolvimento de uma solução capaz de fornecer uma base técnica sólida e rastreável para a Engenharia de Sistemas Aeronáuticos.

:black_small_square: Centralização de Dados: Realizar o cadastro de normas e seus requisitos vinculados.

:black_small_square: Organização Hierárquica: Estruturar e correlacionar os requisitos de forma lógica e hierárquica.

:black_small_square: Navegação Eficiente: Permitir consultas rápidas através de filtros por órgão, categoria e palavras-chave.

:black_small_square: Visualização Contextualizada: Apresentar, além do texto normativo, a interpretação técnica, abordagens aceitáveis e pontos de atenção.

:black_small_square: Interface e Acessibilidade: Garantir uma interface web responsiva com autenticação de usuários.

:black_small_square: Interoperabilidade: Estabelecer um conjunto de regras que permita a comunicação entre diferentes sistemas.

:black_small_square: Documentação Técnica: Entregar manuais de instalação e do usuário, além da documentação da API e modelagem do banco de dados.

# Estratégia de Branches <a id="estrategia-branches"></a>

| Regra | Descrição |
|:------|:----------|
| **main sempre estável** | Código pronto para produção |
| **feature/<id>-desc** | Padrão de nome para branches |
| **sem commit de código direto** | Nenhum código commitado direto na `main` |
| **PR obrigatório** | Toda mudança passa por Pull Request |
| **revisão obrigatória** | Mínimo 1 approval antes do merge |

## Tipos de Commits <a id="tipos-commits"></a>
| Tipo | Descrição |
|------|-----------|
| **feat** | Adição de um novo recurso ou funcionalidade |
| **fix** | Correção de um bug |
| **docs** | Atualização de documentação |
| **style** | Mudanças de formatação, sem afetar o código |
| **refactor** | Refatoração do código, sem alterar funcionalidade |
| **test** | Adiciona ou modifica testes |
| **chore** | Atualizações menores que não impactam diretamente a funcionalidade do código |

## Componentes <a id="componentes"></a>

### `<tipo>`
Identifica a natureza da mudança realizada no commit. Deve ser um dos tipos listados acima.

### `<id_demandaN>`
Identificador da demanda criada na ferramenta de gestão de Stories/Tasks que o Time estiver usando:
- GitHub Issues
- Jira Software
- GitLab Issues
- Outras ferramentas similares

Pode estar entre 1 e N, separados por vírgula quando houver múltiplos IDs.

### `<descrição da entrega feita no commit>`
Descrição clara sobre o que está sendo entregue no commit criado e enviado para o Git.

## 💡 MVP (Produto Mínimo Viável) <a id="mvp"></a>
  <details>
  <summary> MVP - Sprint 1 </summary>
    <img src="doc/videos/">
  </details>
  <details>
  <summary> MVP - Sprint 2 </summary>
    <img src="doc/videos/">
  </details>
  <details>
  <summary> MVP - Sprint 3 </summary>
     <img src="doc/videos/">
  </details>

<br>

## 📆 Cronograma de Evolução do Projeto <a id="cronogramaPJ"></a>

| Sprint | Período |  Status  | Foco |
|:------:|:-------:|:------------:|:----------:|
| **Sprint 1**  | 16/03 - 05/04 | ⏳ |  |
| **Sprint 2**  | 13/04 - 03/05 | ⏳ |  |
| **Sprint 3**  | 11/11 - 31/05 | ⏳ |  |

</br>

## 📋 Sprint 1 - Requisitos <a id="sprint1-requisitos"></a>
| ID | Prioridade | User Story | Estimativa | Sprint | Status |
|:---|:---|:---|:---:|:---:|:---|
| $\color{green}{\text{1}}$ | $\color{green}{\text{Alta}}$ | $\color{green}{\text{Como Analista de Qualidade,}}$ $\color{green}{\text{quero cadastrar um novo}}$ $\color{green}{\text{projetista na plataforma}}$ $\color{green}{\text{(inserindo nome e e-mail),}}$ $\color{green}{\text{para garantir o acesso ao}}$ $\color{green}{\text{sistema e suas funcionalidades}}$ | $\color{green}{\text{11}}$ | $\color{green}{\text{1}}$ | $\color{green}{\text{⌛}}$ |
| $\color{green}{\text{2}}$ | $\color{green}{\text{Alta}}$ | $\color{green}{\text{Como Analista de Qualidade,}}$ $\color{green}{\text{quero atribuir e manipular}}$ $\color{green}{\text{normas (emitente, título, data)}}$ $\color{green}{\text{técnicas ao sistema,}}$ $\color{green}{\text{para permitir melhor}}$ $\color{green}{\text{visualização das informações}}$ | $\color{green}{\text{11}}$ | $\color{green}{\text{1}}$ | $\color{green}{\text{⌛}}$ |
| 3 | Alta | Como Analista de Qualidade, quero atribuir e manipular requisitos a uma norma, para que informações complementares fiquem registradas no sistema. | 13 | 1 | ⌛ |
| $\color{green}{\text{4}}$ | $\color{green}{\text{Alta}}$ | $\color{green}{\text{Como Analista de Qualidade,}}$ $\color{green}{\text{quero realizar login}}$ $\color{green}{\text{informando meu email}}$ $\color{green}{\text{e senha para acessar}}$ $\color{green}{\text{o sistema.}}$ | $\color{green}{\text{8}}$ | $\color{green}{\text{1}}$ | $\color{green}{\text{⌛}}$ |

<br>

## 📋 Cenários de Teste - Sprint 1 <a id="cenarios-sprint1"></a>

### User Story 1 - Cadastro de Projetista
[📑 Visualizar Cenários Completos](docs/cenarios/sprint1/cenario-user-story-1.md)

**Cenários:**
- ✅ Cadastro realizado com sucesso
- ✅ Campo nome obrigatório
- ✅ Campo e-mail obrigatório
- ✅ E-mail inválido
- ✅ E-mail já cadastrado

### User Story 2 - Cadastro de Normas Técnicas
[📑 Visualizar Cenários Completos](docs/cenarios/sprint1/cenario-user-story-2.md)

**Cenários:**
- ✅ Cadastro de norma realizado com sucesso
- ✅ Campos obrigatórios
- ✅ Edição de norma
- ✅ Exclusão de norma

### User Story 3 - Cadastro de Requisitos
[📑 Visualizar Cenários Completos](docs/cenarios/sprint1/cenario-user-story-3.md)

**Cenários:**
- ✅ Cadastro de requisito realizado com sucesso
- ✅ Código de requisito duplicado na mesma norma
- ✅ Edição de requisito
- ✅ Visualização completa do requisito

### User Story 4 - Login no Sistema
[📑 Visualizar Cenários Completos](docs/cenarios/sprint1/cenario-user-story-4.md)

**Cenários:**
- ✅ Login realizado com sucesso
- ✅ E-mail não cadastrado
- ✅ Senha incorreta
- ✅ Campos obrigatórios
- ✅ Sessão expirada

<br>

## 📊 Escala de Estimativa de Esforço <a id="escala-estimativa"></a>
 Pontuação | Significado | Estimativa | 
|:---:|:---|:---:|
| **1-5** | Muito Pequeno | Até 3 dias |
| **6-10** | Médio | Até 5 dias | 
| **11-15** | Grande | Até 10 dias | 
| **16-20** | Muito Grande | Até 15 dias|

## 📋 Product Backlog - User Stories <a id="product-backlog"></a>

| ID | Prioridade | User Story | Estimativa | Sprint | Status |
|:---:|:---:|:---|:---:|:---:|:---:|
| 1 | Alta | Como Analista de Qualidade, quero cadastrar um novo projetista na plataforma (inserindo nome e e-mail), para garantir o acesso ao sistema e suas funcionalidades. | 11 | 1 | ⌛ |
| 2 | Alta | Como Analista de Qualidade, quero atribuir e manipular normas (emitente, título, data) técnicas ao sistema, para permitir melhor visualização das informações. | 11 | 1 | ⌛ |
| 3 | Alta | Como Analista de Qualidade, quero atribuir e manipular requisitos a uma norma, para que informações complementares fiquem registradas no sistema. | 13 | 1 | ⌛ |
| 4 | Alta | Como Analista de Qualidade, quero realizar login informando meu email e senha para acessar o sistema. | 8 | 1 | ⌛ |
| 5 | Alta | Como Analista de Qualidade, quero filtrar normas técnicas por órgão, categoria e palavra-chave, para agilizar o processo de busca. | 8 | 2 | ⌛ |
| 6 | Média | Como Analista de Qualidade, quero visualizar todos os projetistas cadastrados no site, para ter controle sobre a plataforma. | 8 | 2 | ⌛ |
| 7 | Média | Como Analista de Qualidade, quero adicionar notas técnicas a um requisito para documentar análises. | 8 | 2 | ⌛ |
| 8 | Média | Como Analista de Qualidade, quero visualizar o histórico de alterações nos requisitos para rastreabilidade. | 8 | 3 | ⌛ |
| 9 | Baixa | Como Projetista, quero vizualizar o site pelo meu celular, para visualizar detalhes técnicos. | 8 | 3 | ⌛ |

<br>

<div align="center">  
  
## :mortar_board: Equipe <a id="equipe"></a>

|      Membro      |     Função     |                                 LinkedIn & GitHub                                  | 
| :--------------: | :-----------: | :--------------------------------------------------------------------------------: | 
|    Giovanni Martins   | Scrum Master | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Giommn) |
|  Hugo Leonardo  | Product Owner | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/HUGO0895) |
| Guilherme Oliveira | Desenvolvedor(a) | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/guilhermefpo)| 
| Yuri Souza | Desenvolvedor(a) | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Yuri-Dev-OH) |
| João Vitor | Desenvolvedor(a) | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/joaoCavalcante377) |
| Caio  Rodrigues | Desenvolvedor(a) | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Caio-Almeida4) |
| Felipe Batista | Desenvolvedor(a) | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)]() [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/felipesgb) |

</div>
</br>

<br>

<div align="center">  
  
## :globe_with_meridians: Focal Point <a id="focalpoint"></a>

| P²              | M²       |
| :-------------: | :------: |
| <a href=''>Prof. Claudio Lima</a> | <a href=''>Prof.  Walmir Duque</a> |

</div>
</br>
