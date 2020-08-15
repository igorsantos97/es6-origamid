// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var exp1 = 'Texto' / 2; // ou " 'Teste' - 2 = Nan "
var exp2 = +'Texto 2' + 1;

// Somar a string '200' com o número 50 e retornar 250
var string = '200';
var num = 50;

console.log(+string + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var num5 = 5;
num5++;

console.log(num5);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2 + unidade; // NaN (Not a Number) -> 40kg

// ou 
// var numero = +'80' / 2;
// var unidade = 'kg';
// var pesoPorDois = numero + unidade;

console.log(pesoPorDois);