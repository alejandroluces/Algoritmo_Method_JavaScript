// Cadena.prototipo.búsqueda()
// El search()método ejecuta una búsqueda de una coincidencia entre una expresión regular y este Stringobjeto.

// algoritmo de ejemplo:

let str = "Tengo un perro y un gato, pero el perro es mas grande que el gato";

const newStr = (a) => {
    return a.search("gato");
}

console.log(newStr(str));

// otro ejemplo:
// Entrada
let texto = "Hola, soy Bing. Me gusta buscar cosas.";
let patron = /Bing/;
const nombre =(c,d) =>{
    return c.search(d);

}
console.log(nombre(texto,patron));