function sum(a,b){
    //Tradicional
    return a + b
}

//Function expressiomn
//função anônima
//functions expression não são elevadas ao topo do escopo (hoisting)
const sumFe = function(a, b){
    return a + b;
}

//Arrow Function
const sumArrow = (a, b ) => a + b;

const dobro = a => a * 2;

setTimeout(() => console.log (Date.now()),1500)
setInterval(() => console.log("Executando..."), 2500)
