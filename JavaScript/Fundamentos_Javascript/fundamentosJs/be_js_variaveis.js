// var

var altura = 5;
var comprimento = 7;
var area; //var pode ser declarada depois, pois é lida antes do código rodar, porém, boas práticas declarar antes!

area = altura * comprimento;
console.log(area);

let forma = 'triangulo';
let alturaLet = 6;
let comprimentoLet = 10;
let area2; //let precisa ser declarada antes de ser utilizada

if(forma === 'retangulo') {
    area2 = alturaLet * comprimentoLet;
} else {
    area2 = (alturaLet * comprimentoLet)/2;
}

console.log(area2);

const formaConst = 'triangulo';
const alturaConst = 4;
const comprimentoConst = 8;
let area3;

if(forma === 'triangulo') {
    area3 = (alturaConst * comprimentoConst)/2;
} else {
    area3 = alturaConst * comprimentoConst;
}

console.log(area3);

