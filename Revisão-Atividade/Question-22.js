
const validarProduto = (p) => {
    const erros = [];
    if (!p.nome) erros.push("Nome vazio");
    if (p.preco <= 0) erros.push("Preço inválido");
    return { ok: erros.length === 0, erros };
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const resultado = validarProduto(produto);

    const ul = document.createElement('ul');
  
    form.classList.toggle('error', !resultado.ok);

    if(!resultado.ok) {
        resultado.erros.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    }
});

//A lógica de validação não sabe que existe HTML. Você pode testar validarProduto sem abrir o navegador.    