// Array.prototype.at()
// El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

// algoritmo de ajemplo:
const array = [1, 2, 3, 4, 5];
const nombre =(array,index) =>{

return array.at(index);
}
console.log(nombre(array,2));

// EJEMPLO 2


// Enunciado:
// Dado un array de palabras y un índice numérico, el algoritmo debe utilizar el método at() para obtener la palabra ubicada en el índice especificado del array. Luego, debe imprimir esta palabra en la consola. Si el índice está fuera del rango del array, el algoritmo debe imprimir un mensaje de error específico.

// Entrada:
// Array de palabras: ["manzana", "banana", "cereza", "durazno", "frambuesa"]
// Índice numérico: 2

// Salida Esperada:
// En la consola, se debe imprimir: "cereza"

// Nota: El índice 2 se refiere al tercer elemento del array, ya que los índices en JavaScript comienzan en 0. Por lo tanto, el método at(2) debería devolver "cereza" en este caso.

// Solución:

const array2 = ["manzana", "banana", "cereza", "durazno", "frambuesa"];
const index = 2;

if (index >= array2.length || index < -array2.length) {
    console.log("El índice está fuera del rango del array");
    }
    else {
    console.log(array2.at(index));
    }


