const comida = 'Pizza';
const agua = new String('Agua');

// console.log(agua.length);

const frase = 'A melhor comida';

// console.log(frase.length - 1);
// console.log(frase[frase.length - 1]);

// console.log(frase.charAt(0));
// console.log(frase.charAt(frase.length - 1));

const frase1 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase1.concat(linguagem, '!!!');
// console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

// console.log(listaFrutas.includes(fruta)); // true
// console.log(listaFrutas.includes('Banana')); // true
// console.log(fruta.includes(listaFrutas)); // false


const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(-2));
// console.log(transacao2.slice(0, 3));
// console.log(transacao3.slice(0, 3));


// console.log(fruta.lastIndexOf('a'));

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    // console.log(preco.padStart(8));
});

// console.log(preco.padStart(20, '$'));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(' ', ', ');
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// console.log(listaItens);


let preco2 = 'R$ 1200,43';
preco2 = preco2.replace(',', '.'); // 'R$ 1200.43'
// ou
preco2 = +preco2.replace('R$ ', '');

// console.log(preco2);



let listaItens2 = 'Camisas, Bonés, Calças, Bermudas, Vestidos, Saias';
const arrayItens = listaItens2.split(', ');
// console.log(arrayItens);




const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlNovo);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(' '));




const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log((sexo1.toLowerCase() === 'feminino')); //true
console.log((sexo2.toLowerCase() === 'feminino')); //true
console.log((sexo3.toLowerCase() === 'feminino')); //true



const valor = '  R$ 23.00   '
console.log(valor);
console.log(valor.trim()); // 'R$ 23.00'
console.log(valor.trimStart()); // 'R$ 23.00   '
console.log(valor.trimEnd()); // '  R$ 23.00'