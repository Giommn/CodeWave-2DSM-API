# Cenário: Login no Sistema

## User Story 4
> Como Analista de Qualidade, quero realizar login informando meu email e senha para acessar o sistema.

## Cenário 1: Login realizado com sucesso
**Dado** que o Analista de Qualidade está na página de login  
**E** possui um cadastro ativo no sistema  
**Quando** preenche o campo "E-mail" com "analista@akaer.com"  
**E** preenche o campo "Senha" com "senha123"  
**E** clica no botão "Entrar"  
**Então** o sistema redireciona para a página inicial do sistema  
**E** exibe a mensagem "Login realizado com sucesso"

## Cenário 2: E-mail não cadastrado
**Dado** que o Analista de Qualidade está na página de login  
**Quando** preenche o campo "E-mail" com "nao.cadastrado@email.com"  
**E** preenche o campo "Senha" com "qualquer senha"  
**E** clica no botão "Entrar"  
**Então** o sistema exibe a mensagem "E-mail ou senha inválidos"  
**E** permanece na página de login

## Cenário 3: Senha incorreta
**Dado** que o Analista de Qualidade está na página de login  
**E** possui um cadastro ativo no sistema com e-mail "analista@akaer.com"  
**Quando** preenche o campo "E-mail" com "analista@akaer.com"  
**E** preenche o campo "Senha" com "senha-errada"  
**E** clica no botão "Entrar"  
**Então** o sistema exibe a mensagem "E-mail ou senha inválidos"  
**E** permanece na página de login

## Cenário 4: Campos obrigatórios
**Dado** que o Analista de Qualidade está na página de login  
**Quando** deixa o campo "E-mail" em branco  
**E** deixa o campo "Senha" em branco  
**E** clica no botão "Entrar"  
**Então** o sistema exibe a mensagem "Preencha todos os campos"  
**E** permanece na página de login

## Cenário 5: Sessão expirada
**Dado** que o Analista de Qualidade está logado no sistema  
**E** ficou inativo por mais de 30 minutos  
**Quando** tenta realizar qualquer ação no sistema  
**Então** o sistema redireciona para a página de login  
**E** exibe a mensagem "Sessão expirada. Faça login novamente"
