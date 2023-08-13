// Object.getPrototypeOf()
// Resumen
// El método Object.getPrototypeOf() devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado.

// Algoritmo de ejemplo:

// const object7 = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const prototype1 = (object) => {
//     return Object.getPrototypeOf(object);
// }

// console.log(prototype1(object7));

/*

Enunciado
Crear una función en JavaScript que acepte un objeto como entrada y devuelva el prototipo del objeto dado. El objeto será una instancia de una clase Automovil, que tiene propiedades y métodos definidos en su prototipo.

Entrada:

Un objeto auto, el cual es una instancia de la clase Automovil. El prototipo de esta clase incluye propiedades y métodos como marca, modelo y mostrarInformacion.
La función debe utilizar Object.getPrototypeOf() para obtener el prototipo del objeto auto.

Salida:

La función debe imprimir en la consola el prototipo del objeto, mostrando las propiedades y métodos del prototipo.
Ejemplo de Entrada y Salida
Entrada:

auto: una instancia de la clase Automovil, con un prototipo que contiene las propiedades y métodos marca, modelo y mostrarInformacion.
Salida en la Consola:

Prototipo del objeto: { marca: 'Toyota', modelo: 'Corolla', mostrarInformacion: [Function: mostrarInformacion] }.
La función debe usar Object.getPrototypeOf() para obtener el prototipo del objeto auto y luego imprimir este prototipo en la consola, mostrando las propiedades y métodos que contiene. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/


const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    mostrarInformacion: function () {
        console.log(`Auto ${this.modelo} ${this.marca}`);
    },
};

function obtenerPrototipo(auto) {
    console.log(`Prototipo del objeto: ${Object.getPrototypeOf(auto)}`);
}

obtenerPrototipo(auto);