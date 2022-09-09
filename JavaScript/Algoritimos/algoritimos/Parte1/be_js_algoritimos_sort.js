const livros = require('./be_js_algoritimos_lista');
const menorValor = require('./be_js_algoritimos_menorValor');

/* SELECTION SORT
método com for.
for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    console.log(livros[atual]);
    livros[menor] = livroAtual;
    console.log(livros[menor]);

    // console.log(livros);
}

*/
//método com forEach
livros.forEach((_livro, indice) => {
 let menor = menorValor(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})

console.log(livros);