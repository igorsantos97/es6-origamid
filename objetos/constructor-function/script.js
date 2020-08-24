// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }

// # RESOLUÇÃO 01 EX.
function Pessoa(nome, idade) {
    this.nome = nome ? nome : 'Nome pessoa';
    this.idade = idade ? idade : 0;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
joao = new Pessoa('João', 20);
maria = new Pessoa('Maria', 25);
bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(elements) {
    const elementsNodeList = document.querySelectorAll(elements);
    
    this.elements = elementsNodeList;

    this.addClass = function(classe) {
        elementsNodeList.forEach(function(element) {
            element.classList.add(classe);
        });
    }
    
    this.removeClass = function(classe) {
        elementsNodeList.forEach(function(element) {
            element.classList.remove(classe);
        });
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

li.addClass('teste');
// li.removeClass('teste');

ul.addClass('list-nav');




