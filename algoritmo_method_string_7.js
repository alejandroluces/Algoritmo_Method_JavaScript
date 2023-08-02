// Enunciado del algoritmo:

// Se te proporcionan varios números, cada uno de los cuales representa un punto de código Unicode. Tu tarea es utilizar el método fromCharCode() en JavaScript para convertir estos puntos de código en una cadena de texto.

// Entrada: 72, 101, 108, 108, 111

// Salida esperada: 'Hello'

let array= [72, 101, 108, 108, 111]

const extraeSaludo =(a) =>{

    let saludo = String.fromCharCode(...a);
    return saludo;
  
  
}

console.log(extraeSaludo(array));
