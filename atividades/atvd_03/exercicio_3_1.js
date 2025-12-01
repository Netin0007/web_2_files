class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    exibirInfo() {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}`);
    }
}

class Administrador extends Usuario {
    constructor(nome, email, nivelAcesso) {
        super(nome, email);
        this.nivelAcesso = nivelAcesso;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Nível de Acesso: ${this.nivelAcesso}`);
    }
}

const u = new Usuario("Ana", "ana@teste.com");
const a = new Administrador("Carlos", "carlos@teste.com", "Admin");

u.exibirInfo();
a.exibirInfo();