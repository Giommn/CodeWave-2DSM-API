# Cenário: Visualização de Projetistas Cadastrados

## User Story 6
> Como Analista de Qualidade, quero visualizar todos os projetistas cadastrados no site, para ter controle sobre a plataforma.

## Cenário 1: Listagem de projetistas
**Dado** que o Analista de Qualidade está logado no sistema  
**E** existem projetistas cadastrados na plataforma  
**Quando** acessa a tela "Lista de Projetistas"  
**Então** o sistema exibe uma tabela com todos os projetistas cadastrados  
**E** mostra as colunas: Nome, E-mail, Data de Cadastro, Status

## Cenário 2: Ordenação da lista
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela "Lista de Projetistas"  
**Quando** clica no cabeçalho da coluna "Nome"  
**Então** a lista é ordenada alfabeticamente por nome  
**E** uma seta indica a direção da ordenação

## Cenário 3: Paginação da lista
**Dado** que o Analista de Qualidade está logado no sistema  
**E** existem mais de 20 projetistas cadastrados  
**E** acessou a tela "Lista de Projetistas"  
**Então** o sistema exibe os primeiros 20 projetistas  
**E** mostra controles de paginação para navegar entre as páginas

## Cenário 4: Busca na lista de projetistas
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela "Lista de Projetistas"  
**Quando** digita "João" no campo de busca  
**Então** o sistema exibe apenas os projetistas que contêm "João" no nome ou e-mail

## Cenário 5: Visualização de detalhes do projetista
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela "Lista de Projetistas"  
**Quando** clica em um projetista específico  
**Então** o sistema exibe a página de detalhes do projetista  
**E** mostra informações completas: nome, e-mail, data de cadastro, últimas atividades

## Cenário 6: Lista vazia
**Dado** que o Analista de Qualidade está logado no sistema  
**E** não existem projetistas cadastrados  
**Quando** acessa a tela "Lista de Projetistas"  
**Então** o sistema exibe a mensagem "Nenhum projetista cadastrado"  
**E** mostra um botão "Cadastrar Projetista"
