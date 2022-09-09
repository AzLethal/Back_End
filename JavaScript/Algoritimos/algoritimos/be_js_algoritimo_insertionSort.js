const livros = require('./be_js_algoritimos_lista');
const troca = require('./be_js_troca');

function insertionSort(lista) {
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise -1].preco){
            troca(lista, analise)
            analise--;  
        }
    }
    console.log(lista);
}

insertionSort(livros);