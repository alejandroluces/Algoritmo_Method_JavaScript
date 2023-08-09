// Array.prototype.keys()
// El método keys() devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo.

// Algoritmo de ejemplo:

let array = [1, 2, 3, 4, 5];

const keysArray = (array) => {

    return array.keys();
    }

console.log(keysArray(array)); // Object [Array Iterator] {}

//]otro ejemplo:

let array2 = [1, 2, 3, 4, 5];

const keysArray2 = (array2) => {

    return array2.keys();

    }

console.log(keysArray2(array2)); // undefined

//Otro ejemplo: 
/* 

Enunciado:
Tienes un objeto llamado vehiculos, que contiene información sobre distintos modelos de vehículos y la cantidad disponible en el inventario. Tu tarea es escribir una función en JavaScript que tome este objeto como entrada y retorne un arreglo con las llaves del objeto (es decir, los nombres de los modelos de vehículos).

Entrada:
javascript
Copy code
var vehiculos = {
  'Tesla Model 3': 12,
  'Ford Focus': 40,
  'Toyota Corolla': 25,
  'Honda Civic': 30
};
Salida Esperada en Consola:
La salida debería ser un arreglo que contenga las siguientes cadenas (llaves del objeto vehiculos):

javascript
Copy code
["Tesla Model 3", "Ford Focus", "Toyota Corolla", "Honda Civic"]
Puedes utilizar el método keys() de Object junto con otros métodos de manipulación de arreglos en JavaScript para lograr la solución.

*/

let vehiculos = {
    'Tesla Model 3': 12,
    'Ford Focus': 40,
    'Toyota Corolla': 25,
    'Honda Civic': 30
    };

const keysVehiculos = (vehiculos) => {
    return Object.keys(vehiculos);
    }

console.log(keysVehiculos(vehiculos));  