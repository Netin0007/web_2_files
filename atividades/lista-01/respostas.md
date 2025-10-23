Lista 01 - Respostas Teoricas

1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript:

a) O que é uma linguagem de tipagem estática? E como funciona a verificação de tipos nela?

É quando você tem que dizer o tipo das variáveis antes de usar — tipo “essa variável vai guardar um número e só”. Então o compilador já sabe o que esperar e não deixa você fazer maluquice depois.
E o mais importante: ele checa isso tudo antes de rodar o programa. Se tiver algo estranho com os tipos, já dá erro na hora da compilação, e nem deixa o programa seguir.

b) Quais os ganhos da tipagem estática em performance e segurança?

Performance: O código roda mais rápido porque o computador já sabe tudo de antemão — não precisa ficar descobrindo os tipos na hora que roda.
Segurança: Ajuda a evitar erro besta. Se você fizer uma mistura doida de tipos, o compilador te avisa antes de rodar. Em projetos grandes, isso salva vidas, porque qualquer mudança errada já aparece na hora.

c) Como funciona a tipagem dinâmica? E quais os problemas de performance disso?

Tipagem dinâmica é tipo: “relaxa, coloca o que quiser na variável”. Hoje ela é um número, amanhã pode ser um texto. Isso é bem flexível, mas tem um custo.
O “chefe” (interpretador) só descobre o que está acontecendo enquanto o programa roda. Isso significa que ele tá sempre verificando tipos em tempo real, o que deixa tudo mais lento.

d) Diferença entre tipagem forte e fraca?

Tipagem forte: É rígida. Tentou somar número com texto? Vai dar erro. Ela quer que você seja claro e explícito sobre o que está fazendo.

Tipagem fraca: É mais “relaxa que eu resolvo”. Ela tenta converter tudo por conta própria. Às vezes funciona, às vezes dá uns bugs cabulosos.

e) Como linguagens híbridas misturam os dois estilos? E o que é inferência de tipos?

Linguagens híbridas (como TypeScript) te dão o melhor dos dois mundos: você pode ser mais rígido quando quiser, ou mais solto quando precisar.

Já a inferência de tipos é o compilador sendo esperto. Se você escrever let idade = 30, ele já entende que é um número, mesmo sem você dizer. A partir daí, trata como se fosse uma variável com tipo fixo.

f) Como o JavaScript trata os tipos?

JavaScript é bagunça organizada.

Dinâmico: Variável pode mudar de tipo quando quiser. Literalmente.

Fraco: Ele vive tentando adivinhar o que você quis fazer. Então coisas como 10 == "10" dão true, porque ele converte a string em número por conta própria.