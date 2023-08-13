// Object.getOwnPropertySymbols()
// El método Object.getOwnPropertySymbols() regresa una colección de todos las propiedades de los simbolos encontrados directamente en un objeto dado.

// Algoritmo de ejemplo:

const object6 = {
    a: 1,
    b: 2,
    [Symbol("c")]: 3
};

const symbols1 = (object) => {
    object
    return Object.getOwnPropertySymbols(object);
}

console.log(symbols1(object6));


// otro ejemplo:

/*

Enunciado
Desarrollar una función en JavaScript que toma un objeto y devuelve los símbolos de todas las propiedades propias (no heredadas) del objeto.

Entrada:

Un objeto libro con varias propiedades, incluyendo algunas que utilizan símbolos como claves. Por ejemplo:
titulo: "La Odisea"
autor: "Homero"
[Symbol("edición"): "tercera"
[Symbol("idioma"): "español"
La función debe utilizar Object.getOwnPropertySymbols() para obtener los símbolos de todas las propiedades propias del objeto libro.

Salida:

La función debe imprimir en la consola los símbolos de todas las propiedades propias del objeto, así como el valor asociado a cada símbolo.
Ejemplo de Entrada y Salida
Entrada:

libro: { titulo: "La Odisea", autor: "Homero", [Symbol("edición")]: "tercera", [Symbol("idioma")]: "español" }.
Salida en la Consola:

Símbolo de la propiedad 'edición': Symbol(edición), Valor: tercera
Símbolo de la propiedad 'idioma': Symbol(idioma), Valor: español.
El algoritmo debe utilizar el método Object.getOwnPropertySymbols() para obtener los símbolos de todas las propiedades propias del objeto, y luego imprimir estos símbolos junto con sus valores asociados en la consola. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/

const libro = {
    titulo: "La Odisea",
    autor: "Homero",
    [Symbol("edición")]: "tercera",
    [Symbol("idioma")]: "español"
};

const symbols2 = (object) => {

    return Object.getOwnPropertySymbols(object);
}

console.log(symbols2(libro));