/**
 * Exemplo que demonstra a precisão dos números de ponto flutuante em JavaScript
 * Data: 20/10/2025
 */

// IEE 754-2008
let a = 0.7;
let b = 0.1;

let c = a + b;

console.log(typeof c.toFixed(2)); // Utilizando toFixed para limitar a precisão a 2 casas decimais

c = Number(c.toFixed(2)); // Convertendo de volta para número
console.log(c);