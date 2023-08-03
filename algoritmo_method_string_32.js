// Enunciado del algoritmo:

// Debes diseñar un algoritmo en JavaScript que tome un número y una base (por ejemplo, 2 para binario, 8 para octal, 16 para hexadecimal). El algoritmo debe utilizar el método toString(base) para convertir el número dado a su representación en la base especificada. Si la base no es un valor válido (por ejemplo, es menor que 2 o mayor que 36), el algoritmo debe retornar un mensaje que diga: "Base no válida". De lo contrario, debe retornar la representación del número en la base especificada.

// Entrada propuesta:

// Número: 255
// Base: 16
// Salida esperada en consola:

// La salida que debería aparecer en la consola sería: "ff".

// En este caso, el número 255 se convierte a su representación hexadecimal utilizando la base 16, por lo que el método toString(16) retornará "ff", y este valor será mostrado en la consola.

// Solucion:

let numero=255;
let base=16;

const toStr =(numero,base) =>{

    return numero.toString(base);

}

console.log(toStr(numero,base));



