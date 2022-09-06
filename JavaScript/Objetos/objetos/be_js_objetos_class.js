class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    exibeSaldo() {
        this.saldo;
    }
}

const marcelo = new Cliente('Marcelo', '44444444444', 'marcelo@gmail.com', 0);

console.log(marcelo);
marcelo.depositar(100);
console.log(marcelo);
