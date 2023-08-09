// Array.of()
// El método Array.of() crea una nueva instancia Array con un número variable de elementos pasados como argumento, independientemente del número o del tipo.

// La diferencia entre Array.of() y el constructor Array reside en como maneja los parámetros de tipo entero: Array.of(7) crea un array con un solo elemento, 7, mientras que Array(7) crea un array vacío con una propiedad length de 7 (Nota: esto implica un array de 7 ranuras vacías, no ranuras con valores undefined).


const array1 = Array.of(7);
console.log(array1);

// Otro ejemplo:

/*
Enunciado:
Tienes varios valores de tipo numérico que representan las calificaciones de un estudiante en distintas asignaturas. Tu tarea es escribir una función en JavaScript que tome estos valores como entrada y retorne un nuevo arreglo que los contenga.

Entrada:
Los valores de entrada son los siguientes:

javascript
Copy code
var calificacion1 = 85;
var calificacion2 = 92;
var calificacion3 = 76;
var calificacion4 = 88;
Salida Esperada en Consola:
La salida debería ser un arreglo que contenga las calificaciones dadas como entrada:

javascript
Copy code
[85, 92, 76, 88]
Puedes utilizar el método Array.of() en JavaScript para crear el arreglo que contiene las calificaciones.


*/

const calificacion1 = 85;
const calificacion2 = 92;
const calificacion3 = 76;
const calificacion4 = 88;

const calificaciones = Array.of(calificacion1, calificacion2, calificacion3, calificacion4);

console.log(calificaciones);











