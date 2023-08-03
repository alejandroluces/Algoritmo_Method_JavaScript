// Cadena.prototipo.split()
// El split()método toma un patrón y lo divide Stringen una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en una matriz y devuelve la matriz.

// Algoritmo de ejemplo:

let cadena = "Hola Mundo";
let cadena2 = "Hola Mundo, ¿cómo estás?";

const separarStr =(s) =>{
return s.split(" ");
}

console.log(separarStr(cadena));