// Array.prototype.findIndex()
// El findIndex()método devuelve el índice del primer elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.

// Algoritmo de ejemplo:

const array=[1,2,3,4,5,6,7,8,9,10];

const array2=array.findIndex((elemento,indice,array)=>{
    return elemento>50;
}
);

console.log(array2);
