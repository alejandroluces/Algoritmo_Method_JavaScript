// Enunciado:
// Se desea desarrollar un programa en JavaScript que tome como entrada dos cadenas de texto en un idioma específico y compare su orden lexicográfico utilizando el método localeCompare(). El resultado de la comparación debe ser mostrado en la consola.

// Entrada:
// Dos cadenas de texto para comparar y el idioma local (opcional). Por ejemplo:

// javascript
// Copy code
// var cadena1 = "gato";
// var cadena2 = "perro";
// var idioma = "es"; // Español (opcional)
// Algoritmo:
// Tomar como entrada las dos cadenas de texto y el idioma local (si se proporciona).
// Utilizar el método localeCompare() en la primera cadena, pasando la segunda cadena como argumento, y el idioma local si se ha proporcionado.
// Evaluar el resultado retornado por localeCompare():
// Si el resultado es negativo, imprimir en la consola que la primera cadena es menor que la segunda.
// Si el resultado es positivo, imprimir en la consola que la primera cadena es mayor que la segunda.
// Si el resultado es cero, imprimir en la consola que ambas cadenas son iguales.
// Salida:
// La salida en la consola variará según la comparación de las cadenas. Para la entrada dada, la salida sería:

// arduino
// Copy code
// La cadena 'gato' es menor que la cadena 'perro'.

// Solución:
// javascript
// Copy code
let cadena1 = "dino";
let cadena2 = "dino";
let idioma = "es"; // Español (opcional)

const compare =(cadena1,cadena2) =>{
    let resultado = cadena1.localeCompare(cadena2,idioma,idioma);
    if(resultado<0){
        console.log(`La cadena ${cadena1} es menor que la cadena ${cadena2}`);
    }else if(resultado>0){
        console.log(`La cadena ${cadena1} es mayor que la cadena ${cadena2}`);
    }else{
        console.log(`La cadena ${cadena1} es igual que la cadena ${cadena2}`);
    }
}

console.log(compare(cadena1,cadena2,idioma));


// OTRO EJEMPLO
let nombres = ["Zöllner", "Ärger", "Müller", "Forst"];
let leng = "de";

const compareDOS =(a,b) =>{
    return a.localeCompare(b,leng);

}
console.log(nombres.sort(compareDOS));

