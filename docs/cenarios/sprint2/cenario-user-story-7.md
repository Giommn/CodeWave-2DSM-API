# Cenário: Notas Técnicas em Requisitos

## User Story 7
> Como Analista de Qualidade, quero adicionar notas técnicas a um requisito para documentar análises.

## Cenário 1: Adicionar nota técnica com sucesso
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** clica no botão "Adicionar Nota Técnica"  
**E** preenche o campo "Título" com "Análise preliminar"  
**E** preenche o campo "Conteúdo" com "Este requisito está alinhado com a norma X"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Nota técnica adicionada com sucesso"  
**E** a nova nota aparece na seção de notas técnicas do requisito

## Cenário 2: Campos obrigatórios
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** clica no botão "Adicionar Nota Técnica"  
**E** deixa o campo "Título" em branco  
**E** deixa o campo "Conteúdo" em branco  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Preencha todos os campos obrigatórios"  
**E** a nota não é salva

## Cenário 3: Editar nota técnica
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**E** existe uma nota técnica cadastrada  
**Quando** clica no ícone de edição da nota  
**E** altera o conteúdo da nota  
**E** clica no botão "Atualizar"  
**Então** o sistema exibe a mensagem "Nota técnica atualizada com sucesso"  
**E** as alterações são refletidas na nota

## Cenário 4: Excluir nota técnica
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**E** existe uma nota técnica cadastrada  
**Quando** clica no ícone de exclusão da nota  
**E** confirma a exclusão  
**Então** o sistema exibe a mensagem "Nota técnica excluída com sucesso"  
**E** a nota não aparece mais na lista

## Cenário 5: Múltiplas notas no mesmo requisito
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**Quando** adiciona várias notas técnicas ao requisito  
**Então** o sistema exibe todas as notas em ordem cronológica (mais recentes primeiro)  
**E** mostra autor e data de criação para cada nota

## Cenário 6: Visualizar notas de outros usuários
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a página de detalhes de um requisito  
**E** existem notas técnicas criadas por outros usuários  
**Então** o sistema exibe todas as notas, independentemente do autor  
**E** identifica o autor de cada nota
