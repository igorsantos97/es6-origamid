// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function scriptImg() {
    const imgs = document.querySelectorAll('img');
    let somaWidth = 0;

    imgs.forEach((img) => {
        const imgWidth = img.offsetWidth;

        somaWidth += imgWidth;
    });

    console.log(`A soma de largura das imagens é: ${somaWidth}`)
}

window.onload = scriptImg; // função que só será executada depois que a página for carregada por completo



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.getBoundingClientRect().width;
    const linkHeight = link.getBoundingClientRect().height;

    console.log(link, linkWidth, linkHeight);

    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log('Possui acessibilidade');
    } else {
        console.log('Não possui boa acessibilidade');
    }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mediaMobile = window.matchMedia('(max-width: 720px)').matches;

if(mediaMobile) {
   const menu = document.querySelector('.menu');

   menu.classList.add('menu-mobile');
} 







