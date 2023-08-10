// Array.prototype.slice()
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

// Algoritmo de ejemplo:

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const sliced = (animals)=> {
    return animals.slice(2);
}

console.log(sliced(animals));
console.log(animals);

// otro ejemplo usando strings

const str = 'The quick brown fox jumps over the lazy dog.';
const sliced2 = (str)=> {
    return str.slice(31);
}

console.log(sliced2(str));
console.log(str);

