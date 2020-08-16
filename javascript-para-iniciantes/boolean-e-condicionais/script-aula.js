var possuiGraducao = false;
var possuiDoutorado = true;

if(possuiGraducao) {
    console.log('É verdadeiro');
    var x = 10;
} else if(possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada')
}

var nome = '10kg' + 10;

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if(!possuiGraducao) {
    console.log('Não possui Graduação');
}


// Operadores de comparação
var x = 'Gato';

console.log(x === 'Gato');

console.log(x !== 'Gatos'); // false -> true



// Operadores Lógicos '&&'
if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso'); // Cairá aqui
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log('Verdadeiro', condicional); // Cairá aqui
} else {
    console.log('Falso');
}


var condicional2 = (5 - 5) || (5 + 5) || (10 - 2); // 10
var condicional2 = (5 - 5) || (5 + 5) && (10 - 2); // 8

console.log(condicional2);


// SWITCH

var corFavorita = 'Amarelo';

switch(corFavorita) {
    case 'Azul':
        console.log('Olhe para o Céu');
        break;
    case 'Amarelo': 
        console.log('Olhe para o Sol');
        break;
    case 'Verde': 
        console.log('Olhe para a Floresta');
        break;
    default: 
        console.log('Fecha os olhos');
}





























