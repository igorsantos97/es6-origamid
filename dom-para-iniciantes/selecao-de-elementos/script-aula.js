const animais = document.getElementById('animais');

console.log(animais);

const gridSection = document.querySelectorAll('.grid-section');

console.log(gridSection);

const primeiroLi = document.querySelector('li');
console.log(primeiroLi);

const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);

const linkInterno = document.querySelector('a[href^="#"]');

console.log(linkInterno);


const animaisImg = document.querySelectorAll('img');

console.log(animaisImg[1]);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiroUl.classList.add('grid-section');

gridSectionNode.forEach(function(item, index){
    console.log(item, index);
});

const arrayGrid = Array.from(gridSectionHTML);

// arrayGrid.pop();



