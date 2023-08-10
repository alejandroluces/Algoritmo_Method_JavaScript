// Array.prototype.reverse()
// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

// Algoritmo de ejemplo:

const array1 = ['one', 'two', 'three'];

const reversed = (array1)=> {
    return array1.reverse();
}

console.log(reversed(array1));
