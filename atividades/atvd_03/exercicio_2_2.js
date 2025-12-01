const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

function verificarBateria(dispositivo) {
    return dispositivo.info?.bateria?.nivel ?? -1;
}

console.log(`Disp 1 (85): ${verificarBateria(dispositivo1)}`);
console.log(`Disp 2 (null): ${verificarBateria(dispositivo2)}`);
console.log(`Disp 3 (0): ${verificarBateria(dispositivo3)}`);