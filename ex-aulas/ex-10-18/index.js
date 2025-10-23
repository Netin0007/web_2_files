//Trabalhando com objetos literais em JS

const produto = {
    nome: 'Arroz Mariano',
    preco: 25.90,
    estoque: 20,
    id: "AM23",
    unidade: "kg",
    categoria: "Genero alimenticios",


    toString: function() { 
        return "Nome: " + this.nome + " \nPreço: " + this.preco;
    }


};

console.log(produto.toString());
