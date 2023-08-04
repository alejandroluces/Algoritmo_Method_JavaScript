// Array.prototype.copyWithin()
// El método copyWithin() transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.

// Algoritmo de ejemplo:

let array1 = [1, 2, 3, 4, 5];

const copyWithin = (array1) => {
    return array1.copyWithin(0, 3, 4);
    }
console.log(copyWithin(array1));


console.log([1, 2, 3, 4, 5].copyWithin(1,2));
