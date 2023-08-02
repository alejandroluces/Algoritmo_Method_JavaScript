// Cadena.prototipo.concat()
// El concat()método concatena los argumentos de cadena a la cadena de llamada y devuelve una nueva cadena.



// Enunciado del algoritmo:

// Se te proporcionan dos cadenas de texto, y debes usar el método concat() en JavaScript para unir estas dos cadenas en una sola.

// Entrada: "Hola, ", "Mundo!"

// Salida esperada: "Hola, Mundo!"

// El método concat() se utiliza para combinar dos o más cadenas de texto. En este caso, se te proporcionan dos cadenas: "Hola, " y "Mundo!". Al usar concat(), 
// estas dos cadenas se unirán para formar una sola cadena: "Hola, Mundo!".

// Solución:

var cadena1 = "Hola, ";
var cadena2 = "Mundo!";
const concatStr =(a,b) =>{
    return a.concat(b)

}

console.log(concatStr(cadena1,cadena2));
