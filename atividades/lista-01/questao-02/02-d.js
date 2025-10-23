function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let soma = 0;
const quantidade = parseInt(prompt("Quantos números você quer analisar?"));

for (let i = 1; i <= quantidade; i++) {
  const numero = parseInt(prompt("Digite o " + i + "º número:"));
  if (ehPrimo(numero)) {
    soma += numero;
  }
}

alert("A soma dos números primos digitados é: " + soma);
