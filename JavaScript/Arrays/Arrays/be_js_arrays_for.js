const listaNumeros = [100, 200, 300, 400, 500, 600];

for(let i = 0; i < listaNumeros.length; i++) {
    console.log(i, listaNumeros[i]);
}

let indice = 0;
while(indice < listaNumeros.length) {
    console.log(`While no indice: ${indice}`);
    console.log(listaNumeros[indice]);
    indice++;
}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
    //Acrescenta o valor dos indices do array a cada loop;
}

let media = somaDasNotas / notas.length;
console.log(media);

//For com matrizes
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let mediaM = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    mediaM += notasGerais[i][j]/notasGerais[i].length;
  }
}
mediaM = mediaM/notasGerais.length
console.log(mediaM)