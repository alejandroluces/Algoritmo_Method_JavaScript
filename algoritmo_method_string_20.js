// Cadena.raw()
// El String.raw()método estático es una función de etiqueta de literales de plantilla . Esto es similar al rprefijo en Python, o al @prefijo en C# para cadenas literales. Se utiliza para obtener la forma de cadena sin formato de los literales de plantilla, es decir, ${foo}se procesan las sustituciones (p. ej., ), pero \nno las secuencias de escape (p. ej.).

// Enunciado:
// Desarrolle un algoritmo en JavaScript que tome una plantilla literal que contiene secuencias de escape (como \n para una nueva línea o \t para una tabulación) y utilice el método String.raw para obtener la representación en crudo de dicha cadena. La cadena resultante deberá contener las secuencias de escape tal como están, sin interpretarlas.

// Entrada:
// Una cadena de texto que contiene secuencias de escape. Puede ser algo como:

// javascript
// Copy code
// var plantilla = "Línea 1\\nLínea 2\\tTabulado";
// Salida esperada en consola:
// La consola debe mostrar la cadena de entrada tal cual, sin interpretar las secuencias de escape. Siguiendo el ejemplo anterior, la salida en consola sería:

// swift
// Copy code
// "Línea 1\\nLínea 2\\tTabulado"
// Nota: La función String.raw() en JavaScript es utilizada para acceder a la representación en crudo de las plantillas literales de cadena, sin procesar las secuencias de escape. En este caso, se quiere que el algoritmo muestre las secuencias de escape tal como aparecen en la cadena original, sin interpretarlas.

// solucion:
// javascript

// Copy code
/* EJEMPLO 1 

let mensaje = tag`Hola ${1 + 2} mundo\notro texto`;


function tag(strings, ...values) {
  console.log(strings.raw[0]);
  console.log(strings.raw[1]);
  console.log(strings.raw[2]);
  console.log(values[0]);
  console.log(values[1]);
}

*/

// Enunciado:
// Desarrolle un algoritmo en JavaScript que reciba como entrada una cadena de texto con rutas de archivos que contienen backslashes (\) y utilice el método String.raw para mostrar la representación literal de las rutas, sin que los backslashes sean interpretados como caracteres de escape.

// Entrada:
// Una cadena de texto que contiene varias rutas de archivos utilizando backslashes. Por ejemplo:

// javascript
// Copy code
// var rutas = "C:\\Program Files\\MyApp\\file.txt, D:\\Documents\\image.jpg";
// Salida esperada en consola:
// La consola debe mostrar la representación literal de las rutas, manteniendo los backslashes intactos. Siguiendo el ejemplo anterior, la salida en consola sería:

// swift
// Copy code
// "C:\\Program Files\\MyApp\\file.txt, D:\\Documents\\image.jpg"
// Nota: En Windows, las rutas de archivos utilizan backslashes (\), que también son caracteres de escape en JavaScript. Usar String.raw permite mostrar la ruta tal como se desea, sin interpretar los backslashes como caracteres de escape.

// SOLUCION:
// javascript

// Copy code

let ruta = String.raw`C:\Program Files\MyApp\file.txt, D:\Documents\image.jpg`;
console.log(ruta);

// Nota: En Windows, las rutas de archivos utilizan backslashes (\), que también son caracteres de escape en JavaScript. Usar String.raw permite mostrar la ruta tal como se desea, sin interpretar los backslashes como caracteres de escape.
