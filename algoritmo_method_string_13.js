// Enunciado:
// Queremos desarrollar un programa que tome como entrada un objeto Number y utilice el método valueOf() para obtener su valor primitivo. Posteriormente, el programa deberá imprimir este valor primitivo en la consola.

// Entrada:
// Un objeto Number con un valor específico. Por ejemplo:

// javascript
// Copy code
// var numero = new Number(42);
// Algoritmo:
// Tomar el objeto Number como entrada.
// Utilizar el método valueOf() en el objeto Number para obtener su valor primitivo.
// Imprimir el valor primitivo resultante en la consola.
// Salida:
// La salida que se mostrará en la consola será el valor primitivo del objeto Number. Para la entrada dada, la salida sería:

// Copy code
// 42

let numero = new Number(42);
const newNumb =(a) =>{
    return a.valueOf();      
}
console.log(newNumb(numero));



let objetoString = new String("Hola, "); 
let cadenaAdicional = "mundo!";
const str =(a,b) =>{
    return a.valueOf()+b;

}
console.log(str(objetoString,cadenaAdicional));
