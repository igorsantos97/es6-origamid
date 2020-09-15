// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
// console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach((i, index) => i.classList.add('ativa' + index));
// console.log(retornoForeach);


// const carros = ['Ford', 'Fiat', 'Honda'];
// const novaArray = carros.map((item, index, array) => {
//     return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);


// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const tempoAulas = aulas.map(aula => aula.min);

// // function nomeAulas(aula) {
// //     return aula.nome;
// // }

// const nomeAula = aula => aula.nome;

// const nomeAulas2 = function (aula) {
//     return aula.nome;
// }

// const arrayNomeAula = aulas.map(nomeAula)

// console.log(arrayNomeAula);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//     // console.log(acumulador, item);
//     return acumulador + item;
// });

// // console.log(reduceAulas);

// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//     return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);



// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// var acumulador = {}
// acumulador[0] = 'teste01';

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     console.log(aula.nome);
//     acumulador[index] = aula.min;
//     console.log(acumulador);
//     return acumulador;
// }, {});

// console.log(listaAulas);


const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((item) => {
    return item === 'Uva';
});

const every = frutas.every((item) => {
    return frutas;
});

// console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n > 3); // true
// console.log(maiorQue3);


const frutas1 = ['Banana', 'Pêra', 'Uva'];
const indexUva = frutas.findIndex(item => {
    return item === 'Uva';
});

// console.log(indexUva); // UVA
// console.log(frutas[indexUva]);// UVA


const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = frutas2.filter((item) => {
    return item;
});

// console.log(arrayFrutas);


const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulas.filter((aula) => {
    return aula.min > 15;
});

console.log(maiores15);









