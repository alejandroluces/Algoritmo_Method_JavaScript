// Object.entries()
// El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).

// Algoritmo de ejemplo:

const objeto1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(objeto1)) {
    console.log(`${key}: ${value}`);
}

// otro ejemplo:

/*

Enunciado
Desarrollar una función en JavaScript que toma un objeto que representa las calificaciones de un estudiante en varias asignaturas y devuelve un resumen en forma de cadena.

Entrada:

Un objeto calificaciones con pares clave-valor donde las claves son los nombres de las asignaturas y los valores son las calificaciones numéricas del estudiante en esas asignaturas. Por ejemplo, { Matemáticas: 90, Historia: 85, Física: 78 }.
La función debe utilizar Object.entries() para iterar a través de las entradas del objeto calificaciones y construir una cadena que resume las calificaciones del estudiante.

Salida:

La función debe imprimir en la consola una cadena que representa el resumen de las calificaciones. Cada asignatura debe aparecer en una línea separada con su nombre y calificación.
Ejemplo de Entrada y Salida
Entrada:

calificaciones: { Matemáticas: 90, Historia: 85, Física: 78 }
Salida en la Consola:

makefile
Copy code
Matemáticas: 90
Historia: 85
Física: 78
El algoritmo debe utilizar el método Object.entries() para acceder a las entradas del objeto calificaciones y construir la cadena de salida que resume las calificaciones del estudiante. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/

const calificaciones = { Matemáticas: 90, Historia: 85, Física: 78 };

for (const [key, value] of Object.entries(calificaciones)) {
    console.log(`${key}: ${value}`);
}




