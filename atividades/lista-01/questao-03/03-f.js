const contaBancaria = {
  saldo: 0.0,
  numeroConta: "001234-5",

  depositar: function (valor) {
    if (valor > 0) {
      this.saldo = this.saldo + valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  },

  sacar: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo = this.saldo - valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para este saque.");
    } else {
      console.log("Valor de saque inválido.");
    }
  },

  informarSaldo: function () {
    console.log(
      `O saldo atual da conta ${this.numeroConta} é R$ ${this.saldo.toFixed(2)}`
    );
  },
};

console.log("--- (Conta Bancária) ---");
contaBancaria.informarSaldo();
console.log("\nDepositando 100...");
contaBancaria.depositar(100);
contaBancaria.informarSaldo();
console.log("\nSacando 30...");
contaBancaria.sacar(30);
contaBancaria.informarSaldo();
console.log("\nTentando sacar 500 (deve falhar)...");
contaBancaria.sacar(500);
contaBancaria.informarSaldo();
