# Cenário: Cadastro de Projetista

## User Story 1
> Como Analista de Qualidade, quero cadastrar um novo projetista na plataforma (inserindo nome e e-mail), para garantir o acesso ao sistema e suas funcionalidades.

## Cenário 1: Cadastro realizado com sucesso
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de projetistas  
**Quando** preenche o campo "Nome" com "João Silva"  
**E** preenche o campo "E-mail" com "joao.silva@empresa.com"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Projetista cadastrado com sucesso"  
**E** o novo projetista aparece na lista de projetistas cadastrados

## Cenário 2: Campo nome obrigatório
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de projetistas  
**Quando** deixa o campo "Nome" em branco  
**E** preenche o campo "E-mail" com "joao.silva@empresa.com"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "O campo nome é obrigatório"  
**E** o projetista não é cadastrado

## Cenário 3: Campo e-mail obrigatório
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de projetistas  
**Quando** preenche o campo "Nome" com "João Silva"  
**E** deixa o campo "E-mail" em branco  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "O campo e-mail é obrigatório"  
**E** o projetista não é cadastrado

## Cenário 4: E-mail inválido
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de projetistas  
**Quando** preenche o campo "Nome" com "João Silva"  
**E** preenche o campo "E-mail" com "email-invalido"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "Formato de e-mail inválido"  
**E** o projetista não é cadastrado

## Cenário 5: E-mail já cadastrado
**Dado** que o Analista de Qualidade está logado no sistema  
**E** acessou a tela de cadastro de projetistas  
**E** já existe um projetista com o e-mail "joao.silva@empresa.com"  
**Quando** preenche o campo "Nome" com "João Silva"  
**E** preenche o campo "E-mail" com "joao.silva@empresa.com"  
**E** clica no botão "Salvar"  
**Então** o sistema exibe a mensagem "E-mail já cadastrado no sistema"  
**E** o projetista não é cadastrado
