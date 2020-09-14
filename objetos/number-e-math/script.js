// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;

let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumero = numeros.split(', ');

// console.log(Math.max.apply(Math, arrayNumero));
// 1 argumento do .apply -> Função


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
function somaTotal(arrayPrecos) {
    let total = 0;

    arrayPrecos.forEach((preco) => {
        total += +preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim();
    });


    total = Math.round(total);

    return total;
}

const listaPrecos = ['R$ 59,99', ' R$ 100,222',
    'R$ 230  ', 'r$  200'];

console.log(somaTotal(listaPrecos));
