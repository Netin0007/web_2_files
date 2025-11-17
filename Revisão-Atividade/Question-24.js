const filterVendasPagas = (lista) => lista.filter(v => v.status === 'pago');
const mapTotalItem = (lista) => lista.map(v => v.preco * v.quantidade);
const reduceTotalGeral = (listaTotais) => listaTotais.reduce((acc, val) => acc + val, 0);

const calcularReceita = (vendas) => {
    const pagas = filterVendasPagas(vendas);
    const totais = mapTotalItem(pagas);
    return reduceTotalGeral(totais);
};


document.getElementById('calcularReceitaTotal').addEventListener('click', () => {
    const total = calcularReceita(vendas);
    document.getElementById('totalGeral').textContent = `R$ ${total}`;
});

