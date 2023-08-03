// Cadena.prototipo.reemplazarTodo()
// El replaceAll()método devuelve una nueva cadena con todas las coincidencias de a patternreemplazadas por a replacement. puede patternser una cadena o un RegExp, y replacementpuede ser una cadena o una función que se llamará para cada coincidencia. La cadena original se deja sin cambios.

// // // Algoritmo de ejemplo:
// //
let str= "Tengo un perro y un gato, pero el perro es mas grande que el gato";

const newStr =(a) =>{
return a.replaceAll("perro", "gato");


}

console.log(newStr(str));