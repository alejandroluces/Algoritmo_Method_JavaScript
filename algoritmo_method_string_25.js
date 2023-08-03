// Cadena.prototipo.slice()
// El slice()método extrae una sección de una cadena y la devuelve como una nueva cadena, sin modificar la cadena original.

// algoritmo de ejemplo:

let str = "Tengo un perro y un gato, pero el perro es mas grande que el gato";

const newStr = (a) => {
    return a.slice(0, 14);
}

console.log(newStr(str));