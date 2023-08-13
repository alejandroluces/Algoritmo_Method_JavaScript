// Object.fromEntries()
// El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.

// Algoritmo de ejemplo:

const matriz1 = [
    ['clave1', 'valor1'],

    ['clave2', 'valor2']
];

const objeto1 = Object.fromEntries(matriz1);

console.log(objeto1.clave1);


/*

Enunciado
Desarrollar una función en JavaScript que toma una matriz de pares clave-valor y convierte esa matriz en un objeto. La matriz representa la información de un producto, y cada par clave-valor consiste en el nombre de una propiedad del producto y su valor correspondiente.

Entrada:

Una matriz datosProducto con pares clave-valor. Por ejemplo, [["nombre", "Laptop"], ["precio", 1000], ["marca", "TechCorp"]].
La función debe utilizar Object.fromEntries() para convertir la matriz datosProducto en un objeto producto.

Salida:

La función debe imprimir en la consola el objeto producto.
Además, debe imprimir en la consola una cadena que describa el producto, utilizando las propiedades del objeto producto.
Ejemplo de Entrada y Salida
Entrada:

datosProducto: [["nombre", "Laptop"], ["precio", 1000], ["marca", "TechCorp"]].
Salida en la Consola:

Producto: { nombre: "Laptop", precio: 1000, marca: "TechCorp" }
Descripción del producto: Laptop de la marca TechCorp con un precio de $1000.
El algoritmo debe utilizar el método Object.fromEntries() para transformar la matriz de entrada en un objeto, y luego utilizar las propiedades de ese objeto para construir y imprimir una descripción del producto. La salida en la consola debe reflejar el formato descrito en el ejemplo.

*/

const datosProducto = [
    ["nombre", "Laptop"],
    ["precio", 1000],
    ["marca", "TechCorp"]
];

function convertirMatrizAObjeto(datosProducto) {
    const producto = Object.fromEntries(datosProducto);
    console.log(`Producto: ${JSON.stringify(producto)}`);
    console.log(`Descripción del producto: ${producto.nombre} de la marca ${producto.marca} con un precio de $${producto.precio}.`);
}

convertirMatrizAObjeto(datosProducto);

