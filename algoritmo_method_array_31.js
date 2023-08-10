// Array.prototype.some()
// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

// Algoritmo de ejemplo:

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));

// Otro ejemplo:

/*

Enunciado
Tienes un array de estudiantes, donde cada estudiante es representado como un objeto que contiene la información sobre su nombre y su nota en un examen. El objetivo de este algoritmo es determinar si hay algún estudiante en el grupo que haya aprobado el examen con una nota igual o superior a 5.

Entrada
Un array de objetos, donde cada objeto representa a un estudiante con las siguientes propiedades:

nombre: Una cadena que representa el nombre del estudiante.
nota: Un número que representa la nota del estudiante en el examen.
Ejemplo de entrada:

javascript
Copy code
const estudiantes = [
  { nombre: "Maria", nota: 4 },
  { nombre: "Juan", nota: 3 },
  { nombre: "Elena", nota: 6 },
  { nombre: "Carlos", nota: 2 }
];
Salida
El algoritmo debe imprimir en consola un mensaje que indique si hay o no algún estudiante que haya aprobado el examen.

Si hay al menos un estudiante que haya aprobado, el mensaje debería ser:

Copy code
Hay al menos un estudiante que ha aprobado el examen.
Si no hay ningún estudiante que haya aprobado, el mensaje debería ser:

Copy code
Ningún estudiante ha aprobado el examen.
Nota
Para lograr esto, deberás utilizar el método some() de los arrays en JavaScript, que evalúa si al menos un elemento en el array cumple con la condición especificada en una función de prueba proporcionada. En este caso, la función de prueba debe evaluar si la nota del estudiante es igual o superior a 5.


*/

const estudiantes = [
    { nombre: "Maria", nota: 4 },
    { nombre: "Juan", nota: 3 },
    { nombre: "Elena", nota: 4 },
    { nombre: "Carlos", nota: 2 }
    ];

const aprobados = estudiantes.some(estudiante => estudiante.nota >= 5);

if (aprobados) {
    console.log("Hay al menos un estudiante que ha aprobado el examen.");
}
else {
    console.log("Ningún estudiante ha aprobado el examen.");
}







