const PESO_N1 = 2;
const PESO_N2 = 3;
const NOTA_MINIMA = 7;

const n1 = parseFloat(prompt("Digite a nota da N1 (peso 2):"));
const n2 = parseFloat(prompt("Digite a nota da N2 (peso 3):"));

const media = (n1 * PESO_N1 + n2 * PESO_N2) / (PESO_N1 + PESO_N2);

let status;
if (media >= NOTA_MINIMA) {
  status = "Aprovado";
} else {
  status = "Reprovado";
}

alert("Sua nota final é: " + media.toFixed(2) + "\nStatus: " + status);