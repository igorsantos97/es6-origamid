function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return 'Abraçou';
    }

    this.andar = function () {
        return 'Andou pelo objeto';
    }
}

Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function () {
    return this.nome + ' Pessoa nadou';
}

const igor = new Pessoa('Igor', 29);

// console.log(Pessoa.prototype) // {}
// console.log(igor); // undefined, pois prototype está ligada a funções


const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'gato', 'cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);



const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
}















