// Array.prototype.forEach()
// El forEach()método ejecuta una función proporcionada una vez para cada elemento de la matriz.


// Algoritmo de ejemplo:

const array=[1,2,3,4,5,6,7,8,9,10];

const array2=array.forEach((elemento,indice,array)=>{
    console.log(elemento);
}
);

// Otro ejemplo:

const array3=[1,2,3,4,5,6,7,8,9,10];

const array4=array3.forEach((elemento,indice,array)=>{
    console.log(elemento*2);
}
);


