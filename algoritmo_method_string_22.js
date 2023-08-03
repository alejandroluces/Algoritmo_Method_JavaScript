// Cadena.prototipo.reemplazar()
// El replace()método devuelve una nueva cadena con una, algunas o todas las coincidencias de un patternreemplazadas por un replacement. puede patternser una cadena o un RegExp, y replacementpuede ser una cadena o una función llamada para cada coincidencia. Si patternes una cadena, solo se reemplazará la primera aparición. La cadena original se deja sin cambios.

// // Algoritmo de ejemplo:
//
let str= "Tengo un perro y un gato";
let newStr = str.replace("perro", "gato");
console.log(newStr);

// Si usamos una funcion seria asi:

let str2= "Tengo una hija que se llama Sara, pero Sara es muy traviesa";
const replaceStr =(a) =>{
return a.replace("Sara", "gato");
}
console.log(replaceStr(str2));