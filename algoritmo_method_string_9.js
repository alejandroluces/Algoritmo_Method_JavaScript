// El includes()método realiza una búsqueda que distingue entre mayúsculas y minúsculas para determinar si una cadena se puede encontrar dentro de otra cadena, regresando trueo falsesegún corresponda.

// Enunciado del algoritmo:

// Debes diseñar un algoritmo en JavaScript que tome dos cadenas de texto: una cadena principal y una subcadena a buscar. El algoritmo debe utilizar el método includes() para determinar si la subcadena se encuentra dentro de la cadena principal. Si la subcadena está presente, el algoritmo debe retornar un mensaje que diga: "La subcadena está presente en la cadena principal". Si no está presente, debe retornar: "La subcadena no está presente en la cadena principal".

// Entrada propuesta:

// Cadena principal: "¡Bienvenido a OpenAI!"
// Subcadena a buscar: "OpenAI"
// Salida esperada en consola:

// La salida que debería aparecer en la consola sería: "La subcadena está presente en la cadena principal".

// En este caso, la subcadena "OpenAI" está presente en la cadena principal "¡Bienvenido a OpenAI!", por lo que el método includes() retornará true, y el mensaje correspondiente será mostrado en la consola.

// Solución:

var cadenaPrincipal = "¡Bienvenido a OpenAI!";
var subcadena = "OpenAI";

const findSub =(stringOne,stringTwo) =>{

    if(stringOne.includes(stringTwo)){
        return "La subcadena está presente en la cadena principal"
    }else{
        return "La subcadena no está presente en la cadena principal"
    }
}

console.log(findSub(cadenaPrincipal,subcadena));
