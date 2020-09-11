// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach(({ descricao, valor }) => {
    // OBS: Se houvesse uma palavra 'Taxa' NO MEIO da string e você só quer filtrar os que estão no começo, use o '.slice(0, 4)'
    if (descricao.includes('Taxa')) {
        taxaTotal += Number(valor.replace('R$ ', ''));
    } else {
        recebimentoTotal += Number(valor.replace('R$ ', ''));
    }
});

console.log(recebimentoTotal, taxaTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
// console.log(arrayTransportes);


// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const htmlArray = html.split('span');
const newHtml = htmlArray.join('a');

// console.log(newHtml);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// console.log(frase[frase.length - 1]); // !

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let qtdeTaxa = 0;

transacoes2.forEach(item => item.trim().toLocaleLowerCase().includes('taxa') ? qtdeTaxa++ : '');

console.log(qtdeTaxa); // 3