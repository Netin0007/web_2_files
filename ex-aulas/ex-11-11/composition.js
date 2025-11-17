//filtrar categoria, aplicar desconto calcular total 

const produtos = [
  { nome: "Notebook", preco: 4500.00, quantidade: 10, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 120.00, quantidade: 50, categoria: "Acessórios" },
  { nome: "Teclado Mecânico", preco: 350.00, quantidade: 30, categoria: "Acessórios" },
  { nome: "Camiseta", preco: 80.00, quantidade: 100, categoria: "Vestuário" },
  { nome: "Cadeira Gamer", preco: 1500.00, quantidade: 15, categoria: "Móveis" },
  { nome: "Smartphone", preco: 3200.00, quantidade: 25, categoria: "Eletrônicos" },
  { nome: "Fone de Ouvido", preco: 250.00, quantidade: 40, categoria: "Acessórios" },
  { nome: "Livro", preco: 60.00, quantidade: 70, categoria: "Educação" }
];

const valorTotal = produtos
  .filter(p => p.categoria === "Eletrônicos") // filtra apenas produtos da categoria
  .map(p => {
    const newP = { ...p };
    newP.preco = newP.preco * 0.9; // aplica 10% de desconto
    return newP;
  })
  .reduce((acc, p) => acc + (p.preco * p.quantidade), 0); // soma total considerando a quantidade

console.log("Valor total com desconto:", valorTotal.toFixed(2));

