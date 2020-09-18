// const perimetro = new Function('lado', 'return lado * 4');
// perimetro(5) //20

// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.name);

// function darOi(nome, index) {
//     console.log('oi para você ' + nome + index);
// }

// darOi.call(null, 'Igor ', 28);

// window.marca = 'Carro';
// window.ano = 2018;

// function descricaoCarro(velocidade) {
//     console.log(this);
//     console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }

// descricaoCarro.call({ marca: 'Honda', ano: 2016 }, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra']


// carros.forEach.call(frutas, (item) => {
//     console.log(item);
// });

// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function ativo(classe) {
//     console.log(this);
//     this.element.classList.add(classe);
// }

// const li = {
//     element: document.querySelector('li'),
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const ul = new Dom('ul');

// ul.ativo.call(li, 'ativar');
// ul.ativo('ativar');

// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas);

// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.bind(li, (item) => {
//     return item.classList.contains('ativo');
// });

// console.log(filtro());

// const numeros = [33, 23, 2, 434, 54, 4];

// const $ = document.querySelectorAll.bind(document);

// console.log($('li'));

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda, 100);



