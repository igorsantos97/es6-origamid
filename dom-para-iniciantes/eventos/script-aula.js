const img = document.querySelector('img');


function callback(event) {
    console.log(event);
}

// img.addEventListener('click', callback);




const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget); // currentTarget -> this. Ou seja, é referente ao elemento que selecionei
    console.log(event.target); // target -> onde cliquei exatamente
    console.log(event.type); // retorna uma string com o nome do evento -> 'click'
} 

// animaisLista.addEventListener('click', callbackLista);



const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget); // É a mesma coisa que colocar 'this'
}

linkExterno.addEventListener('click', handleLinkExterno);



const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
    if(event.key === 'f') {
        document.body.classList.toggle('azul');
    }
    console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});

