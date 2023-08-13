// Object.getOwnPropertyDescriptor()
// El método Object.getOwnPropertyDescriptor() regresa como descripción de propiedad para una propiedad propia (eso es, una presente directamente en el objeto, no presente por la fuerza a través de la cadena de prototipo del objeto) de un objeto dado.

// Algoritmo de ejemplo:

const object1 = {
    property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);

// Otro ejemplo:

/*

Enunciado
Desarrollar una función en JavaScript que toma un objeto y una propiedad, y devuelve la descripción de la propiedad especificada del objeto.

Entrada:

Un objeto objeto con varias propiedades. Por ejemplo, { nombre: "Ana", edad: 30, ocupación: "Ingeniera" }.
Una cadena propiedad que representa el nombre de una propiedad del objeto. Por ejemplo, "edad".
La función debe utilizar Object.getOwnPropertyDescriptor() para obtener la descripción de la propiedad especificada del objeto objeto.

Salida:

La función debe imprimir en la consola la descripción de la propiedad, incluyendo sus atributos value, writable, enumerable, y configurable.
Ejemplo de Entrada y Salida
Entrada:

objeto: { nombre: "Ana", edad: 30, ocupación: "Ingeniera" }.
propiedad: "edad".
Salida en la Consola:

Descripción de la propiedad 'edad': { value: 30, writable: true, enumerable: true, configurable: true }.
El algoritmo debe utilizar el método Object.getOwnPropertyDescriptor() para obtener la descripción de la propiedad especificada del objeto, y luego imprimir esta descripción en la consola. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/

const object2 = {
    nombre: "Ana",
    edad: 30,
    ocupación: "Ingeniera"
};

const descriptor2 =(object, propiedad) => {
    return Object.getOwnPropertyDescriptor(object, propiedad);
}

console.log(descriptor2(object2, "edad"));
