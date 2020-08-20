// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true); // true -> clonar os elementos filhos
const copy = document.querySelector('.copy');

copy.appendChild(menuClone);


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('dl dt:first-child');


// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;




