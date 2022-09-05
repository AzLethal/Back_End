const cliente = {
    nome: 'Marcelo',
    idade: 25,
    cpf: '43534564643',
    email: 'marcelo@gmail.com'
}

console.log(cliente); 
//Cria o campo 'phone' no objeto cliente
cliente.phone = '(11) 99999-9999';

console.log(cliente);

//Substitui o valor de phone
cliente.phone = '(11) 88888-8888';

console.log(cliente);

//deleta o campo 'phone'
delete cliente.phone;

console.log(cliente);