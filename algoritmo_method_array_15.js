// Array.from()
// El método estático crea una nueva instancia Array.from()de copia superficial a partir de un objeto iterable o similar a una matriz .Array

// algoritmo de ejemplo:

const array=[1,2,3,4,5,6,7,8,9,10];

const array2=Array.from(array,(elemento)=>elemento*2);

console.log(array2);

// otro ejemplo:

const array3=Array.from('hola mundo');

console.log(array3);
