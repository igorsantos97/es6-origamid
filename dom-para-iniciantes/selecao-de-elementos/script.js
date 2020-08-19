// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
// console.log(imgsAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
// console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2AnimaisDescricao);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo);

