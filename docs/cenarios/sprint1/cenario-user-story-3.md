# Cenário: Cadastro de Requisitos

## User Story 3
> Como Analista de Qualidade, quero atribuir e manipular requisitos a uma norma, para que informações complementares fiquem registradas no sistema.

## Cenário 1: Cadastro de requisito realizado com sucesso
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de detalhes de uma norma específica  
**Quando** clica no botão "Adicionar Requisito"  
**E** preenche o campo "Código do Requisito" com "RBAC-121.001"  
**E** preenche o campo "Descrição" com "A operação deve ser realizada conforme manual"  
**E** preenche o campo "Interpretação Técnica" com "Este requisito estabelece..."  
**E** seleciona a "Categoria" como "Operacional"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Requisito cadastrado com sucesso"  
**E** o novo requisito aparece na lista de requisitos da norma

## Cenário 2: Código de requisito duplicado na mesma norma
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de detalhes de uma norma específica  
**E** já existe um requisito com código "RBAC-121.001" para esta norma  
**Quando** tenta cadastrar um novo requisito com o mesmo código "RBAC-121.001"  
**Então** o sistema exibe a mensagem "Código de requisito já existe para esta norma"  
**E** o requisito não é cadastrado

## Cenário 3: Edição de requisito
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a lista de requisitos de uma norma  
**E** selecionou um requisito para editar  
**Quando** altera a descrição do requisito  
**E** clica no botão "Atualizar"  
**Então** o sistema exibe a mensagem "Requisito atualizado com sucesso"  
**E** as alterações são refletidas na lista de requisitos

## Cenário 4: Visualização completa do requisito
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a lista de requisitos de uma norma  
**Quando** clica em um requisito específico  
**Então** o sistema exibe a página de detalhes do requisito  
**E** mostra o código, descrição, interpretação técnica e pontos de atenção
