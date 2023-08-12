// Object.create()
// El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

// Algoritmo de ejemplo:

const objeto1 = {
    a: 1,
    b: 2,
    c: 3
};

const objeto2 = Object.create(objeto1);

console.log(objeto2);

//Otro ejemplo:
/*

Enunciado
Se quiere desarrollar una función en JavaScript que crea una instancia de un objeto "Coche" utilizando el método Object.create().

Entrada:

Un objeto prototipoCoche que contiene dos propiedades: marca, que es una cadena que representa la marca del coche, y modelo, que es una cadena que representa el modelo del coche.
Un objeto detallesCoche que contiene una propiedad color, que es una cadena que representa el color del coche.
La función debe utilizar el objeto prototipoCoche como prototipo para crear un nuevo objeto que incluya la propiedad color del objeto detallesCoche.

Salida:

La función debe imprimir en la consola el objeto creado, mostrando las propiedades marca, modelo, y color.
Ejemplo de Entrada y Salida
Entrada:

prototipoCoche: { marca: "Toyota", modelo: "Corolla" }
detallesCoche: { color: "Rojo" }
Salida en la Consola:

Marca: Toyota, Modelo: Corolla, Color: Rojo
El algoritmo debe usar el método Object.create() para crear un nuevo objeto que tenga prototipoCoche como su prototipo, y luego debe agregar la propiedad color del objeto detallesCoche a este nuevo objeto. La salida impresa en la consola debe reflejar las propiedades del objeto creado.

*/

const prototipoCoche = {
    marca: "Toyota",
    modelo: "Corolla"
};

const detallesCoche = {
    color: "Rojo"
};

const coche = Object.create(prototipoCoche);

coche.color = detallesCoche.color;
console.log(coche);

console.log(`Marca: ${coche.marca}, Modelo: ${coche.modelo}, Color: ${coche.color}`);


