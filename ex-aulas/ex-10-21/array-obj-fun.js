const carrinho = [{
    nome: "Caneta",
    qtde: 10,
    preco: 7.99
},
{
    nome: "Faca",
    qtde: 2,
    preco: 5.99
},
]
console.log(carrinho);

function CalcularValorTotal(carrinho) {
    let total = 0;
    // tenta usar for of
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].qtde * carrinho[i].preco;
    
    }
    return total;
}

const valorTotal = CalcularValorTotal(carrinho);
console.log(valorTotal.toFixed(2));