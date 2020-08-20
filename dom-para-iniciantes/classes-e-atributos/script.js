// Adicione a classe ativo a todos os itens do menu
const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach((link) => link.classList.add('ativo'));


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
linksMenu.forEach((link) => link.classList.remove('ativo'));

linksMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const hasAttributeAlt = img.hasAttribute('alt');
    
    console.log(!hasAttributeAlt ? 'Imagem não possui atributo alt' : 'Imagem possui atributo alt');
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.href = 'https://www.google.com';

console.log(linkExterno);







