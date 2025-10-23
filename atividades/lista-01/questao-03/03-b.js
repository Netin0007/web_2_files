function produtorio(numeros) {
  let resultado = 1;
  for (let i = 0; i < numeros.length; i++) {
    resultado = resultado * numeros[i];
  }
  return resultado;
}

console.log("--- Teste da Questão 3-b (Produtório) ---");
console.log(`Produtório de [2, 3, 4] = ${produtorio([2, 3, 4])}`);
console.log(`Produtório de [5, 10, 2] = ${produtorio([5, 10, 2])}`);
console.log(`Produtório de [7] = ${produtorio([7])}`);
