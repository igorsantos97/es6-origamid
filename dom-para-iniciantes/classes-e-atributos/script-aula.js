const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possuiAzul')
} else {
    menu.classList.add('naoPossuiAzul')
}

// Antigamente se usava ClassName 
menu.className += ' vermelho';

// console.log(menu.className);



// Attributes - retorna um array de atributos do elemento
const animais = document.querySelector('.animais');

// console.log(animais.attributes.id);
// console.log(animais.attributes.class);

console.log(animais.attributes['data-texto']); // atributo 'data'


const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
const altImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

console.log(img);

console.log(img.hasAttribute('alt')); // true


