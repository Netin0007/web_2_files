## Parte 1. Fundamentos de JavaScript

**1) Sobre escopo de código e hoisting, considere o código:**
```js
console.log(multiplica(2,3));
function multiplica(x, y) { return x * y; }

const sub = function (a,b) { return a - b; }
console.log(sub(5,2));
```
Marque a opção correta:  
a) Ambas as funções podem ser chamadas antes da definição graças ao *hoisting*. 
--------------------------------------------------------------------------------------------- 
b) Apenas `multiplica` pode ser chamada antes da definição; `sub` não. (CORRETA)
Explicação -> Function Declaration (multiplica): O JavaScript "iça" (faz o hoisting) da função inteira para o topo do escopo. Você pode chamar antes de declarar.

Function Expression (sub): O JavaScript iça apenas a declaração da variável const sub, mas não a atribuição da função. Se chamar antes, a variável sub estará na "Zona Morta Temporal" (se for let/const) ou undefined (se for var), gerando erro.
----------------------------------------------------------------------------
c) Nenhuma pode ser chamada antes da definição em JS moderno.  
d) `multiplica` lança erro em tempo de execução; `sub` funciona.  
*Dica:* diferença entre **Function Declaration** e **Function Expression**.

**2) Sobre _arrow function_ e operador `this`, julgue a afirmação a seguir:**  
“Arrow functions possuem seu próprio `this` e podem ser usadas como construtoras com `new`.” Explique e corrija se necessário.

--------------------------------------------------------------------
Resposta -> A afirmação é falsa, arrow functions não possuem seu proprio this(Elas herdam o this do escopo onde foram criadas) e não podem ser usadas como construtoras. Se for feito vai acabar gerando um erro.

---------------------------------------------------------------------
**3) Sobre parâmetros `default` x `null`, no trecho:**
```js
function calculaImposto(valor, taxa = 0.1) {
  return valor * taxa;
}
console.log(calculaImposto(100, undefined));
console.log(calculaImposto(100, null));
```
Explique por que as saídas diferem e discuta a diferença entre valores *falsy*, `null` e `undefined`.
-------------------------------------------------------------------------------------------------------
Resposta -> CalucalaImposto(100,undefined) o js entende undefined como ausencia de valor. O parâmetro default assume, então taxa vira 0.1. Resultado 10 
Já console.log(calculaImposto(100, null) null é um valor válido (signifca "nulo intencionalmente"). O js usa null na conta é fica 100 * null vira 0.
Falsy vs Null/Undefined -> null e undefined são falsy (avaliam como falso em booleanos), mas apenas undefined ativa o parametro padrão.
-------------------------------------------------------------------------------------------------------
**4) Sobre IIFE e isolamento:**  
a) Mostre como uma **IIFE** evita poluir o escopo global.
-------------------------------------------------------------------------
Resposta -> ao envolver o código em uma função que se executa imediatamente, as variáveis criadas dentro dela morrem ali dentro, não vazando para o escopo global.
---------------------------------------------------------------------------
b) Transforme o exemplo abaixo em IIFE e explique por que `privateVariable` não é acessível fora:
```js
let privateVariable = "x";
console.log(privateVariable);
```
----------------------------------------------------------------------------------------------
Resposta em Question-4.js
----------------------------------------------------------------------------------------------
**5) Sobre avaliação de curto-circuito e renderização condicional:**  
Implemente uma função `getUserNameOrLoginCTA(user)` que retorna `user.name` se existir; caso contrário, retorna `"<a href='/login'>Entrar</a>"`, utilizando `||`. Mostre um exemplo com valor *falsy*. Por fim, explique o comportamento e a diferença entre `&&` e `||` com *short-circuiting*.
---------------------------------------------------------------------------------------
codigo na question-5.js

explicação ->Diferença && vs ||:

|| (OU): Retorna o primeiro valor verdadeiro que encontrar. Usado para valores padrão.

&& (E): Retorna o primeiro valor falso ou o último verdadeiro. Usado para executar algo só se a condição anterior for verdadeira (ex: user && user.name).

--------------------------------------------------------------------------------------------------------------------------------

**6) `var`, `let`, `const` e referência constante (discursiva curta)**  
Explique por que `const` não “congela” um array/objeto e mostre um exemplo seguro de atualização imutável de um array ou objeto.
--------------------------------------------------------------------------------------------
Resposta -> const não congela um array/objeto porque ele apenas impede a reatribuição da variável, não a modificação do valor interno ao qual ela aponta. Como arrays e objetos são valores de referência, a variável criada com const continua apontando para a mesma referência na memória, permitindo alterações internas.
Ex:
const user = { name: "Ana" };
user.name = "Maria";     // permitido
// user = {}             // NÃO permitido (reatribuição)
------------------------------------------------------------------------------------------------------
**7) Sobre estruturas de repetição:**   
Qual a estrutura de laço de repetição, entre os listados abaixo, mais adequada para percorrer um objeto iterável, como um array?    
a) `for...in` (ERRADA)
------------------------------------------------
percorre chaves (inclusive herdadas), sendo mais adequado para objetos, não arrays.
------------------------------------------------
b) `for...of` (Correta)
-------------------------------------------------------------------------------
percorre valores de iteráveis (arrays, strings, Maps, Sets etc.) de forma simples e segura.
-------------------------------------------------------------------------------
c) `while`  (ERRADA)
d) `for`  (ERRADA)

---

## Parte 2. DOM e Eventos

**8) Sobre seletores do DOM, marque a alternativa correta:**  
a) `querySelectorAll` retorna o primeiro elemento que casa com o seletor CSS.  
b) `querySelector` retorna uma *NodeList* com todos os elementos.  
c) `querySelector` retorna o **primeiro** elemento; `querySelectorAll` retorna **todos** os elementos que casam.(Correta)
d) `getElementsByTagName` recebe um seletor CSS complexo. (Errada, apenas retorna nome de tags)

**9) Sobre o atributo `classList` e o estilo camelCase, julgue o item a seguir:**  
“Para aplicar `background-color` via DOM usamos `element.style['background-color'] = 'red'`; não há convenção camelCase nesse caso.” Justifique e corrija, caso necessário.
--------------------------------------------------------------------------------------
Resposta -> está e não está correto embore funcione não é o uso correto 
Forma correta -> element.style.backgroundColor = 'red'; (Uso obrigatorio de camelCase)
------------------------------------------------------------------------------------
**10) Sobre manipulação de DOM:**  
Complete as lacunas com os métodos corretos e escreva um código mínimo que: cria um `<li>`, adiciona texto e insere no final de uma `<ul id="lista">`:  
------------------------------------------------------------------------------
Resposta:
- Criar: `document.createElement('li')`  
- Inserir dentro de um elemento já selecionado: `element.appendChild(child)`  
- Remover um nó filho: `parent.removeChild(child)`

-------------------------------------------------------------------------------
**11) Qual opção associa corretamente um *listener* de clique a um botão?**   
a) `button.on("clique", minhaFuncao)`  
b) `button.click(minhaFuncao)`  
c) `button.addEventListener("click", minhaFuncao)` (Correta)                     
d) `button.listen("click", minhaFuncao)`

**12) Sobre _callback_ de evento:**  
Explique as etapas de manipulação de eventos (seleção → binding → callback) e escreva um trecho de código que: seleciona `#formLogin`, previne o submit, valida que o campo `#email` não está vazio e adiciona/remove classe `error` a algum elemento da página.
----------------------------------------------------
Resposta em Question-12.js
----------------------------------------------------
---

## Parte 3. Programação Funcional em JavaScript

**13) Sobre funções puras:**  
“Funções puras podem ler e alterar variáveis globais desde que retornem sempre o mesmo valor.” Avalie e justifique com um contraexemplo.
-------------------------------------------------------------------------------
Resposta -> A frase é falsa, uma função pura não pode depender de variaveis globais e nem causar efeitos. ela deve apenas depender de seu proprio argumento.
--------------------------------------------------------------------------------

**14) Sobre o conceito de imutabilidade:**  
Explique por que `push` em um array recebido por parâmetro pode introduzir efeitos colaterais. Reescreva `adicionarItemImpuro(arr, item)` de forma imutável usando *spread*.
-------------------------------------------------------------------------------------------------------------------------
Resposta -> Pode alterar o arry original na memoria. Se esse array for usado em outro lugar do app vai quebrar lá também
Reescrito ->
const adicionarItemImutavel = (arr, item) => [...arr, item];
------------------------------------------------------------------------------------------------------------------------

**15) Sobre First-class e Higher-order Functions:**  
Assinale a correta sobre *funções anônimas* e *higher-order*:  
a) Funções anônimas não podem ser passadas como argumento.  x
b) Higher-order é toda função que retorna outra função ou recebe função como argumento.(Correta)
c) JS não trata funções como valores de primeira classe.  x
d) Callbacks não são funções. x

**16) Sobre métodos de iteração em arrays:**
Explique como funcionam os métodos de iteração em arrays em JavaScript: `forEach()`, `map()`, `filter()` e `reduce()`.
-------------------------------------------------------------------------------------------------------------------------
Resposta ->
forEach -> Executa uma função para cada item e não retorna nada.
map() -> Transforma cada item e retorna em um novo array do mesmo tamanho
filter() -> Seleciona intes baseados em uma condição e retorna um novo array 
reduce() -> reduz o arry a unico valor como objeto,soma....
-------------------------------------------------------------------------------------------------------------------------

**17) Sobre os métodos `map / filter / reduce`, dado o seguinte código:**  
```js
const pedidos = [
  { cliente: "A", total: 100 },
  { cliente: "B", total: 200 },
  { cliente: "A", total: 50  },
  { cliente: "C", total: 350 }
];
```
a) Use **`map`** para obter apenas os totais.  
-------------------------------------------------------------------------------------------------------------------------
Respostas -> pedidos.map (p => p.total)
-------------------------------------------------------------------------------------------------------------
b) Use **`filter`** para pedidos ≥ 200.  
-----------------------------------------------------------------------------------------------------------------
resposta -> pedidos.filter(p => p.total >= 200)
-------------------------------------------------------------------------------------------------------------------------
c) Use **`reduce`** para somar todos os totais.  
--------------------------------------------------------------------------------------------------------------
resposta -> pedidos.reduce((acc, p) => acc + p.total, 0)
----------------------------------------------------------------------------------------------------
Explique por que o array original não é modificado.
resposta -> Porque os metodos usados criam e retornam novas copias dos dados, preservando a integridade dos dados originais(imutabilidade).

**18) Currying e aplicação parcial (complete e comente)**  
Implemente `aplicarTaxa(t)` que retorna uma função `f(valor)` somando a taxa; mostre `aplicarICMS` e `aplicarIPI`. Comente a relação entre *currying* e *closures*.

**19) Compose vs. Pipe (discursiva curta + código)**  
a) Explique *composition* (da direita para a esquerda) e *pipe* (da esquerda para a direita).  
b) Dadas `const somar1 = x => x+1` e `const dup = x => x*2`, escreva `compose` e `pipe` que resultem em `12` a partir de `5`.

**20) Sobre Lazy evaluation:**  
Explique o conceito de *lazy evaluation* e comente sobre como essa técnica é empregada, bem como qual a sua vantagem, com base no trecho de código a seguir:
----------------------------------------------------------------------------------------------------------------------------------Resposta -> a avaliação é adiada até que o valor seja realmente necessario.
No codigo ->  O map não rodou em todo o array values. Ele criou um objeto que sabe como calcular. O cálculo value * (1 - 0.1) só aconteceu para o índice 0 quando demos get(0). já a vantagem performance absurda em listas gigantes, pois você não processa dados que não vai usar.
----------------------------------------------------------------------------------------------------------------------------------
```js
function lazyMap(arr, fn){
  return { get: i => fn(arr[i]), size: () => arr.length };
}

// Exemplo de utilização
const values = [129.9, 99.5, 24.69, 54.65];

const valuesWithDiscount = lazyMap(values, (value) => value * (1 - 0.1));

console.log(valuesWithDiscount.get(0));
```

**21) Sobre Closures:**  
Dado um contador que vaza estado global, reescreva-o com **closure** garantindo “estado privado” entre chamadas. Explique a frase “o ambiente léxico é lembrado”, no contexto de **closure functions**.

Código antes da refatoração:

```js
// Estado global exposto (vaza para todo o app)
let count = 0;

function increment() {
  count++; // muta o estado global
}

function getCount() {
    return count; // lê estado global
}
```

---

## Parte 4. Integração JS + DOM + FP

**22) Validação funcional com DOM**  
Implemente uma função pura `validarProduto(p)` que retorna `{ok, erros}`. No submit de um formulário, **sem** mutar o objeto `p`, crie uma nova estrutura de exibição de erros com `document.createElement` e insira com `appendChild`. Use `classList.toggle('error', !ok)`. Explique por que isso reduz *acoplamento*.

- O objeto `p` tem a forma:
```js
{
  nome: string,
  preco: number,
  categoria: string
}
```

- A validação deve checar:
  - `nome` não vazio
  - `preco` maior que zero
  - `categoria` não vazia

- O retorno da função `validarProduto` deve ser algo como:
```js
{
  ok: false,
  erros: [
    "Nome não pode ser vazio",
    "Preço deve ser maior que zero"
  ]
}
```

- A estrutura de exibição de erros no DOM deve ser uma lista `<ul>` com `<li>` para cada erro, exibida abaixo do formulário.

- Use conceitos de programação funcional para manter o código limpo e modular, com o mínimo de efeitos colaterais possível.

**23) Lista dinâmica com delegação de evento (_event delegation_)**  
Crie uma mini “Lista de Filmes Favoritos”:
- Campo de texto + botão “Adicionar” com `addEventListener('click', ...)`.
- Ao adicionar, crie `<li>` com botão “remover” que usa *event delegation* no `<ul>`.
  - O nome do filme vem do campo de texto e deve ser armazenado em um array.
  - O clique no botão “remover” deve apagar o `<li>` correspondente.
  - Atualize o array de filmes removendo o item correspondente.
  - Implemente uma função `addDelegatedEventListener(parent, type, selector, handler)` para facilitar a delegação de eventos, onde:
    - `parent` é o elemento pai que escuta o evento.
    - `type` é o tipo de evento (ex: 'click').
    - `selector` é o seletor CSS para filtrar os elementos filhos.
    - `handler` é a função que será chamada quando o evento ocorrer no elemento filho que casar com o seletor.
- Crie um campo de filtro que, ao digitar, esconde os `<li>` que não casam com o texto (use o método `includes`), utilizando o método `filter()` sobre o array de filmes.
- Explique como a delegação de eventos melhora a performance e reduz o acoplamento.
----------------------------------------------------------------------------------------------------------------------------------
O Pulo do Gato: Em vez de botar um listener em CADA botão de remover (o que pesaria a memória se tivessem 1000 filmes), botamos UM listener na lista <ul>. Se o clique for num botão dentro dela, a gente trata.

Vantagem: Menos listeners na memória, e funciona automaticamente para elementos criados dinamicamente no futuro.
----------------------------------------------------------------------------------------------------------------------------------

**24) Transformação funcional de dados no DOM**

- Crie um conjunto de funções puras e utilize `map`, `filter` e `reduce` para processar a seguinte lista de vendas:   

```javascript
const vendas = [
  { produto: "Notebook", preco: 3500, quantidade: 1, status: "pago" },
  { produto: "Mouse", preco: 50, quantidade: 3, status: "pendente" },
  { produto: "Teclado", preco: 150, quantidade: 2, status: "pago" },
  { produto: "Monitor", preco: 1200, quantidade: 1, status: "pago" },
  { produto: "Webcam", preco: 80, quantidade: 5, status: "pendente" },
];
```

> 🚨 Use Composição de Funções com `compose` ou `pipe`.

- Crie uma página HTML com: a lista de vendas, um botão “Calcular Receita Total” e um elemento `<div id="totalGeral"></div>` para exibir o resultado.

- **Tarefas:**

    1 - **`filterVendasPagas(vendas)`:** Filtre apenas as vendas com `status: 'pago'`.    
    2 - **`mapTotalItem(vendasPagas)`:** Calcule o total de cada item (`preco * quantidade`) e retorne um novo array com esses totais.    
    3 - **`reduceTotalGeral(totais)`:** Calcule a soma total de todas as vendas pagas.    
    4 - **`exibirTotalGeral(totalGeral)`:** Atualize o DOM para exibir o total geral em um elemento com id `totalGeral`.

> 🚨 Esse fluxo de tarefas deve ocorrer quando o usuário clicar em um botão com id `calcularReceitaTotal`.   

---

## Parte 5. Questões Adaptadas de Concursos

**25) Subprogramas e propriedades**  
Analise afirmações clássicas sobre subprogramas/funções (ponto único de entrada, passagem de parâmetros, etc.) e marque a alternativa correta.    
a) Subprogramas não podem retornar múltiplos valores.  
b) Subprogramas aumentam o acoplamento do código.   
c) Subprogramas facilitam a reutilização e manutenção do código.  (Correto)  
d) Subprogramas não podem ser aninhados em JS.    

**26) Sobre paradigmas imperativo vs. funcional:**  
Compare “dizer *como fazer*” (imperativo) vs. “dizer *o que fazer*” (declarativo/funcional) usando o problema do fatorial como fio condutor. Em seguida, proponha um critério para **quando** preferir `reduce` a `for`.
----------------------------------------------------------------------------------------------------------------------------------
Respostas -> 
Imperativo (Como): "Crie uma variável i, inicie em 0, enquanto for menor que X, incremente, multiplique o acumulador..." (Foco no controle de fluxo).

Declarativo (O quê): "Pegue a lista de 1 a X e reduza multiplicando todos". (Foco no resultado).

Critério: Prefira reduce/map quando quiser transformar dados. Prefira for se precisar de máxima performance crítica (jogos, drivers) ou se precisar interromper o laço (break) no meio, o que o reduce não faz nativamente.
----------------------------------------------------------------------------------------------------------------------------------

**27) PROGEPE-UFRPE - 2022 - Técnico (UFRPE)/Tecnologia da Informação/Desenvolvimento de Sistemas**   
Sobre a linguagem de programação JavaScript, assinale a **afirmativa correta**.   

a) É uma linguagem utilizada exclusivamente no lado do cliente (client-side) para manipular páginas web.   
b) É uma linguagem fortemente tipada, o que significa que todas as variáveis precisam ser declaradas com um tipo.   
c) Suporta programação orientada a objetos, funcional e imperativa, permitindo múltiplos paradigmas.  (Correta)  
d) Assim como em Java, programas escritos em JavaScript só são executados em computadores que tenham a máquina virtual JSVM, instalada e em execução.   

**28) FGV - 2024 - Analista Judiciário (TJ AP)/Apoio Especializado/Tecnologia da Informação Banco de Dados**    
No contexto do JavaScript, analise o quadro a seguir sob a ótica das diferenças sintáticas utilizadas nas declarações de variáveis, e as respectivas possibilidades de redeclarar e/ou alterar o valor de uma variável ao longo do código.    

| Tipo de declaração | Possibilidade de redeclaração | Possibilidade de alteração do valor |
|--------------------|-------------------------------|-------------------------------------|
| ?                  | Sim                           | Sim                                 |
| ?                  | Não                           | Sim                                 |
| ?                  | Não                           | Não                                 |

De cima para baixo, a ordem de preenchimento da primeira coluna, de acordo com as possibilidades de cada tipo de declaração, é:   

a) `var`, `let`, `const` (Correta)   
b) `let`, `var`, `const`    
c) `const`, `let`, `var`     
d) `var`, `const`, `let`  

**29) Instituto Verbena - 2024 - Engenheiro (Pref Rio Branco)/Software**  
Elixir é uma linguagem de programação funcional de propósito geral criada pelo brasileiro José Valim. Elixir executa na máquina virtual Erlang e permite a criação de aplicações distribuídas e tolerantes a falhas. No que tange ao paradigma funcional, algumas características são específicas das linguagens que implementam este paradigma, tais como:   

a) variáveis definidas fora da função têm valor imutável fora daquele escopo.   
b) atributos são encapsuláveis via modificadores definidos nas classes.   
c) é desejado que funções possam alterar o estado de variáveis globais.    
d) dão suporte a funções de ordem superior e funções de primeira classe. (Correta)

**30)	IMPARH - 2025 - Auditor de Controle Interno (CGM Fortaleza)/Tecnologia da Informação/Área 2**

Sobre conceitos relacionados ao JavaScript, analise as afirmações abaixo e marque a opção que indica a quantidade correta de afirmações verdadeiras e falsas.   

I. JavaScript suporta orientação a objetos, permitindo a criação de classes, herança, encapsulamento e polimorfismo.    
II. JavaScript suporta programação funcional, incluindo o uso de funções de alta ordem como map, filter e reduce.   
III. Em JavaScript, todas as variáveis declaradas dentro de uma função são automaticamente globais e podem ser acessadas em qualquer parte do código.   
IV. O uso de ponto e vírgula (;) ao final de cada linha é obrigatório em JavaScript para indicar o final de uma instrução.    

a) 2 verdadeiras e 2 falsas. (Correta)   
b) 3 verdadeiras e 1 falsa.   
c) 4 verdadeiras e 0 falsas.    
d) 1 verdadeira e 3 falsas. 

---