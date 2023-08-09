// Array.prototype.lastIndexOf()
// El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.

// Algoritmo de ejemplo:


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

const apliLastIndexOf = (beasts) => {
    return beasts.lastIndexOf("camel");
    }

console.log(apliLastIndexOf(beasts));


//Otro ejemplo

/*

Enunciado:
Tienes un arreglo llamado números, que contiene una serie de números enteros, algunos de los cuales se repiten. Tu tarea es escribir una función en JavaScript que tome este arreglo y un número entero x como entrada, y retorne el índice de la última ocurrencia de x en el arreglo. Si el número no se encuentra en el arreglo, la función debe retornar -1.

Entrada:
javascript
Copy code
var numeros = [5, 12, 8, 12, 9, 3, 5, 8, 5];
var x = 5;
Salida Esperada en Consola:
La salida debería ser el índice de la última ocurrencia del número 5 en el arreglo números:

javascript
Copy code
8

*/

const numeros = [5, 12, 8, 12, 9, 3, 5, 8, 5];
const x = 5;

const apliLastIndexOf2 = (numeros, x) => {
    return numeros.lastIndexOf(x);
    }

console.log(apliLastIndexOf2(numeros, x));

