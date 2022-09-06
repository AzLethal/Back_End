const cliente = {
    nome: 'Marcelo',
    idade: 25,
    cpf: '43534564643',
    email: 'marcelo@gmail.com',
    phones: [ '(11) 99999-9999', '(11) 88888-8888' ],
    dependentes: [{
      nome: 'Hope Souza Oliveira',
      parentesco: 'Filha',
      dataNascimento: '14/04/2025'
    }]
  }

cliente.dependentes.push({ 
  nome: 'Pinguinzinho Aranha Morcego Tropical Souza Oliveira',
  parentesco: 'Filho',
  dataNascimento: '10/01/2019'
  })

console.log(cliente);

const filho = cliente.dependentes.filter(dependente => {
    if(dependente.dataNascimento === '10/01/2019'){
    return dependente;
    }
    return;
});

console.log(filho[0].nome);