const formFarmacia = document.getElementById("form-farmacia");
const resultadoFarmacia = document.getElementById("resultado-farmacia");

formFarmacia.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("medicamento").value;
    const preco = parseFloat(document.getElementById("preco-farmacia").value);
    
    if (!nome || isNaN(preco) || preco <= 0) {
        resultadoFarmacia.innerHTML = `<p class="erro">Por favor, preencha os campos corretamente.</p>`;
        return;
    }

    const totalDuasUnidades = preco * 2;
    const valorComDesconto = Math.floor(totalDuasUnidades);

    resultadoFarmacia.innerHTML = `
        <p class="sucesso">Promoção de ${nome}</p>
        <p class="sucesso">Leve 2 por apenas R$ ${valorComDesconto.toFixed(2)}</p>
    `;
});


const formLanhouse = document.getElementById("form-lanhouse");
const resultadoLanhouse = document.getElementById("resultado-lanhouse");

formLanhouse.addEventListener("submit", function(event) {
    event.preventDefault();

    const valor15Min = parseFloat(document.getElementById("valor-15min").value);
    const tempoUso = parseInt(document.getElementById("tempo-uso").value);

    if (isNaN(valor15Min) || isNaN(tempoUso) || valor15Min <= 0 || tempoUso <= 0) {
        resultadoLanhouse.innerHTML = `<p class="erro">Valores inválidos. Preencha corretamente.</p>`;
        return;
    }

    const numIntervalos = Math.ceil(tempoUso / 15);
    const valorTotal = numIntervalos * valor15Min;

    resultadoLanhouse.innerHTML = `<p class="sucesso">Valor a pagar: R$ ${valorTotal.toFixed(2)}</p>`;
});


const formSupermercado = document.getElementById("form-supermercado");
const resultadoSupermercado = document.getElementById("resultado-supermercado");

formSupermercado.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeProduto = document.getElementById("produto").value;
    const preco = parseFloat(document.getElementById("preco-supermercado").value);

    if (!nomeProduto || isNaN(preco) || preco <= 0) {
        resultadoSupermercado.innerHTML = `<p class="erro">Por favor, preencha os campos.</p>`;
        return;
    }

    const precoPromocional = preco / 2;
    const total = (preco * 2) + precoPromocional;

    resultadoSupermercado.innerHTML = `
        <p class="sucesso">Promoção: Leve 3 ${nomeProduto}</p>
        <p class="sucesso">2 por R$ ${preco.toFixed(2)} cada + 1 por R$ ${precoPromocional.toFixed(2)}</p>
        <p class="sucesso">Total: R$ ${total.toFixed(2)}</p>
    `;
});
