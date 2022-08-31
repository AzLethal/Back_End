
//Declaração de função;
function minhaFuncao(num1, num2) {
    return num1 * num2
}

console.log(minhaFuncao(1, 3));

//Expressão de função, ou, função anonima
const soma = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 2));

// diferença principal ???? funções declaradas são hiçadas, as expressões não; 'Hoisting'
console.log(apresentar());

function apresentar() {
    return 'olá';
}
// console.log(apresenta()); --> ReferenceError: Cannot access 'apresenta' before initialization
const apresenta = function() {
    return 'olá olá'
}

console.log(apresenta());