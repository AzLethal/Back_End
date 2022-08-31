//medias 10, 6.5, 8, 7.5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let note4 = 7.5;

// let media = (nota1 + nota2 + nota3 + note4)/4;

const notas = [10, 6.5, 8, 7.5];

//let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
let media = 0;

for(let i = 0; i < notas.length; i++) {
    media += notas[i];
}

console.log(media / notas.length);