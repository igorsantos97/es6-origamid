const href = window.location.href;

// console.log(href);

if(href === 'http://127.0.0.1:5500/javascript/dom-para-iniciantes/o-que-e-o-doms/') {
    console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
    console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste);



