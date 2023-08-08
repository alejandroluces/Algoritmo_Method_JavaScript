// Array.prototype.find()
// El find()método devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, undefinedse devuelve.

// Algoritmo de ejemplo:

const array=[1,2,3,4,5,6,7,8,9,10];

const array2=array.find((elemento,indice,array)=>{
    return elemento>5;
}
);

console.log(array2);

// Otro ejemplo usando dos parámetros element e index:

const array3=[1,2,3,4,5,6,7,8,9,10];

const array4=array3.find((element,index)=>{
    return element>5;
}
);

console.log(array4);
