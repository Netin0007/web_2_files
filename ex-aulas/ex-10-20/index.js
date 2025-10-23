/**
 * Aula sobre imutabilidade em JavaScript
 * Data: 20/10/2025
 */

// Valores Primitivos
let nome = 'Maria';
a = "Marcos"; //Não altera o valor inicial, simplimente atriui um novo valor à variável.
a[2] = "l"; // Não altera o valor da string.

console.log(a); 

let b = a; // gera uma cópia do valor de 'a' em 'b'
console.log('valor de a:', + a, " valor de b:", + b);

b = "vitor"; 
console.log('valor de a:', + a, " valor de b:", + b);

// Valores por referência
const c = [1, 2, 3];
const d = c; 
console.log(c,d);

// Alterando o valor do array 'c'
c.push(4);

d [ 0 ] = 0;
console.log(c,d); 