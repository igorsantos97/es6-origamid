// const pessoa = new Object({
//     nome: 'Igor',
// });

// console.log(pessoa);

// const carro = {
//     rodas: 4,
//     init(valor) {
//         this.marca = valor;
//         return this;
//     },
//     acelerar() {
//         return this.marca + ' acelerou';
//     },
//     buzinar() {
//         return this.marca + ' buzinou';
//     }
// }

// const honda = Object.create(carro).init('Honda');
// // console.log(honda)

// const ferrari = Object.create(carro).init('Ferrari');
// // console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou';
//     },
//     buzinar() {
//         return 'buzinou';
//     },
// }

// const moto = {
//     rodas: 2,
//     capacete: true
// }

// Object.assign(moto, funcaoAutomovel, carro);
// console.log(moto);

// const moto = {
//     capacete: true
// }


// Object.defineProperties(moto, {
//     rodas: {
//         // configurable: false, // Não posso deletar ... por padrão já vem FALSE
//         // writable: true, // permite modificar o valor da propriedade ... por padrão já vem FALSE
//         enumerable: true,
//         get() {
//             return 2;
//         },
//         set(valor) {
//             this._rodas = valor * 4
//         }
//     }
// });


// Object.getOwnPropertyNames(Array.prototype);
// Object.getOwnPropertyDescriptors(Array);



// const frutas = ['Banana'];
// // console.log(Object.getPrototypeOf('frutas'));
// // console.log(Object.getPrototypeOf(Array.prototype));


// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// // console.log(Object.is(frutas1, frutas2)); // false

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }

// Object.freeze(carro);
// carro.portas = 4;
// delete carro.marca;

// carro.marca = 'Honda';

// console.log(carro);
// console.log(Object.isFrozen(carro)); // true

const frutas = ['Banana', 'Morango'];
const frase = 'OI frase';
const somar = function (a, b) {
    return a + b;
};

const carro = {
    marca: 'Ford',
}

console.log(frutas.toString())

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));















