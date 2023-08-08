// Array.prototype.every()
// Determina si todos los elementos en el array satisfacen una condición.


// Array.prototype.every()
// Determina si todos los elementos en el array satisfacen una condición.
// Algorimo ejemplo:

const array = [1, 2, 3, 4, 5];
const aplyEvey =(array) =>{

    return  array.every(value => typeof value === 'number');

}
 
console.log(aplyEvey(array)); // true