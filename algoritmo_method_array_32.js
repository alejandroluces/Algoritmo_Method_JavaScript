// Array.prototype.sort()
// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

// Algortimo de ejemplo:

const meses = ['Marzo',"Agosto", 'Enero', 'Diciembre', 'Febrero'];
//quiero ordenarlos de forma cronologica segun el calendario

const mesesOrdenados = (meses)=> meses.sort()

console.log(mesesOrdenados(meses));

// otro ejemplo:

/*
Enunciado
Tienes un array de libros en una biblioteca, donde cada libro es representado como un objeto que contiene información sobre el título y el año de publicación. El objetivo de este algoritmo es ordenar la lista de libros en orden ascendente según su año de publicación utilizando el método sort() en JavaScript.

Entrada
Un array de objetos, donde cada objeto representa un libro con las siguientes propiedades:

titulo: Una cadena que representa el título del libro.
anioPublicacion: Un número que representa el año de publicación del libro.
Ejemplo de entrada:

javascript
Copy code
const libros = [
  { titulo: "Cien años de soledad", anioPublicacion: 1967 },
  { titulo: "Fahrenheit 451", anioPublicacion: 1953 },
  { titulo: "Don Quijote de la Mancha", anioPublicacion: 1605 },
  { titulo: "1984", anioPublicacion: 1949 }
];
Salida
El algoritmo debe imprimir en consola la lista de libros ordenados por su año de publicación en orden ascendente. La salida en consola debería ser:

yaml
Copy code
[
  { titulo: "Don Quijote de la Mancha", anioPublicacion: 1605 },
  { titulo: "Fahrenheit 451", anioPublicacion: 1953 },
  { titulo: "1984", anioPublicacion: 1949 },
  { titulo: "Cien años de soledad", anioPublicacion: 1967 }
]
Nota
Para lograr esto, deberás utilizar el método sort() de los arrays en JavaScript. Este método toma una función de comparación opcional que puedes utilizar para especificar cómo deben ser ordenados los libros en función de su año de publicación. Sin una función de comparación adecuada, sort() ordenará los elementos como cadenas, lo cual puede no dar los resultados esperados en este caso.

*/

const libros = [
    { titulo: "Cien años de soledad", anioPublicacion: 1967 },
    { titulo: "Fahrenheit 451", anioPublicacion: 1953 },
    { titulo: "El mañana es hoy", anioPublicacion: 1949 },
    { titulo: "Cien años de soledad", anioPublicacion: 1967 }
    ];

const ordenarLibros = (libros) => libros.sort((a,b)=> a.anioPublicacion - b.anioPublicacion)

console.log(ordenarLibros(libros));
