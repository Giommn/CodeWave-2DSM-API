# Cenário: Responsividade para Dispositivos Móveis

## User Story 9
> Como Projetista, quero visualizar o site pelo meu celular, para visualizar detalhes técnicos.

## Cenário 1: Acesso pelo celular - layout responsivo
**Dado** que o Projetista acessa o sistema por um smartphone  
**Quando** abre a página inicial do sistema  
**Então** o layout se adapta automaticamente ao tamanho da tela  
**E** todos os elementos são legíveis sem necessidade de zoom

## Cenário 2: Menu de navegação mobile
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** está na página inicial  
**Então** o menu de navegação é substituído por um ícone de "hambúrguer"  
**Quando** clica no ícone de menu  
**Então** as opções de navegação são exibidas em formato de lista vertical

## Cenário 3: Visualização de lista de normas no celular
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** navegou para a lista de normas  
**Então** as normas são exibidas em formato de cards (não em tabela)  
**E** cada card mostra as informações principais da norma  
**E** é possível rolar verticalmente para ver mais normas

## Cenário 4: Visualização de requisitos no celular
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** navegou para os detalhes de uma norma  
**E** acessou a lista de requisitos  
**Então** os requisitos são exibidos em formato de cards expansíveis  
**Quando** clica em um card de requisito  
**Então** o card se expande mostrando detalhes completos do requisito

## Cenário 5: Formulários em dispositivos móveis
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** está em uma página com formulário (ex: cadastro de norma)  
**Então** os campos do formulário ocupam 100% da largura da tela  
**E** o teclado virtual não obstrui os campos sendo preenchidos  
**E** é possível rolar a página para ver todos os campos

## Cenário 6: Toque vs Clique
**Dado** que o Projetista acessa o sistema por um smartphone  
**Quando** toca em um botão ou link  
**Então** há um feedback visual do toque (mudança de cor ou efeito)  
**E** a ação é executada corretamente

## Cenário 7: Performance em conexão móvel
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** está usando uma conexão 3G/4G  
**Quando** navega pelo sistema  
**Então** as páginas carregam em menos de 3 segundos  
**E** imagens são otimizadas para carregamento rápido

## Cenário 8: Orientação da tela
**Dado** que o Projetista acessa o sistema por um smartphone  
**E** está visualizando o sistema no modo retrato  
**Quando** gira o celular para o modo paisagem  
**Então** o layout se reajusta automaticamente para aproveitar a largura da tela
