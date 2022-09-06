const cliente = {
    nome: 'Marcelo',
    idade: 25,
    cpf: '43534564643',
    email: 'marcelo@gmail.com',
    phones: ['(11) 99999-9999', '(11) 88888-8888']
}

cliente.dependentes = {
    nome: 'Pinguinzinho',
    parentesco: 'Filho',
    dataNascimento: '10/01/2019'
}

console.log(cliente);

cliente.dependentes.nome = 'Pinguinzinho Morcego Aranha Tropical Souza Oliveira';

console.log(cliente);