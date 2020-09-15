// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objCursos = arrayCursos.map((curso) => {
    const [titulo, descricao, aulas, horas] = curso.querySelectorAll('*');

    return {
        titulo: titulo.innerText,
        descricao: descricao.innerText,
        aulas: aulas.innerText,
        horas: horas.innerText
    };
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const arrayMaioresQue100 = numeros.filter((numero) => {
    return numero > 100;
});

// console.log(arrayMaioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
// console.log(instrumentos.some(item => item === 'Baixo')); // true

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]


const total = compras.reduce((acumulador, { preco }) => {
    const precoLimpo = +preco.replace('R$ ', '').replace(',', '.');

    return acumulador + precoLimpo;
}, 0);

console.log(total);