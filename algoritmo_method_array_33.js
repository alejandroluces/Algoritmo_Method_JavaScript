// Array.prototype.splice()
// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// Algortimo de ejemplo:

const meses = ['Marzo',"Agosto", 'Enero', 'Diciembre', 'Febrero'];
const meses2 =(meses)=> meses.splice(0, 2, 'Abril', 'Mayo');

console.log(meses2(meses)); 
console.log(meses); 

// Otro ejemplo:

/*
Enunciado
Tienes un array de productos en una tienda, donde cada producto es representado como una cadena que contiene el nombre del producto. El objetivo de este algoritmo es eliminar un número específico de productos comenzando desde una posición determinada y, opcionalmente, agregar nuevos productos en la misma posición. Para este fin, deberás utilizar el método splice() en JavaScript.

Entrada
Un array de cadenas, donde cada cadena representa el nombre de un producto.
La posición desde donde comenzar a eliminar productos (índice basado en cero).
El número de productos a eliminar.
Una lista opcional de nuevos productos a agregar en la posición desde donde se comenzó a eliminar.
Ejemplo de entrada:

javascript
Copy code
const productos = ["Manzana", "Banana", "Cereza", "Dátiles", "Higos"];
const posicionInicio = 2;
const numeroAEliminar = 2;
const nuevosProductos = ["Melón", "Uva"];
Salida
El algoritmo debe imprimir en consola el estado actualizado de la lista de productos después de aplicar las operaciones de eliminación y adición.

La salida en consola debería ser:

["Manzana", "Banana", "Melón", "Uva", "Higos"]
Nota
El método splice() en JavaScript se utiliza para cambiar el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. En este enunciado, se te pide que utilices splice() para eliminar un número específico de elementos desde una posición específica y, opcionalmente, agregar nuevos elementos en la misma posición.

*/

const productos = ["Manzana", "Banana", "Cereza", "Dátiles", "Higos"];
const posicionInicio = 2;
const numeroAEliminar = 2;
const nuevosProductos = ["Melón", "Uva"];

const productos2 = (productos, posicionInicio, numeroAEliminar, nuevosProductos) => productos.splice(posicionInicio, numeroAEliminar, ...nuevosProductos);

console.log(productos2(productos, posicionInicio, numeroAEliminar, nuevosProductos));
console.log(productos);