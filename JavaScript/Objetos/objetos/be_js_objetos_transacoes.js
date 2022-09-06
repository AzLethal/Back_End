const cliente = {
    nome: 'Marcelo',
    idade: 25,
    cpf: '43534564643',
    email: 'marcelo@gmail.com',
    phones: [ '(11) 99999-9999', '(11) 88888-8888' ],
    dependentes: [
      {
        nome: 'Hope Souza Oliveira',
        parentesco: 'Filha',
        dataNascimento: '14/04/2025'
      },
      {
        nome: 'Pinguinzinho Aranha Morcego Tropical Souza Oliveira',
        parentesco: 'Filho',
        dataNascimento: '10/01/2019'
      }
    ],
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    }
}

console.log(`Saldo Atual: R$ ${cliente.saldo},00`);
cliente.depositar(1000);
console.log(`Saldo Atual: R$ ${cliente.saldo},00`);






