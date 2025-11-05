function contador(){
    let count = 0;

    return function incrementar () {
        return count++;
    }
}

const contador = gerarContador();

console.log(contador());
console.log(contador());
console.log(contador());

function createTax(value, tax) {
    return function (value){
        return value * tax; 
    }
}

const taxIPTU = createTax (0.14);

createTax (2000, 0.1); 
