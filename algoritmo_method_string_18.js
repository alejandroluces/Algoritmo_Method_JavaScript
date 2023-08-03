// Cadena.prototipo.padEnd()
// El padEnd()método rellena la cadena actual con una cadena determinada (repetida, si es necesario) para que la cadena resultante alcance una longitud determinada. El relleno se aplica desde el final de la cadena actual.

// algoritmo ejemplo:
// Desarrolle un algoritmo en JavaScript que tome una cadena de texto y la rellene con un carácter determinado hasta que la cadena alcance una longitud determinada. Para rellenar la cadena, utilice el método padEnd() con los parámetros adecuados.
// Entrada:
// Una cadena de texto, un carácter y un número. Por ejemplo:
// javascript
// Copy code
let texto = "Hola"
let caracter = "!"
let numero = 10
// Salida esperada en consola:
// La consola debe mostrar la cadena de texto rellenada con el carácter dado hasta que la cadena alcance la longitud dada. Siguiendo el ejemplo anterior, la salida en consola sería:
// arduino
// Copy code
// "Hola!!!!!"
const str =(a,b,c) =>{
    
    return a.padEnd(c,b)

}
console.log(str(texto,caracter,numero))

// otro ejemplo:
// javascript
// Copy code

let textoDos = "Alejandro Luces Gonzalez"
let caracterDos = "!Y Sara!"
let numeroDos = 50

const strDos =(d,e,f) =>{
        
        return d.padEnd(f,e)
    
    }
    console.log(strDos(textoDos,caracterDos,numeroDos))