const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const medias = [10, 7, 9, 6];

let listaDeMediasEAlunos = [alunos, medias];

console.log(listaDeMediasEAlunos[0][0], listaDeMediasEAlunos[1][0]);
/*
listaDeMediasEAlunos[][] --> 1 bloco do array alunos ou medias, 2 bloco refere-se ao conteudo do bloco escolhido

por exemplo:
listaDeMediasEAlunos[0][0] = listaDeMediasEAlunos[alunos]['João']
porque alunos entrou na posição 0 do array = let listaDeMediasEAlunos = [alunos, medias];

listaDeMediasEAlunos[1][0] = listaDeMediasEAlunos[medias]['10']
porque medias entrou na posição 1 do array = let listaDeMediasEAlunos = [alunos, medias];
*/
