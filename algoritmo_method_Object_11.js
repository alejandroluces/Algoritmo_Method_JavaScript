// Object.getOwnPropertyNames()
// Resumen
// El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.

// Algoritmo de ejemplo:

const object5 = {
    a: 1,
    b: 2,
    c: 3
};

const properties1 = (object) => {
    return Object.getOwnPropertyNames(object);
}

console.log(properties1(object5));


// otro ejemplo:
/*

Enunciado
Desarrollar una función en JavaScript que toma un objeto y devuelve los nombres de todas las propiedades propias (no heredadas) del objeto, ya sean enumerables o no.

Entrada:

Un objeto vehiculo con varias propiedades. Por ejemplo, { marca: "Toyota", modelo: "Camry", año: 2020 }.
La función debe utilizar Object.getOwnPropertyNames() para obtener los nombres de todas las propiedades propias del objeto vehiculo.

Salida:

La función debe imprimir en la consola una lista con los nombres de todas las propiedades propias del objeto.
Ejemplo de Entrada y Salida
Entrada:

vehiculo: { marca: "Toyota", modelo: "Camry", año: 2020 }.
Salida en la Consola:

Nombres de las propiedades: marca, modelo, año.
El algoritmo debe utilizar el método Object.getOwnPropertyNames() para obtener los nombres de todas las propiedades propias del objeto, y luego imprimir estos nombres en la consola. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/

const vehiculo = {
    marca: "Toyota",
    modelo: "Camry",
    año: 2020
};

const properties2 = (object) => {
    
        return Object.getOwnPropertyNames(object);
    }

console.log(properties2(vehiculo));