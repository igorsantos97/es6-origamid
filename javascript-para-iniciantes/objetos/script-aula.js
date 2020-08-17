var pessoa = {
    nome: 'Igor',
    idade: 23,
} 

console.log(pessoa.nome);

var quadrado = {
   lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
       return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var height = 120;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.color = 'blue';
menu.esconder = () => {
    return 'Esconder';
}

var bg = menu.backgroundColor;






















