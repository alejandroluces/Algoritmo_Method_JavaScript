/* 
El [@@iterator]()método de Stringvalores implementa el protocolo iterable y permite que la mayoría de las sintaxis que esperan iterables consuman cadenas, como la sintaxis extendida y for...oflos bucles. Devuelve un objeto iterador de cadena que produce los puntos de código Unicode del valor de la cadena como cadenas individuales.

Enunciado del Algoritmo:

Se tiene una cadena de caracteres en JavaScript que representa una secuencia de números, donde cada número está separado por comas (,). Se desea imprimir en la consola cada número individualmente usando el método @@iterator.

Entrada de Datos Propuesta:

Consideremos una cadena de caracteres llamada 'numeros'. Esta cadena es "1,2,3,4,5".

Salida Esperada:

Al ejecutar el algoritmo, se debe imprimir en la consola los siguientes mensajes:

"1"
"2"
"3"
"4"
"5"

*/

// Solución:

let numeros = "1,2,3,4,5";
let iterador = numeros[Symbol.iterator]();

for (let numero of iterador) {
    console.log(numero);
    }

