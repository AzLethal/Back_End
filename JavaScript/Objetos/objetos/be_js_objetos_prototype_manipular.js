function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

function ClientePoupança(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupança("Ju", "55555555555", "ju@gmail.com", 100, 200);

console.log(ju);

ClientePoupança.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

ju.depositarPoup(20);

console.log(ju);