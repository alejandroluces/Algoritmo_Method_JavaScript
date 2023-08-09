// Array.prototype.reduceRight()
// El reduceRight()método aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor.

// Algoritmo de ejemplo:

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);

// Otro ejemplo:
/*

Enunciado
Tienes un array de números enteros llamado "numeros". Tu tarea es implementar un algoritmo en JavaScript que utilice el método reduceRight() para multiplicar todos los elementos del array en orden inverso y dividir cada producto intermedio por el valor 2.

Entrada
Se proporciona el siguiente array de números enteros:

javascript
Copy code
let numeros = [2, 4, 6, 8];
Salida Esperada
La salida que debería aparecer en la consola es:

48
Explicación
Tomando los números en orden inverso, empezamos con 8.
Multiplicamos 8 por 6 y luego dividimos por 2, resultando en 24.
Multiplicamos 24 por 4 y luego dividimos por 2, resultando en 48.
Multiplicamos 48 por 2 y luego dividimos por 2, resultando en 12.
Tu tarea es implementar el código que realice esta operación usando el método reduceRight().

*/

const numeros = [2, 4, 6, 8];

const mult = (numeros)=> {
    return numeros.reduceRight((acc, curr)=> acc * curr / 2);
    }

console.log(mult(numeros));
