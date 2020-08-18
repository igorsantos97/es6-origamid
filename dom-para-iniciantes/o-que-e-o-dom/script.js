// Retorne o url da página atual utilizando o objeto window
const url = window.location.href; // Não precisa colocar o objeto 'window', pois ele é o objeto máximo

console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const firstElementAtivo = document.querySelector('.ativo');

console.log(firstElementAtivo);

// Retorne a linguagem do navegador
const languageNavigator = navigator.language;

console.log(languageNavigator);

// Retorne a largura da janela 
const widthWindow = innerWidth;

console.log(widthWindow); // Com esse valor eu posso verificar se o usuário está com o tamanho de tela maior que: 800px, eu aplico "efeitos" com movimento com mouse

