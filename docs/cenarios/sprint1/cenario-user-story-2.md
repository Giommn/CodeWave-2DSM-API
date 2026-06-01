# Cenário: Cadastro de Normas Técnicas

## User Story 2
> Como Analista de Qualidade, quero atribuir e manipular normas (emitente, título, data) técnicas ao sistema, para permitir melhor visualização das informações.

## Cenário 1: Cadastro de norma realizado com sucesso
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de normas  
**Quando** seleciona o emitente "ANAC"  
**E** preenche o campo "Título" com "RBAC 121 - Requisitos de Operação"  
**E** preenche o campo "Data" com "15/03/2024"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Norma cadastrada com sucesso"  
**E** a nova norma aparece na lista de normas cadastradas

## Cenário 2: Campos obrigatórios
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de normas  
**Quando** não seleciona o emitente  
**E** deixa o campo "Título" em branco  
**E** deixa o campo "Data" em branco  
**E** clica no botão "Salvar"  
**Então** o sistema exibe mensagens de erro para cada campo obrigatório  
**E** a norma não é cadastrada

## Cenário 3: Edição de norma
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a lista de normas cadastradas  
**E** selecionou uma norma para editar  
**Quando** altera o título para "RBAC 121 - Requisitos de Operação (Atualizado)"  
**E** clica no botão "Atualizar"  
**Então** o sistema exibe a mensagem "Norma atualizada com sucesso"  
**E** as alterações são refletidas na lista de normas

## Cenário 4: Exclusão de norma
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a lista de normas cadastradas  
**E** selecionou uma norma para excluir  
**Quando** clica no botão "Excluir"  
**E** confirma a exclusão na mensagem de confirmação  
**Então** o sistema exibe a mensagem "Norma excluída com sucesso"  
**E** a norma não aparece mais na lista
