// matriz.prototipo.unshift()
// El unshift()método de Arrayinstancias agrega los elementos especificados al comienzo de una matriz y devuelve la nueva longitud de la matriz.

// Algoritmo de ejemplo:

const array1 = [1, 2, 'a', '1a'];

const array2 = (array) => {
    return array.unshift(9);
    }

console.log(array2(array1));
console.log(array1);