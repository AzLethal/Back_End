const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// parametro entre parenteses significa --> cada nota dentro de notas  (array)
//forEach ==> CallBack
notas.forEach((nota) => {
    somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(media);