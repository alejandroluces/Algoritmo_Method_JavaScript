// Cadena.prototipo.padStart()
// El padStart()método rellena la cadena actual con otra cadena (varias veces, si es necesario) hasta que la cadena resultante alcanza la longitud dada. El relleno se aplica desde el principio de la cadena actual.

// algoritmo ejemplo:

// Desarrolle un algoritmo en JavaScript que tome una cadena de texto y la rellene con un carácter determinado hasta que la cadena alcance una longitud determinada. Para rellenar la cadena, utilice el método padStart() con los parámetros adecuados.

// Entrada:

// Una cadena de texto, un carácter y un número. Por ejemplo:

// javascript

// Copy code

let texto = "Alejandro"
let caracter = "*"
let numero = 19

const str =(a,b,c) =>{
return a.padStart(c,b)  
}
console.log(str(texto,caracter,numero))
