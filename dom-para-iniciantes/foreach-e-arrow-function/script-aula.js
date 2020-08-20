// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array) {
//     // console.log(item);
// });

const titulos = document.getElementsByClassName('titulo'); // HTMLCollection
const titulosArray = Array.from(titulos); // Array 

// console.log(titulosArray);

titulosArray.forEach(function(item, index, array) {
    // console.log(item);
});



// Arrow function
const imgs2 = document.querySelectorAll('img');

// let i = 0;
// imgs2.forEach(() => 
//     console.log(i++)
// );

let i = 0;
imgs2.forEach((item) =>  console.log(i++));
// imgs2.forEach(() =>  console.log(i++));









