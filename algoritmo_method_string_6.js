// String.prototype.endsWith()

// El endsWith()método determina si una cadena termina con los caracteres de una cadena especificada, 
// regresando true o false según corresponda.

// Enunciado del algoritmo:

// Se te proporciona una cadena de texto y un sufijo, debes usar el método endsWith() en JavaScript para verificar si la cadena de texto proporcionada termina con el sufijo dado.

// Entrada: Cadena de texto - "Hola, Mundo!", Sufijo - "Mundo!"

// Salida esperada: true

// El método endsWith() verifica si una cadena de texto termina con los caracteres de otra cadena, devolviendo true o false según corresponda. En este caso, la cadena "Hola, Mundo!" sí termina con el sufijo "Mundo!", por lo tanto, la salida esperada es true.

let string= "Hola, Mundo!"

let result=string.endsWith("do!")

console.log(result);
