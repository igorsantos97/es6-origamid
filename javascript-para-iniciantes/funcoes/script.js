// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return !!valor;
}

console.log(isTruthy(0)); //false


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    console.log(lado * 4);
}

console.log(perimetroQuadrado(5)); //OBS: nesse caso retornará 'undefined', pois não estou retornando nada na função


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Igor', 'Santos'));


// Crie uma função que verifica se um número é par
function parOuImpar(num) {
    return num % 2 == 0 ? 'É par' : 'Não é par';
}

console.log(parOuImpar(22));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoArgumento(valor) {
    console.log(typeof valor);
}

tipoArgumento('Texto'); //string


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => console.log('Igor Santos'));


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
