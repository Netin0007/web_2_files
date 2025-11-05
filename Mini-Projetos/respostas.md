Questão 01

Para fazer isso, colocamos a tag <script> dentro do <head> e usamos o atributo defer.
Esse atributo informa ao navegador que o script deve ser carregado em paralelo com o HTML, mas só será executado depois que todo o HTML da página for completamente carregado e analisado.

Questão 02

I - B: getElementById seleciona um único elemento pelo seu id.

II - C: querySelector seleciona o primeiro elemento que corresponde a um seletor CSS.

III - A: getElementsByTagName retorna uma coleção de elementos que possuem o mesmo nome de tag, por exemplo 'li'.

Questão 03

O método usado foi add(), que faz parte da propriedade classList.
O classList representa a lista de classes CSS de um elemento HTML e oferece métodos úteis como:

add() → adiciona uma classe

remove() → remove uma classe

toggle() → adiciona a classe se ela não existir ou remove se já existir

Questão 04

O método createElement() cria um novo elemento HTML no DOM, mas não o insere automaticamente na página.
Ele precisa receber como argumento o nome da tag que queremos criar, escrito como uma string.
Exemplo:

const novoParagrafo = document.createElement('p');

Questão 05

A alternativa correta é b.

innerText → retorna ou define apenas o texto visível ao usuário.

innerHTML → retorna ou define o conteúdo HTML completo do elemento, incluindo as tags.

Questão 06

O evento foi definido usando o atributo onclick em cada elemento.
Nesse atributo, passamos uma função (no caso, uma arrow function) que será executada automaticamente quando o elemento for clicado.

Questão 07

O método addEventListener() é a forma mais moderna e flexível de ouvir eventos em um elemento.
Ele permite adicionar vários ouvintes para o mesmo evento sem sobrescrever os anteriores.

Ele recebe pelo menos dois parâmetros principais:
O nome do evento que queremos escutar (por exemplo: "click", "submit").
A função callback que será executada quando o evento acontecer.