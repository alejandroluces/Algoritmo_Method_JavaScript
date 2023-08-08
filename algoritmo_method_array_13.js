
// Array.prototype.flatMap()
// El flatMap()método devuelve una nueva matriz formada al aplicar una función de devolución de llamada determinada a cada elemento de la matriz y luego aplanar el resultado en un nivel. Es idéntico a map()seguido de a flat()de profundidad 1 ( arr.map(...args).flat()), pero un poco más eficiente que llamar a esos dos métodos por separado.


const array=[1,2,5,2,5]

const result=array.flatMap((num)=> (num===5 ? [num*2] : -1))

console.log(result)
