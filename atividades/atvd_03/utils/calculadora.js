export function calcularMedia(array) {
    if (array.length === 0) return 0;
    const soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.length;
}

export const VALOR_PI = 3.14159;