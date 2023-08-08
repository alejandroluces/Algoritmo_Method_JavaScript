// Array.prototype.findLastIndex()
// El findLastIndex()método itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.

// Algoritmo de ejemplo:

let arr = [5, 12, 28, 130, 44];

const isLargeNumber = (element) => element <15;

console.log(arr.findLastIndex(isLargeNumber));