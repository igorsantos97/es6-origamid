// const h1 = document.querySelector('h1');
// const animais = document.querySelector('.animais-descricao');

// console.log(h1.outerHTML);
// console.log(h1.innerHTML);

// h1.outerHTML = '<p>Novo Título</p>';



// Tranversing - Navegando pelo DOM
// Element
const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child')); // 2 forma de selecionar o ultimo elemento


// Node
// console.log(h1.nextSibling); // Próximo "Nó"

// console.log(lista.childNodes);
// console.log(lista.childNodes);
// console.log(lista.firstChild); // primeiro NODE child, NÃO ELEMENT!




// Manipulando Elementos
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const animais2 = document.querySelector('.animais');

// const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais2, mapa);

// contato.removeChild(animais2);
// contato.replaceChild(mapa, titulo);



// Criando novo elemento
const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo H1';
novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);




// Novos elementos
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1)

