
//Parametros passados entre () --> num1 e num2
function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}
//parametros estarão em ordem num1 = 2 e num2 = 3 no exemplo acima
console.log(soma(2, 3));

//parametros x argumentos;

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, minha idade é ${idade} anos`;
}

console.log(nomeIdade('Marcelo', 25));

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(2, 3), soma(4, 5)));