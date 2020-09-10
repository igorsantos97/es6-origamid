// Crie uma função construtora de Pessoa
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const igor = new Pessoa('Igor', 'Santos', 29);

console.log(igor.nomeCompleto()); //Igor Santos

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype)); // ou NodeList.prototype
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name); // HTMLLIElement() 
console.log(li.click.constructor.name); // Funcion
console.log(li.innerText.constructor.name); // String
console.log(li.value.constructor.name); // Number
console.log(li.hidden.constructor.name); // Boolean
console.log(li.offsetLeft.constructor.name); // Number
console.log(li.click().constructor.name); // Não é nada pois não há construtor para undefined e null

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
