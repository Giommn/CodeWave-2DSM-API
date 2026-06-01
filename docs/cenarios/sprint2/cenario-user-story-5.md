# Cenário: Filtro de Normas Técnicas

## User Story 5
> Como Analista de Qualidade, quero filtrar normas técnicas por órgão, categoria e palavra-chave, para agilizar o processo de busca.

## Cenário 1: Filtro por órgão emitente
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**Quando** seleciona o filtro "Órgão" com o valor "ANAC"  
**E** clica no botão "Aplicar Filtros"  
**Então** o sistema exibe apenas as normas emitidas pela ANAC  
**E** mostra a quantidade de resultados encontrados

## Cenário 2: Filtro por categoria
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**Quando** seleciona o filtro "Categoria" com o valor "Operacional"  
**E** clica no botão "Aplicar Filtros"  
**Então** o sistema exibe apenas as normas da categoria Operacional  
**E** mostra a quantidade de resultados encontrados

## Cenário 3: Filtro por palavra-chave
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**Quando** preenche o campo "Palavra-chave" com "segurança"  
**E** clica no botão "Aplicar Filtros"  
**Então** o sistema exibe as normas que contêm "segurança" no título ou descrição  
**E** mostra a quantidade de resultados encontrados

## Cenário 4: Filtro combinado (múltiplos critérios)
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**Quando** seleciona o filtro "Órgão" com o valor "ANAC"  
**E** seleciona o filtro "Categoria" com o valor "Operacional"  
**E** preenche o campo "Palavra-chave" com "segurança"  
**E** clica no botão "Aplicar Filtros"  
**Então** o sistema exibe as normas que atendem a todos os critérios simultaneamente  
**E** mostra a quantidade de resultados encontrados

## Cenário 5: Nenhum resultado encontrado
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**Quando** seleciona filtros que não correspondem a nenhuma norma cadastrada  
**E** clica no botão "Aplicar Filtros"  
**Então** o sistema exibe a mensagem "Nenhuma norma encontrada com os filtros selecionados"  
**E** mostra uma lista vazia

## Cenário 6: Limpar filtros
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de listagem de normas  
**E** aplicou alguns filtros na busca  
**Quando** clica no botão "Limpar Filtros"  
**Então** todos os campos de filtro são resetados  
**E** o sistema exibe a lista completa de normas
