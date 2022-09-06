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


function oferecerSeguro(obj) {
  
  const propsClientes = Object.keys(obj);//Array com chaves
  if(propsClientes.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para: ${obj.nome}`);
  }
}
console.log(Object.values(cliente));//Array com valores
console.log(Object.entries(cliente));//Conjunto de Arrays do objeto Cliente, sendo chave e valores por array
oferecerSeguro(cliente);