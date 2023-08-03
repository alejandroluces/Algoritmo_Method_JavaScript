// Cadena.prototipo.matchAll()
// El matchAll()método devuelve un iterador de todos los resultados que coinciden con una cadena con una expresión regular , incluidos los grupos de captura .

// Enunciado:
// Desarrolle un algoritmo en JavaScript que tome una cadena de texto y encuentre todas las ocurrencias de números de teléfono en formato internacional (como +1-555-555-5555). Para identificar estos números, utilice el método matchAll() con una expresión regular adecuada.

// Entrada:
// Una cadena de texto que puede contener varios números de teléfono en formato internacional. Por ejemplo:

// javascript
// Copy code
// var texto = "Puedes llamar a la oficina en +1-555-123-4567 o al soporte en +44-20-7946-0958. También está disponible el +81-3-1234-5678 en Japón.";
// Salida esperada en consola:
// La consola debe mostrar todas las ocurrencias de números de teléfono en formato internacional encontrados en la cadena dada. Siguiendo el ejemplo anterior, la salida en consola sería:

// arduino
// Copy code
// "+1-555-123-4567, +44-20-7946-0958, +81-3-1234-5678"
// Nota: El formato internacional de un número de teléfono puede variar, pero para este enunciado, asuma que los números seguirán el patrón mostrado en el ejemplo de entrada, comenzando con un símbolo más, seguido por el código de país, y luego los dígitos del número, separados por guiones.

// Solución:
// javascript
// Copy code

// Usando el metodo matchAll() y una expresion regular que filtre los numeros de telefono en formato internacional.

// Salida esperada en consola:
// La consola debe mostrar todas las ocurrencias de números de teléfono en formato internacional encontrados en la cadena dada. Siguiendo el ejemplo anterior, la salida en consola sería:

// arduino
// Copy code
// "+1-555-123-4567, +44-20-7946-0958, +81-3-1234-5678"
let texto = "Puedes llamar a la oficina en +1-555-123-4567 o al soporte en +44-20-7946-0958. También está disponible el +81-3-1234-5678 en Japón."
// Expresion regular que filtra los numeros de telefono en formato internacional.
let dividirString = (texto) => {
    texto.split(" ").forEach(element => {
        let regex = /\+\d+-\d+-\d+-\d+/g
        let a = element.matchAll(regex)
        for (const iterator of a) {
            console.log(iterator[0])
        }
    }
    )
}
dividirString(texto)
// Path: dev.js
/*
1. La función split() separa el string en un arreglo de strings. En este caso, el separador es el espacio.
2.	La función forEach() itera el arreglo y ejecuta la función que se le pasa como parámetro para cada elemento del arreglo.
3.	La variable regex almacena la expresión regular que filtra los números de teléfono en formato internacional.
4.	La función matchAll() devuelve un iterador con todas las coincidencias entre el string y la expresión regular.
5.	La variable a almacena el iterador que devuelve matchAll().
6.	La estructura for…of itera a través de objetos iterables (como el iterador de matchAll()) y ejecuta la función que se le pasa como parámetro para cada elemento del objeto iterable. 
*/