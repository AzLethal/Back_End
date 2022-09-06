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

class ClientePoupança extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const client1 = new ClientePoupança('Marcelo', '44444444444', 'marcelo@gmail.com', 100, 200);

console.log(client1);
client1.depositar(120);
client1.depositarPoup(200);
console.log(client1);