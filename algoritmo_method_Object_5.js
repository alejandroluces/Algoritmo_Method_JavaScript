// Object.defineProperty()
// Resumen
// El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

// Algoritmo de ejemplo:

const objeto1 = {};

const descriptor1 = {
    value: 42,
    writable: true
};

const descriptor2 = {
    value: 43,
    writable: false
};

Object.defineProperty(objeto1, 'propiedad1', descriptor1);
Object.defineProperty(objeto1, 'propiedad2', descriptor2);

console.log(objeto1.propiedad1);

// otro ejemplo:

/*
Enunciado
Se quiere desarrollar una función en JavaScript que crea y modifica un objeto "Estudiante", añadiendo una propiedad específica mediante el uso de Object.defineProperty().

Entrada:

Un objeto vacío estudiante.
Una cadena nombre que representa el nombre del estudiante.
Un número edad que representa la edad del estudiante.
La función debe utilizar Object.defineProperty() para definir una propiedad informacion en el objeto estudiante. Esta propiedad informacion debe ser de sólo lectura y debe retornar una cadena que concatena el nombre y la edad en un formato específico.

Salida:

La función debe imprimir en la consola la propiedad informacion del objeto estudiante.
La función también debe intentar modificar el valor de la propiedad informacion y luego imprimir un mensaje que indique si la modificación fue exitosa o no.
Ejemplo de Entrada y Salida
Entrada:

estudiante: {}
nombre: "Alice"
edad: 20
Salida en la Consola:

Información del Estudiante: Alice, 20 años.
Intento de modificar la información fallido.
El algoritmo debe utilizar el método Object.defineProperty() para definir la propiedad informacion en el objeto estudiante, asegurando que la propiedad sea de sólo lectura y que concatene el nombre y la edad en el formato deseado. La salida impresa en la consola debe reflejar la propiedad creada y demostrar que la propiedad de sólo lectura no puede ser modificada.

*/

const estudiante = {};
const nombre = "Alice";
const edad = 20;

const descriptor = {
    value: nombre + ", " + edad + " años.",
    writable: false
};

Object.defineProperty(estudiante, 'informacion', descriptor);

console.log("Información del Estudiante: " + estudiante.informacion);

