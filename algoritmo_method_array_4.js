// Matriz.prototipo.entradas()
// El entries()método devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice de la matriz.

// Algoritmo de ejemplo:

let array1 = ['a', 'b', 'c'];

const entries = (array1) => {
    let iterator1 = array1.entries();
    for (let e of iterator1) {
        console.log(e);
    }
}
console.log(entries(array1));

// otro ejemplo:

let array2 = ['a', 'b', 'c'];
let iterator2 = array2.entries();

console.log(iterator2.next().value);


