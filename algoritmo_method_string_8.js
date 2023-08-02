// Enunciado del algoritmo:

// Debes diseñar un algoritmo en JavaScript que reciba una cadena de texto y un índice. Utilizando el método codePointAt(), el algoritmo debe encontrar y retornar el valor del punto de código Unicode en la cadena en la posición del índice proporcionado. Si el índice está fuera del rango de la cadena o si la cadena está vacía, el algoritmo debe retornar un mensaje que diga: "Índice fuera de rango" o "La cadena de texto está vacía", respectivamente.

// Entrada propuesta:

// La entrada de datos será la siguiente cadena de texto: "🙂🙃😉", y el índice será 1.

// Salida esperada en consola:

// La salida que debería aparecer en la consola sería: 128579

// En este caso, el valor retornado corresponde al punto de código Unicode del segundo carácter en la cadena de entrada, que es el emoji "🙃".

// Solución:

let cadena = "🙂🙃😉";
const findCode =(a,b) =>{

    if(a.length === 0){
        return "La cadena de texto está vacía";
    }else if(b > a.length){
        return "Índice fuera de rango";
    }else{
        let code = a.codePointAt(b);
        return code;
    }
}

console.log(findCode(cadena,2));
