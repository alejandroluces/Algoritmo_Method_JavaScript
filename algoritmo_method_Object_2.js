// Object.create()
// El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

// Algoritmo de ejemplo:
/* 
const objeto1 = {
    a: 1,
    b: 2,
    c: 3
};



const objeto2 = Object.create(objeto1);

console.log(objeto2);

*/

//Otro ejemplo:

/*
Enunciado:
Se desea implementar un sistema de información para una cadena de tiendas de libros. Tienes que desarrollar una función en JavaScript que reciba un objeto con las características de una tienda de libros y retorne un nuevo objeto que herede las propiedades de la tienda original. Además, deberás añadir una nueva propiedad para identificar la región donde se encuentra la tienda.

La función recibirá un objeto que represente la tienda original con las siguientes propiedades:

nombre: Nombre de la tienda (String).
direccion: Dirección de la tienda (String).
catalogo: Array con los títulos de libros disponibles (Array de Strings).
Y un string que represente la región donde se encuentra la tienda.

La función deberá utilizar el método Object.create() para crear el nuevo objeto de tienda, y asignar la nueva propiedad region al objeto resultante.

Entrada:
Un objeto con las características de la tienda original:

javascript
Copy code
const tiendaOriginal = {
  nombre: "Librería Central",
  direccion: "Calle Principal 123",
  catalogo: ["Don Quijote", "Cien Años de Soledad", "El Principito"]
};

const region = "Norte";
Salida esperada en consola:
La función deberá imprimir el siguiente objeto en consola:

javascript
Copy code
{
  nombre: "Librería Central",
  direccion: "Calle Principal 123",
  catalogo: ["Don Quijote", "Cien Años de Soledad", "El Principito"],
  region: "Norte"
}
Notas:
El objeto resultante debe heredar las propiedades del objeto original.
La nueva propiedad region debe ser añadida al objeto resultante.

*/


const tiendaOriginal = {
    nombre: "Librería Central",
    direccion: "Calle Principal 123",
    catalogo: ["Don Quijote", "Cien Años de Soledad", "El Principito"]
};

const region = "Norte";
const tiendaNueva = Object.assign({}, tiendaOriginal);
tiendaNueva.region = region;
console.log(tiendaNueva);
