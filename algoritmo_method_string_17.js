// Cadena.prototipo.normalizar()
// El normalize()método devuelve la forma de normalización Unicode de la cadena.

// algoritmo ejemplo:
// Desarrolle un algoritmo en JavaScript que tome una cadena de texto y la normalice a Unicode. Para normalizar la cadena, utilice el método normalize() con el parámetro "NFD".
// Entrada:
// Una cadena de texto. Por ejemplo:
// javascript
// Copy code
let texto = "El niño se cayó al suelo y se hizo daño."
// Salida esperada en consola:
// La consola debe mostrar la cadena de texto normalizada a Unicode. Siguiendo el ejemplo anterior, la salida en consola sería:
// arduino
const aplcNorm =(a) =>{
    console.log(a.normalize("NFD"))

}
aplcNorm(texto)