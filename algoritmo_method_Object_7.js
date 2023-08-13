// Object.freeze()
// El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.

// Algoritmo de ejemplo:

const objeto1 = {
    propiedad1: 42
};

Object.freeze(objeto1);

objeto1.propiedad1 = 33;

console.log(objeto1.propiedad1);
