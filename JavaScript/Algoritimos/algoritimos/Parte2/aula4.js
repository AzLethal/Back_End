const listaLivros = require('./array2');
const trocaLugar = require('./aula3_1');

function quickSort(array, esquerda, direita) {
    
    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual -1);
        }
        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    
    return array;
}

function particiona(array, esquerda, direita) {
    console.log("Array:", array);
    console.log(`
    Esquerda: ${esquerda}
    Direita: ${direita}
    `);
    let pivo = array[Math.floor((esquerda + direita) /2)];
    let atualEsq = esquerda;
    let atualDir = direita;

    while(atualEsq <= atualDir){
        while(array[atualEsq].preco < pivo.preco) {
            atualEsq++;
        }
        while(array[atualDir].preco > pivo.preco) {
            atualDir--;
        }
        if(atualEsq <= atualDir) {
            trocaLugar(array, atualEsq, atualDir);
            atualEsq++;
            atualDir--;
        }
    }
    return atualEsq;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));