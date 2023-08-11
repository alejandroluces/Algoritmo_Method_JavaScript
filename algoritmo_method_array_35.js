/*
Enunciado
Desarrolla una función en JavaScript que reciba un array de números enteros y retorne un nuevo array con los elementos en orden inverso utilizando el método toReversed() que deberás implementar.

Entrada
La entrada consistirá en un array de números enteros llamado numbers, que contendrá los siguientes elementos:

javascript
Copy code
var numbers = [5, 12, 8, 130, 44];
Salida
La función deberá imprimir en consola el array con los elementos en orden inverso. La salida esperada sería:

csharp
Copy code
[44, 130, 8, 12, 5]
Nota: Asegúrate de que la función toReversed() realice la acción correspondiente de revertir el array, ya que no es un método nativo de JavaScript.
*/

const numbers = [5, 12, 8, 130, 44];

const toReversed = (numbers) => {
    let reversed = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    return reversed;
    }

console.log(toReversed(numbers));

//Como puedo usar el metodo toRversed() en el array?