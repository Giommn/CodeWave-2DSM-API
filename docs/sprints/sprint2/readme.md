<div align="center">
  
  # API 2º Semestre DSM - 2026
  
  ### Projeto de Cadastro de Normas Técnicas Aeronáuticas - Akaer

</div>

<div align="center">
  <img src="../../img/CodeWave_logo.png" alt="Logo Code Wave" width="250"/>
</div>

<br>

<div align="center">
 <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/></a>
 <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/></a>
 <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
 <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/></a>
 <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/></a>
 <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/></a>
 <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/></a>
 <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
</div>

<br>

> Status do Projeto: Pronto Sprint 2! ✅

<br>

## 🎯 Objetivo

O desafio consiste em desenvolver uma plataforma web estruturada para centralizar, organizar e correlacionar requisitos normativos aeronáuticos. O sistema visa transformar o processo atual, que é manual e descentralizado, em uma fonte de dados organizada que reduza o tempo de análise e o risco de inconsistências interpretativas, apoiando a tomada de decisão de profissionais habilitados.

<br>

## 🏅 Requisitos do Cliente

A AKAER solicitou o desenvolvimento de uma solução capaz de fornecer uma base técnica sólida e rastreável para a Engenharia de Sistemas Aeronáuticos.

* **Centralização de Dados:** Realizar o cadastro de normas e seus requisitos vinculados.
* **Organização Hierárquica:** Estruturar e correlacionar os requisitos de forma lógica e hierárquica.
* **Navegação Eficiente:** Permitir consultas rápidas através de filtros por órgão, categoria e palavras-chave.
* **Visualização Contextualizada:** Apresentar, além do texto normativo, a interpretação técnica, abordagens aceitáveis e pontos de atenção.
* **Interface e Acessibilidade:** Garantir uma interface web responsiva com autenticação de usuários.
* **Interoperabilidade:** Estabelecer um conjunto de regras que permita a comunicação entre diferentes sistemas.
* **Documentação Técnica:** Entregar manuais de instalação e do usuário, além da documentação da API e modelagem do banco de dados.

<br>

## 📍 Meta da Sprint 2

Expandir as funcionalidades da plataforma introduzindo mecanismos de busca e visualização avançados. O objetivo principal é permitir que o Analista de Qualidade possa filtrar normas técnicas de forma eficiente (por órgão, categoria e palavra-chave), gerenciar a equipe visualizando os projetistas cadastrados, e enriquecer a base de conhecimento através da adição de notas técnicas aos requisitos, garantindo assim uma melhor documentação das análises.

<br>

## 📋 Backlog da Sprint

| ID | Prioridade | User Story | Estimativa | Sprint | Status |
|:---|:---|:---|:---:|:---:|:---|
| $\color{green}{\text{5}}$ | $\color{green}{\text{Alta}}$ | $\color{green}{\text{Como Analista de Qualidade,}}$ $\color{green}{\text{quero filtrar normas técnicas}}$ $\color{green}{\text{por órgão, categoria e palavra-chave,}}$ $\color{green}{\text{para agilizar o processo de busca.}}$ | $\color{green}{\text{8}}$ | $\color{green}{\text{2}}$ | $\color{green}{\text{🔛}}$ |
| 6 | Média | Como Analista de Qualidade, quero visualizar todos os projetistas cadastrados no site, para ter controle sobre a plataforma. | 8 | 2 | 🔛 |
| $\color{green}{\text{7}}$ | $\color{green}{\text{Média}}$ | $\color{green}{\text{Como Analista de Qualidade,}}$ $\color{green}{\text{quero adicionar notas técnicas}}$ $\color{green}{\text{a um requisito}}$ $\color{green}{\text{para documentar análises.}}$ | $\color{green}{\text{8}}$ | $\color{green}{\text{2}}$ | $\color{green}{\text{🔛}}$ |

<br>

## 📋 Cenários de Teste - Sprint 2 <a id="cenarios-sprint2"></a>

### User Story 5 - Filtro de Normas Técnicas
[📑 Visualizar Cenários Completos](../../cenarios/sprint2/cenario-user-story-5.md)

**Cenários:**
- ✅ Filtro por órgão emitente
- ✅ Filtro por categoria
- ✅ Filtro por palavra-chave
- ✅ Filtro combinado (múltiplos critérios)
- ✅ Nenhum resultado encontrado
- ✅ Limpar filtros

### User Story 6 - Visualização de Projetistas Cadastrados
[📑 Visualizar Cenários Completos](../../cenarios/sprint2/cenario-user-story-6.md)

**Cenários:**
- ✅ Listagem de projetistas
- ✅ Ordenação da lista
- ✅ Paginação da lista
- ✅ Busca na lista de projetistas
- ✅ Visualização de detalhes do projetista
- ✅ Lista vazia

### User Story 7 - Notas Técnicas em Requisitos
[📑 Visualizar Cenários Completos](../../cenarios/sprint2/cenario-user-story-7.md)

**Cenários:**
- ✅ Adicionar nota técnica com sucesso
- ✅ Campos obrigatórios
- ✅ Editar nota técnica
- ✅ Excluir nota técnica
- ✅ Múltiplas notas no mesmo requisito
- ✅ Visualizar notas de outros usuários

<br>

###  📋 DoR (Definition of Ready) - Sprint 2


| ID | Critério | Descrição Prática |
| :--- | :--- | :--- |
| DoR 01 | Esboço de Interface | Protótipo básico no Figma das telas de listagem e filtros de normas. |
| DoR 02 | Contrato da API | Definição dos campos de entrada e saída (JSON) para as novas rotas. |
| DoR 03 | Cenários de Aceite | Regras claras de como o filtro deve funcionar (ex: busca por palavra-chave). |
| DoR 04 | Dados de Teste | Pelo menos 5 normas cadastradas no MySQL para validar as consultas. |

<br>

### 📋 DoD (Definition of Done) - Sprint 2

| ID | Critério | Verificação Final |
| :--- | :--- | :--- |
| DoD 01 | Funcionalidade Integrada | Front-end e Back-end  conversando sem erros. |
| DoD 02 | Testes| Funcionalidades testadas individualmente para garantir que novas alterações não quebrem recursos existentes.|
| DoD 03 | Push e Sincronia | Código enviado para a main sem conflitos de merge. |
| DoD 04 | Validação Visual | Layout validado conforme os requisitos de interface responsiva. |

<br>

## 💡 MVP (Produto Mínimo Viável) <a id="mvp"></a>
  <details>
  <summary> MVP - Sprint 2 </summary>
  <br>
  <video src="../../videos/sprint2/video_mvp_api_2_sprint2.mp4" controls width="100%"></video>
    <br>
    <a href="https://youtu.be/OdWSUOaf51k?si=oA5Wvs_-lIdBVLXD" target="_blank">
      <img src="https://img.shields.io/badge/Ver_no_YouTube-FF0000?style=flat&logo=youtube&logoColor=white" alt="Ver no YouTube" />
    </a>
  </details>

  <br>

## 📂 DOCS 

| Sprint | Status | Documentação |
|:---:|:-----------|:------------------------|
| **Sprint 1** | Pronta ✅ |  [DOC](../sprint1/readme.md) |
| **Sprint 2** | Pronta ✅ |   [DOC](./readme.md) |
| **Sprint 3** | Em andamento 🔛 |  [DOC](../sprint3/readme.md) |