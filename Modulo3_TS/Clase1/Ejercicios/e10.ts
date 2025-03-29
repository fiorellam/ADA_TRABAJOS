// Ejercicio 10: Uso de objetos
// Declara un objeto en TypeScript con propiedades de tipo string, number y
// boolean. Accede a estas propiedades e imprímelas en la consola.

// En TypeScript un objeto se escribe exactamente igual que en JavaScript,
//  pero con una gran diferencia en cuanto a funcionalidad:

// Este objeto tiene una estructura implícita que TypeScript hace que el dev deba
//  respetar, podemos ver que el objeto solo tiene 2 propiedades: nombre de tipo 
//  string y edad de tipo number, ergo la estructura sería la siguiente:

//Referencia https://dev.to/duxtech/fundamentos-de-typescript-5-objetos-4l71
let objectNew : {
    nombre: string,
    edad: number,
    estudiante: boolean
} = {
    nombre: "Fiore",
    edad: 26,
    estudiante: true,
}

console.log(objectNew.nombre);
console.log(objectNew.edad);
console.log(objectNew.estudiante);