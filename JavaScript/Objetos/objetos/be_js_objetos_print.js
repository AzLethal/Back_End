const cliente = {
    nome: 'Marcelo',
    idade: 25,
    cpf: '43534564643',
    email: 'marcelo@gmail.com'
}

console.log(`O nome do cliente é ${cliente.nome} e seu cpf e: ${cliente.cpf}, favor enviar dados completos no email: ${cliente.email}`);
console.log(cliente.cpf.substring(0, 3));