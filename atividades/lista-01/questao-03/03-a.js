function calculadora(num1, num2, operacao) {
  if (operacao === "+") {
    return num1 + num2;
  } else if (operacao === "-") {
    return num1 - num2;
  } else if (operacao === "*") {
    return num1 * num2;
  } else if (operacao === "/") {
    if (num2 === 0) {
      return "Erro: Divisão por zero.";
    } else {
      return num1 / num2;
    }
  } else {
    return "Erro: Operação inválida.";
  }
}

console.log("--- Teste da Questão 3-a (Calculadora) ---");
console.log(`10 + 5 = ${calculadora(10, 5, "+")}`);
console.log(`10 - 5 = ${calculadora(10, 5, "-")}`);
console.log(`10 * 5 = ${calculadora(10, 5, "*")}`);
console.log(`10 / 5 = ${calculadora(10, 5, "/")}`);
console.log(`10 / 0 = ${calculadora(10, 0, "/")}`);
