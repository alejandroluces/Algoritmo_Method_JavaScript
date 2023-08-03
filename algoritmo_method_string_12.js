// Cadena.prototipo.trimEnd()
// El trimEnd()método elimina los espacios en blanco del final de una cadena y devuelve una nueva cadena, sin modificar la cadena original. trimRight()es un alias de este método.

let cadena = "  Hola, mundo          !                              ";
const deleteSpace =(a) =>{
    return a.trimEnd()
}
console.log(deleteSpace(cadena));


let cadenaSecond = "           -Hola, mundo dos        !                              ";
const deleteSpaceStard =(b) =>{
    return b.trimStard()
}
console.log(deleteSpace(cadenaSecond));