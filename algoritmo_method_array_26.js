// Array.prototype.reduce()
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// Algoritmo de ejemplo:

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

// Otro ejemplo:

/*
Enunciado:
Tienes un arreglo llamado numeros, que contiene una serie de números enteros. Tu tarea es escribir una función en JavaScript que tome este arreglo como entrada y retorne la suma total de todos los números en el arreglo.

Entrada:
javascript
Copy code
let numeros = [10, 20, 30, 40, 50];
Salida Esperada en Consola:
La salida debería ser la suma total de los números en el arreglo numeros:

javascript
Copy code
150
Puedes utilizar el método reduce() en JavaScript para iterar sobre el arreglo y sumar cada número al total acumulado.
*/

const numeros = [10, 20, 30, 40, 50];

const sum = (numeros)=> {
    return numeros.reduce((acc, curr)=> acc + curr);
    }

console.log(sum(numeros));



