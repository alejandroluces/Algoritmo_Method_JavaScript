// Cadena.prototipo.repetir()
// El repeat()método construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la que se llamó, concatenadas juntas.

// Algoritmo de ejemplo:

function repeatStringNumTimes(str, num) {
    // repite después de mí
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str;
        string
    }
    return string;
}
console.log(repeatStringNumTimes("abc", 5));

// Otro ejemplo:

function repeatStringNumTimesTwo(letter, code) {
    let string = "";
    while (code > 0) {
        string += letter;
        code--;
    }
    return string;
}
console.log(repeatStringNumTimesTwo("Sara", 5));
    

