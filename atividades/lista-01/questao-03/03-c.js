function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return "Erro";
  }
  return n * fatorial(n - 1);
}

console.log("--- Teste da Questão 3-c (Fatorial) ---");
console.log(`Fatorial de 5 (5!) = ${fatorial(5)}`);
console.log(`Fatorial de 0 (0!) = ${fatorial(0)}`);
console.log(`Fatorial de 7 (7!) = ${fatorial(7)}`);
