// Array.prototype.shift()
// El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// Algoritmo de ejemplo:

const array1 = [1, 2, 3];

const shifted = (array1)=> {
    return array1.shift();
}

console.log(shifted(array1));
console.log(array1);

// otro ejemplo usanndo strings

const array2 = ['one', 'two', 'three'];

const shifted2 = (array2)=> {
    return array2.shift();
}

console.log(shifted2(array2));
console.log(array2);

