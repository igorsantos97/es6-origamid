// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(e) {
    e.preventDefault();

    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    this.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elements = document.querySelectorAll('body *');

function handleElements(e) {
    e.preventDefault();

    console.log(e.currentTarget); // ex: h1 e <section>
    console.log(e.currentTarget);
}

elements.forEach((element) => {
    // element.addEventListener('click', handleElements);
    // element.addEventListener('click', removeElements);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElements(e) {
    e.preventDefault();

    e.target.remove();
}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const body = document.body;

function handleKey(e) {
    const keyTarget = e.key;

    if(keyTarget === 't') {
        body.classList.toggle('largeFont');
    }
}


window.addEventListener('keydown', handleKey);



