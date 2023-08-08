// matriz.prototipo.filter()
// El filter()método crea una copia superficial de una parte de una matriz dada, filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.

// Algoritmo de ejemplo:

let array = ["Loro", "Perro", "Gato", "Caballo", "Vaca", "Cerdo", "Cabra", "Oveja", "Burro", "Pato", "Gallina", "Paloma", "Pez", "Tortuga", "Conejo", "Ratón", "Rana", "Sapo", "Serpiente", "Tiburón", "Ballena", "Delfín", "Pulpo", "Cangrejo", "Langosta", "Camarón", "Cucaracha", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Araña", "Mosca", "Mosquito", "Abeja", "Avispa"];

let array2 = array.filter((elemento, indice, array) => {
    return elemento.length <5;
}
);

console.log(array2);