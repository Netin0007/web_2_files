const aplicarTaxa = (taxa) => (valor) => valor + (valor * taxa);

const aplicarICMS = aplicarTaxa(0.18);
const aplicarIPI = aplicarTaxa(0.05);

console.log(aplicarICMS(100));

//Currying usa closures para lembrar do argumento taxa mesmo depois que a primeira função já retornou