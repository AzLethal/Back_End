const livros = require('./be_js_algoritimos_lista');

let maisBarato = 0;//posição 0

for(let atual = 0; atual < livros.length; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(maisBarato);
console.log(`O livro mais barato custa: R$ ${livros[maisBarato].preco},00, E seu titulo é: ${livros[maisBarato].titulo}`);