//Ejemplo 1: recorrer un array con for... in y con for...of

let autos = ["Toyota", "Honda", "Tesla"];
console.log("Recorremos el array con for...in");
for(let indice in autos){
    console.log(`Indice: ${indice}, Auto:${autos[indice]}`);
}

console.log("\nRecorremos el array con for...of");
for(let auto of autos){
    console.log(`Auto: ${auto}`);
}

console.log("---------------------------");
//Ejemplo 2: recorremos un objeto con for...in y for...of
export let auto = {
    marca: "Tesla",
    modelo: "Model S",
    anio: 2023
}

console.log("Recorremos el objeto con for...in");
for(let propiedad in auto){
    console.log(`Clave: ${propiedad}, valor: ${auto[propiedad as keyof typeof auto]}`); 
}

console.log("\nRecorremos el objeto con for...of");
// for(let valor of auto){
//     console.log(valor); 
// }

