// Array.prototype.pop()
// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

const popped = (plants)=> {
    return plants.pop();
    }

console.log(popped(plants));

console.log(plants);
