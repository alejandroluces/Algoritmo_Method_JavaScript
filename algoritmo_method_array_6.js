// Array.prototype.fill()
// El fill()método cambia todos los elementos dentro de un rango de índices en una matriz a un valor estático. Devuelve la matriz modificada.

// Algoritmo de ejemplo:

const array = [1, 2, 3, 4, 5];
const aplyFill =(array) =>{
    return  array.fill(0, 2, 4);
}

console.log(aplyFill(array)); // [1, 2, 0, 0, 5]