const clientes = [{
    nome: 'Marcelo',
    cpf: '43534564643',
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
    ]
}, {
    nome: 'Ferzi',
    cpf: '43634663683',
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
    ]
}]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
console.table(listaDependentes);