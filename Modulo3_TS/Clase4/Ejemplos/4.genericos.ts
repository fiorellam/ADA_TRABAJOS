//Ejemplo de funcion generica
function identidad<T> (valor: T): T{
    return valor;
}

//Ejemplo de uso de la funcion
let numero = identidad<number>(10);
console.log(`Ejemplo de uso con tipo number: ${numero} `);

let texto = identidad<string>("holiii");
console.log(`Ejemplo de uso con tipo string: ${texto} `);