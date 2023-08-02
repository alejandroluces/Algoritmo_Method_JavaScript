// Cadena.prototipo.codePointAt()
// El codePointAt()método de Stringvalores devuelve un entero no negativo que es el valor de punto de código Unicode del carácter que comienza en el índice dado. 
// Tenga en cuenta que el índice aún se basa en unidades de código UTF-16, no en puntos de código Unicode.



// Enunciado del algoritmo:

// Se te proporciona una cadena de texto, y debes usar el método codePointAt() en JavaScript 
// para obtener el código Unicode del primer carácter de la cadena.

// Entrada: "JavaScript"

// Salida esperada: 74

// El método codePointAt() devuelve un número entero que es el punto de código Unicode del carácter en el índice proporcionado. 
// En este caso, el primer carácter es "J", y su punto de código Unicode es 74. Recuerda que los índices en JavaScript comienzan en 0, 
// por lo que el primer carácter se encuentra en el índice 0.

let array= "JavaScript"
let result=array.codePointAt()

console.log(result);

