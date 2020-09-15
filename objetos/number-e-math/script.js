// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;

let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumero = numeros.split(', ');

// console.log(Math.max.apply(Math, arrayNumero)); // 20 | 1 argumento do .apply -> Função
console.log(Math.max(...arrayNumero)); // 20 (ORIGAMID)



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];


// function somaTotal(arrayPrecos) {
//     let total = 0;

//     arrayPrecos.forEach((preco) => {
//         total += +preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim();
//     });


//     total = Math.round(total);

//     return total;
// }

// console.log(somaTotal(listaPrecos));


// #### ORIGAMID
function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);

    return preco;
}


let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
});

console.log(soma); // 590,21
console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // R$ 590,21











