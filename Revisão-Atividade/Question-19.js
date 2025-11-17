const somar1 = x => x + 1;
const dup = x => x * 2;

// Pipe: Primeiro soma (5+1=6), depois duplica (6*2=12)
const pipe = (fn1, fn2) => (val) => fn2(fn1(val));
console.log(pipe(somar1, dup)(5)); 

//Compose Executa funções da direita para esquerda: f(g(x)).
//Pipe Da esquerda para direita (fluxo natural de leitura): x -> g -> f.

