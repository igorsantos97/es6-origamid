// var videoGames = ['Switch', 'PS4', 'XBOX'];

// videoGames.push('3DS');
// var ultimoItem = videoGames.pop();


// for(var numero = 1; numero <= 10; numero++) {
//     console.log(numero);
// }

// var i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }


var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Uva', 'Maça', 'Morango'];

frutas.forEach(function(item, index, array) {
    frutas.pop();
    console.log(item, index, array);
});


var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++;
}


