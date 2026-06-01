# Cenário: Histórico de Alterações em Requisitos

## User Story 8
> Como Analista de Qualidade, quero visualizar o histórico de alterações nos requisitos para rastreabilidade.

## Cenário 1: Visualizar histórico do requisito
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** clica na aba "Histórico"  
**Então** o sistema exibe uma lista cronológica de todas as alterações do requisito  
**E** mostra data, usuário, campo alterado, valor anterior e valor novo

## Cenário 2: Alteração de descrição registrada
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** altera a descrição do requisito  
**Então** o sistema registra a alteração no histórico  
**E** o histórico mostra: "Descrição alterada de 'X' para 'Y' por Usuário em data/hora"

## Cenário 3: Alteração de interpretação técnica registrada
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** altera a interpretação técnica do requisito  
**Então** o sistema registra a alteração no histórico  
**E** o histórico mostra: "Interpretação Técnica alterada por Usuário em data/hora"

## Cenário 4: Adição de nota técnica no histórico
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** adiciona uma nota técnica ao requisito  
**Então** o sistema registra no histórico: "Nota técnica adicionada: [título da nota] por Usuário"

## Cenário 5: Filtros no histórico
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a aba "Histórico" de um requisito  
**E** existem muitas alterações registradas  
**Quando** aplica filtro por tipo de alteração (ex: apenas alterações de descrição)  
**Então** o sistema exibe apenas as alterações do tipo selecionado

## Cenário 6: Comparação de versões
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a aba "Histórico" de um requisito  
**Quando** seleciona duas versões diferentes do requisito  
**E** clica em "Comparar"  
**Então** o sistema exibe as diferenças entre as duas versões lado a lado  
**E** destaca os campos que foram alterados
