// Array.prototype.indexOf()
// El indexOf()método devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.

// Algoritmo de ejemplo:

let array = [1, 2, 3, 4, 5];

const indexOf = (array) => {
    return array.indexOf(3);
    }

console.log(indexOf(array)); // 2

//otro ejemplo:
let array2=["hola","mundo","desde","javascript"];

const indexOf2 = (array2) => {
    return array2.indexOf("javascript");
    }

console.log(indexOf2(array2)); // 2
