// Array.prototype.push()
// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

// Otro ejemplo:
const animals = ['pigs', 'goats', 'sheep'];

const count = (animals)=> {
    return animals.push('cows');
    }

console.log(count(animals));
console.log(animals);

// Otro ejemplo:
/*
Enunciado:
Tienes un arreglo llamado libros, que contiene los títulos de los libros en una biblioteca. Además, tienes una cadena que representa un nuevo título de libro. Tu tarea es escribir una función en JavaScript que tome este arreglo y la cadena como entrada, y agregue el nuevo título al final del arreglo de libros.

Entrada:
javascript
Copy code
var libros = ["Don Quijote", "Cien años de soledad", "Matar a un ruiseñor"];
var nuevoLibro = "El Gran Gatsby";
Salida Esperada en Consola:
La salida debería ser un arreglo que contenga los títulos originales y el nuevo título agregado al final:

javascript
Copy code
["Don Quijote", "Cien años de soledad", "Matar a un ruiseñor", "El Gran Gatsby"]
Puedes utilizar el método push() en JavaScript para agregar el nuevo título al arreglo.
*/

const libros = ["Don Quijote", "Cien años de soledad", "Matar a un ruiseñor"];
const nuevoLibro = "El Gran Gatsby";

const addNewBook = (libros, nuevoLibro)=> {

    libros.push(nuevoLibro);
    return libros;
    }

console.log(addNewBook(libros, nuevoLibro));

