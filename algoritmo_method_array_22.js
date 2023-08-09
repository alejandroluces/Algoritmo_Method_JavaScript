// Array.prototype.map()
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.


/* 

Enunciado:
Tienes un arreglo llamado precios, que contiene los precios de diferentes productos en una tienda. Tu tarea es escribir una función en JavaScript que tome este arreglo como entrada y retorne un nuevo arreglo que contenga los precios después de aplicar un descuento del 10% a cada precio.

Entrada:
javascript
Copy code
var precios = [100, 200, 300, 400, 500];
Salida Esperada en Consola:
La salida debería ser un arreglo que contenga los precios con un 10% de descuento aplicado a cada uno:

javascript
Copy code
[90, 180, 270, 360, 450]
Puedes utilizar el método map() en JavaScript para recorrer el arreglo y aplicar el descuento a cada elemento.

*/

const precios = [100, 200, 300, 400, 500];

const apliMap = (precios) => {
    return precios.map(x => x * 0.9);
    }

console.log(apliMap(precios));


