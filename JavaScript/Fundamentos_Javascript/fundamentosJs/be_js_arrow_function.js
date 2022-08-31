function apresentar(nome) {
    return `Olá meu nome é ${nome}!`;
}
//com apenas uma linha de código, não é necessário return
const apresentarArrow = nome => `Ola meu nome é ${nome}`;

//com apenas uma linha de código, não é necessário return
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow('Marcelo'));
console.log(soma(1, 2));

//Arrow function com + de 1 parâmetro;
const somaNumerosPequenos = (num1, num2) => {
    if(num1 >= num2) {
        return num1 + num2;
    } else {
        return num1 * num2;
    }
}

console.log(somaNumerosPequenos(4, 3));

