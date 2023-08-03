// Cadena.prototipo.trim()
// El trim()método elimina los espacios en blanco de ambos extremos de una cadena y devuelve una nueva cadena, sin modificar la cadena original.

// Enunciado:
// Queremos desarrollar un programa que tome como entrada una cadena de texto que contenga espacios innecesarios al principio y al final de la cadena. El objetivo es utilizar el método trim() para eliminar estos espacios y mostrar la cadena resultante en la consola.

// Entrada:
// Una cadena de texto que puede contener espacios en blanco al principio y al final de la misma. Por ejemplo:

// arduino
// Copy code
// "   ¡Hola, mundo!    "
// Algoritmo:
// Tomar la cadena de texto como entrada.
// Utilizar el método trim() en la cadena de texto para eliminar los espacios en blanco al principio y al final.
// Imprimir la cadena resultante en la consola.
// Salida:
// La salida que se mostrará en la consola será la cadena de texto sin los espacios en blanco al principio y al final. Para la entrada dada, la salida sería:

// arduino
// Copy code
// "¡Hola, mundo!"

let cadena = "   ¡Hola, mundo!    ";
const deleteSpace =(a) =>{
    return a.trim();
}
console.log(deleteSpace(cadena));