// Array.prototype.findLast()
// El findLast()método itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefinedse devuelve.

// Algoritmo de ejemplo:

const array=[1,2,3,4,5,6,7,8,9,10];

const array2=array.findLast((elemento,indice,array)=> elemento>5);

console.log(array2);
