// Array.prototipo.values()
// El método values()devuelve un nuevo objeto Array Iteratorque contiene los valores para cada índice del array.


// Algoritmo de ejemplo:

/*
Enunciado
Tienes un objeto que representa un inventario de productos en una tienda, donde cada clave es el nombre del producto y el valor asociado es la cantidad en stock. El objetivo de este algoritmo es obtener una lista de todas las cantidades en stock utilizando el método values() de JavaScript, y luego imprimir esta lista en la consola.

Entrada
Un objeto que contiene los nombres de los productos como claves y las cantidades en stock como valores.

Ejemplo de entrada:

javascript
Copy code
const inventario = {
  "Manzanas": 150,
  "Bananas": 200,
  "Cerezas": 50,
  "Dátiles": 75
};
Salida
El algoritmo debe imprimir en consola un array con las cantidades en stock de todos los productos en el inventario.

La salida en consola para el ejemplo de entrada debería ser:

csharp
Copy code
[150, 200, 50, 75]
Nota
El método Object.values() en JavaScript se utiliza para retornar un array con los valores de las propiedades enumerables de un objeto. En este enunciado, debes usar este método para obtener un array con las cantidades en stock de todos los productos en el inventario.
 */

const inventario = {
    "Manzanas": 150,
    "Bananas": 200,
    "Cerezas": 50,
    "Dátiles": 75

};

const inventario2 = (inventario) => {
    return Object.values(inventario);
}

console.log(inventario2(inventario));
console.log(inventario);




