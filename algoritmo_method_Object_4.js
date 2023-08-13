// Object.defineProperties()
// Sumario
// El metodo Object.defineProperties() define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto.

// Algoritmo de ejemplo:

const objeto1 = {
    a: 1,
    b: 2,
    c: 3
};

Object.defineProperties(objeto1, {
    'prop1': {
        value: 42,
        writable: true
    },
    'prop2': {}
});

console.log(objeto1);

//Otro ejemplo:

/*
Enunciado
Se quiere desarrollar una función en JavaScript que crea y modifica un objeto "Libro", añadiendo varias propiedades mediante el uso de Object.defineProperties().

Entrada:

Un objeto vacío libro.
Un objeto propiedadesLibro que contiene las siguientes propiedades con sus valores correspondientes:
titulo: Una cadena que representa el título del libro.
autor: Una cadena que representa el autor del libro.
publicado: Un valor booleano que indica si el libro ha sido publicado o no.
La función debe utilizar Object.defineProperties() para definir estas propiedades en el objeto libro, donde titulo y autor son propiedades de sólo lectura, y publicado es una propiedad legible y escribible.

Salida:

La función debe imprimir en la consola el objeto creado, mostrando las propiedades titulo, autor, y publicado.
La función también debe intentar modificar el valor de la propiedad titulo y luego imprimir el objeto nuevamente, demostrando que la propiedad es de sólo lectura.
Ejemplo de Entrada y Salida
Entrada:

libro: {}
propiedadesLibro: { titulo: "1984", autor: "George Orwell", publicado: true }
Salida en la Consola:

Título: 1984, Autor: George Orwell, Publicado: true
Intento de modificar el título fallido.
Título: 1984, Autor: George Orwell, Publicado: true
El algoritmo debe utilizar el método Object.defineProperties() para definir las propiedades en el objeto libro, asegurando que las propiedades titulo y autor sean de sólo lectura. La salida impresa en la consola debe reflejar las propiedades del objeto creado y demostrar que la propiedad de sólo lectura no puede ser modificada.
*/

const libro = {};
const propiedadesLibro = {
    titulo: "1984",
    autor: "George Orwell",
    publicado: true
};

const propiedades = {
    titulo: {
        value: propiedadesLibro.titulo,
        writable: false
    },
    autor: {
        value: propiedadesLibro.autor,
        writable: false
    },
    publicado: {
        value: propiedadesLibro.publicado,
        writable: true
    }

};

const libro1 = Object.defineProperties(libro, propiedades);



console.log(`Título: ${libro1.titulo}, Autor: ${libro1.autor}, Publicado: ${libro1.publicado}`);