//Padrão de composição de funções PIPE
//uma saída de uma função serve como entrada para outra
//Usamos para criar um pipeline de execuções

const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);

const execution = pipe(
    console.log
);

execution(nums)


///ME PERDI NO RESTO DA EXPLICAÇÂO