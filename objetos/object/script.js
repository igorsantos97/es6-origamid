// Crie uma função que verifique
// corretamente o tipo de dado
function verificaTipoDado(target) {
    return Object.prototype.toString.call(target);
}

// console.log(verificaTipoDado([])); // [object Array]
// console.log(verificaTipoDado('[]')); // [object String]


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
    lados: {
        value: 4
    }
});

quadrado.lados = 3;
// console.log(quadrado.lados) // 4;


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)

configuracao.width = 300;
configuracao.teste = 'OI';
delete configuracao.width;

console.log(configuracao); // {width: 800, height: 600, background: "#333"}

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));