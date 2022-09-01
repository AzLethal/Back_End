const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => {
    if(nota == 10) {
        return nota;
    } else {
        return ++nota;
    }
});

// map --> 

console.log(notasAtualizadas);