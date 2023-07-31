// Una cadena de texto.

// Enunciado:

// Declare una variable cadena y asigne la cadena de texto ingresada por el usuario.
// Use el método charCodeAt() para obtener el código ASCII del primer carácter de la cadena.
// Imprima el código ASCII en la consola.
// Salida:

// El código ASCII del primer carácter de la cadena.
// El código ASCII del carácter "H" es 72.

// Primer ejercicio
/* 


let pracCharCode="Hola mundo"

let findH=pracCharCode.charCodeAt(0)

console.log(findH);


*/

// Enunciado del algoritmo:

// Debes diseñar un algoritmo en JavaScript que reciba una cadena de texto y retorne un nuevo array que contenga los códigos ASCII de cada uno de los caracteres de la cadena, utilizando el método charCodeAt(). En caso de que la cadena esté vacía, el algoritmo debe retornar un mensaje diciendo: "La cadena de texto está vacía".

// Entrada propuesta:

// La entrada de datos será la siguiente cadena de texto: "OpenAI GPT-4"

// Salida esperada en consola:

// La salida que debería aparecer en la consola sería: [79, 112, 101, 110, 65, 73, 32, 71, 80, 84, 45, 52]

let string="OpenAI GPT-4"

const searchCodeAt =(st) =>{

    let array=[]
    if(st.length===0){return `La cadena esta vacia`}
    else{
        for(let i=0;i<st.length;i++){
            array.push(st.charCodeAt(i))
        }
        return array
    }


}

console.log(searchCodeAt(string));
