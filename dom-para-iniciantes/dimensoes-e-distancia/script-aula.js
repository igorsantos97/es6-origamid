const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
// console.log(height); //pega altura com Altura


const animaisTop = listaAnimais.offsetTop; // distancia entre o topo do elemento e topo da pág
// console.log(animaisTop); 

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;



// GETBOUNDINGCLIENTRECT() - ESTATICO | Diferente do 'OffsetTop'
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const h2react = primeiroh2.getBoundingClientRect();

console.log('react-top: ' + h2react.top); // seria a mesma coisa que o ".offsetTop" (linha 7)

if(h2react.top < 0) { 
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.outerWidth, // se o meu console estiver "grudado" com a janela do browser ele somará a largura também
    '--',
    window.innerHeight,
    window.outerHeight
)

console.log('Total de scroll: ' + window.pageYOffset + 'px');

// matchmedia
const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
    console.log('Usuário Mobile');
} else {
    console.log('Usuário Desktop');
}




