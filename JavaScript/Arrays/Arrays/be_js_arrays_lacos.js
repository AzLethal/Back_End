const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const medias = [10, 7, 9, 6];

let listaDeMediasEAlunos = [alunos, medias];

//includes --> faz a busca no array solicitado
//listaDeMediasEAlunos[0].includes(nomeDoAluno) --> busca o nomeDoAluno dentro da lista de indice 0 => alunos
const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeMediasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeMediasEAlunos[0].indexOf(nomeDoAluno); //indexOf --> retorna indice da lista
        return listaDeMediasEAlunos[0][indice] + ' sua média é ' + listaDeMediasEAlunos[1][indice];
    } else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota('Ana'));