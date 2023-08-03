// Enunciado:
// Cree un algoritmo en JavaScript que tome una cadena de texto y encuentre todas las direcciones de correo electrónico dentro de esa cadena. Utilice el método match() con una expresión regular adecuada para identificar las direcciones de correo electrónico.

// Entrada:
// Una cadena de texto que puede contener varias direcciones de correo electrónico. Por ejemplo:

// javascript
// Copy code
// var texto = "Puede contactarnos en support@example.com o en sales@example.net. Para más información, visite www.example.org.";
// Salida esperada en consola:
// La consola debe mostrar todas las direcciones de correo electrónico encontradas en la cadena dada. Siguiendo el ejemplo anterior, la salida en consola sería:

// perl
// Copy code
// "support@example.com, sales@example.net"
// Nota: La salida en consola puede ser diferente si la cadena de entrada es diferente.

// Solución:
// javascript
// Copy code
let texto = "Puede contactarnos en support@example.com o en sales@example.net. Para más información, visite www.example.org."
let regex = /\w+@\w+\.\w+/g
const filtrBi =(a) =>{
    let b = a.match(regex)
    return b
}
console.log(filtrBi(texto))