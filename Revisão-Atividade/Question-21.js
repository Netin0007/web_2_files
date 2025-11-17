function createCounter() {
    let count = 0; 
    return {
        increment: () => count++,
        getCount: () => count
    };
}
const contador = createCounter();
contador.increment();
console.log(contador.getCount());

//A função interna "lembra" das variáveis que existiam ao seu redor quando ela foi criada, mesmo se a função externa já tiver terminado de rodar.