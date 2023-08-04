// Array.prototype.concat()
// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// Algoritmo de ejemplo:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const merchArray =(array1,array2) =>{

return array1.concat(array2);  
}
console.log(merchArray(array1,array2));

// EJEMPLO 2

// Enunciado:
// Dado dos arrays de números, el algoritmo debe utilizar el método concat() para combinar ambos arrays en uno nuevo. Luego, debe imprimir este nuevo array en la consola.

// Entrada:
// Array 1: [5, 10, 15, 20]
// Array 2: [25, 30, 35, 40]

// Salida Esperada:
// En la consola, se debe imprimir: [5, 10, 15, 20, 25, 30, 35, 40]

// Nota: El método concat() se utiliza para combinar dos o más arrays en uno solo. En este caso, los arrays especificados se combinan en el orden dado para formar el nuevo array, que luego se imprime en la consola.

// Solución:

const array3 = [5, 10, 15, 20];
const array4 = [25, 30, 35, 40];

const merchArray2 =(array3,array4) =>{

return array3.concat(array4);  

    

}
console.log(merchArray2(array3,array4))
;
