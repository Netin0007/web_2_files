function filtraImpares(arrayDeNumeros) {
  let arraySoDeImpares = [];

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    const numeroAtual = arrayDeNumeros[i];

    if (numeroAtual % 2 !== 0) {
      arraySoDeImpares.push(numeroAtual);
    }
  }

  return arraySoDeImpares;
}

console.log("--- Teste da Questão 3-d (Filtra Ímpares) ---");
const numerosLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = filtraImpares(numerosLista);
console.log(`Originais: [${numerosLista}]`);
console.log(`Filtrados (só ímpares): [${impares}]`);
