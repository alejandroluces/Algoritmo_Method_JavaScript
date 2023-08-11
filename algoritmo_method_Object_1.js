// Object.assign()
// El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

// Algoritmo de ejemplo:
const objeto1 = {
    a: 1,
    b: 2,
    c: 3
};  
const objeto2 = {
    d: 4,
    e: 5,
    f: 6
};
const objeto3 = {
    g: 7,
    h: 8,
    i: 9
};

const objeto4 = Object.assign(objeto1, objeto2, objeto3);

console.log(objeto4);



