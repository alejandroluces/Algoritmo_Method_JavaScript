// Array.prototype.toLocaleString()
// El método toLocaleString() devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su método toLocaleString y dichos Strings son separados por un caracter específico para la localidad (como una coma para la separación de decimales ",").

// Algortimo de ejemplo:

const meses = ['Marzo',"Agosto", 'Enero', 'Diciembre', 'Febrero'];

const meses2 =(meses)=> meses.toLocaleString();

console.log(meses2(meses));

// Otro ejemplo:

/*
Enunciado
Supongamos que tienes un sistema de gestión de ventas y necesitas mostrar una lista de precios en diferentes monedas y formatos locales para los usuarios de diferentes países. Tu tarea es convertir una lista de precios en una moneda específica a la representación local usando el método toLocaleString() en JavaScript.

Entrada
Un array de números, donde cada número representa el precio de un producto en una moneda particular (por ejemplo, dólares estadounidenses).
Una cadena que representa el código del idioma y la región local a la que se desea convertir los precios (por ejemplo, 'es-ES' para España, 'en-US' para Estados Unidos, etc.).
Un objeto que representa las opciones de formato de moneda (por ejemplo, el estilo de la moneda y el código de moneda).
Ejemplo de entrada:

javascript
Copy code
const precios = [99.99, 249.99, 499.99];
const locale = 'es-ES';
const opcionesMoneda = { style: 'currency', currency: 'EUR' };
Salida
El algoritmo debe imprimir en consola la lista de precios formateada de acuerdo con el idioma y las opciones de moneda proporcionadas. La salida en consola para el ejemplo de entrada debería ser:


["99,99 €", "249,99 €", "499,99 €"]
Nota
El método toLocaleString() en JavaScript se utiliza para representar una cadena con un formato específico de idioma. Puede ser utilizado con números para representar cantidades monetarias en diferentes monedas y formatos locales. Para este enunciado, necesitas utilizar este método para convertir una lista de precios a una representación local, basada en los parámetros de entrada proporcionados.

*/

const precios = [99.99, 249.99, 499.99];
const locale = 'es-ES';
const opcionesMoneda = { style: 'currency', currency: 'EUR' };

const precios2 = (precios, locale, opcionesMoneda) => precios.toLocaleString(locale, opcionesMoneda);

console.log(precios2(precios, locale, opcionesMoneda));
//quiero meter esa funcion en un array y que me devuelva un array con los precios en euros
const precios3 = (precios, locale, opcionesMoneda) => precios.map((precio)=>precio.toLocaleString(locale, opcionesMoneda));

console.log(precios3(precios, locale, opcionesMoneda));
