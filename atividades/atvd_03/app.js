import { calcularMedia, VALOR_PI } from './utils/calculadora.js';
import buscarDados from './services/dados.js';

async function main() {
    console.log(`Usando PI do módulo: ${VALOR_PI}`);
    
    console.log("Buscando dados...");
    const numeros = await buscarDados();
    
    const media = calcularMedia(numeros);
    console.log(`A média dos dados [${numeros}] é: ${media}`);
}

main();