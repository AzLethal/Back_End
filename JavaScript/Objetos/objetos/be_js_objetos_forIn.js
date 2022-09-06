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

let relatorio = '';
//for_in
for(let info in cliente) {
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue;
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `;
    }
}

console.log(relatorio);