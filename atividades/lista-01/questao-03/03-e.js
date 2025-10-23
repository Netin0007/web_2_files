function calcularTotal(valorUnitario, quantidade, desconto) {
  if (desconto === undefined) {
    desconto = 0;
  }

  const subtotal = valorUnitario * quantidade;
  const valorDoDesconto = subtotal * (desconto / 100);
  const totalFinal = subtotal - valorDoDesconto;

  return totalFinal;
}

console.log("--- Teste da Questão 3-e (E-commerce) ---");

let total1 = calcularTotal(50, 2, 10);
console.log(`Total (com 10% desc): R$ ${total1.toFixed(2)}`);

let total2 = calcularTotal(80, 3);
console.log(`Total (sem desconto): R$ ${total2.toFixed(2)}`);
