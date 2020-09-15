// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [
//     new String('Tipo 1'),
//     ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
//     function andar(nome) {
//         console.log(nome)
//     }
// ];

// // console.log(dados[0]);
// // console.log(dados[2]('Ford'));
// // console.log(dados[1][2].cor) // azul

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[5] = 'Kia';

// // console.log(carros);
// // console.log(carros.length);



// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//     0: 'Igor',
//     1: 'Santos',
//     2: 'Teste',
// }

// const objArray = Array.from(obj)
// // console.log(arrayLi);

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[0].length);
// console.log(frutas[2][0].length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];

// instrumentos.sort();

// console.log(instrumentos);


// const idades = [80, 32, 21, 33, 43, 1, 12, 8, 9, 7];

// idades.sort();

// console.log(idades);


const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');

// const novaArray = carros.push('Parati', 'Gol');

// console.log(novaArray); // 7
// console.log(carros);

// console.log(carros.pop());
// console.log(carros.shift());

// console.log(carros.reverse());


// console.log(carros);
// console.log(carros.splice(2, 2, 'Fusca'));
// console.log(carros);


// console.log(['Item1', 'Item2', 'Item1', 'Item4', 'Item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item1', 'Item4', 'Item5'].fill('Banana', 1, 3));


const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const linguagens = ['html', 'css', 'js', 'php', 'python'];

let htmlString = '<h2>Título Principal</h2>'

htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

const cloneLing = linguagens.slice();

console.log(cloneLing);


