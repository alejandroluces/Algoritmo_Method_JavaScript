// El indexOf()método de Stringvalores busca esta cadena y devuelve el índice de la primera aparición de la subcadena especificada. Toma una posición de inicio opcional y devuelve la primera aparición de la subcadena especificada en un índice mayor o igual que el número especificado.


// Enunciado del algoritmo:

// Debes diseñar un algoritmo en JavaScript que tome dos cadenas de texto: una cadena principal y una subcadena a buscar. El algoritmo debe utilizar el método indexOf() para determinar la primera aparición de la subcadena dentro de la cadena principal. Si la subcadena está presente, el algoritmo debe retornar un mensaje que indique la posición en la cual se encontró. Si no está presente, debe retornar un mensaje que diga: "La subcadena no está presente en la cadena principal".

// Entrada propuesta:

// Cadena principal: "¡Bienvenido a OpenAI, la inteligencia artificial!"
// Subcadena a buscar: "OpenAI"
// Salida esperada en consola:

// La salida que debería aparecer en la consola sería: "La subcadena fue encontrada en la posición 15".

// En este caso, la subcadena "OpenAI" está presente en la cadena principal y comienza en la posición 15 (los índices en JavaScript comienzan en 0), por lo que el método indexOf() retornará 15, y el mensaje correspondiente será mostrado en la consola.

// solucion

let cadenaPrincipal = "¡Bienvenido a OpenAI, la inteligencia artificial!";
let subCadena = "OpenAI";

const searchSub =(a,b) =>{
    let index = a.indexOf(b);
    
    if(index !== -1){
        console.log(`La subcadena fue encontrada en la posición ${index}`);
    }else{
        console.log("La subcadena no está presente en la cadena principal");
    }
    
    
}
console.log(searchSub(cadenaPrincipal,subCadena));
