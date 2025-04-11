// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos

function funcionGenericaRetorna<T>(valor : T): T{
    return valor;
}

export let numero = funcionGenericaRetorna<number>(56);
console.log(`Ejemplo de uso con tipo number: ${numero}`);

export let string = funcionGenericaRetorna<String>("Hola! esto es un string");
console.log(`Ejemplo de uso con tipo string: ${string}`);

let booleanType = funcionGenericaRetorna<Boolean>(true);
console.log(`Ejemplo de uso con tipo boolean: ${booleanType}`);

let arrayType = funcionGenericaRetorna<number[]>([3,4,5]);
console.log(`Ejemplo de uso de un arreglo de tipo number: ${arrayType}`);

let objectType = funcionGenericaRetorna<{ nombre: string }>({nombre: 'Fiore'});
console.log(`Ejemplo de uso de un objeto: ${objectType}`);
console.log(`Ejemplo de uso de un objeto: ${JSON.stringify(objectType)}`);