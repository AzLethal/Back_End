let texto = '';
console.log(texto);
texto = 'Oi';

//Declaração da função
function imprimiTexto(texto) {
    console.log(texto);
};

//Execução da função, "chamamos" ela da forma abaixo;
imprimiTexto(texto);

//três formas de escrever funções.... **Arrow Function**, **Função Anonima**, **Função Declarada**

function soma() {
    const resultado = 2 * 2;
    return resultado;
    //retornar o resultado
}

console.log(soma());