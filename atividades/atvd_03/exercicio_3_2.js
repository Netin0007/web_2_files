class ContaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(500);
console.log("Saldo:", conta.consultarSaldo());