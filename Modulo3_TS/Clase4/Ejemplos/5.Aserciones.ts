//Ejemplo 1: asercion basica de tipo 'any' a 'string'
let valorGenerico: any = "typescript es increible";
//console.log(valorGenerico.length)

let longitudDeString: number = (valorGenerico as string).length
console.log(longitudDeString);
console.log("---------------------------------");

//Ejemplo 2: Aserciones con tipos de union
function obtenerNombreEnMayuscula(nombre: string | null): string{
    if(nombre){
        return (nombre as string).toUpperCase();
    } else {
        return "Nombre no proporcionado"
    }
}

//Ponemos a prueba la funcion
console.log(obtenerNombreEnMayuscula("ana"));
console.log(obtenerNombreEnMayuscula(null));

console.log("---------------------------------");

//Ejemplo 3: Uso de aserciones con unknown
let valorDesconocido: unknown = "Este es un valor desconocido";
// console.log(valorDesconocido.length); //valorDesconocido is of type 'unknown'

//Como no podemos acceder a sus propiedades de forma directa, usamos
//asercion de tipo
if(typeof valorDesconocido === 'string'){
    let longitud : number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
}

//Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles)
let valor: any = 'Este es un valor';
let valorNumerico = (valor as unknown as string).length; //primero se tiene como desconocido y luego como number
console.log(`Valor numerico con asercion doble: ${typeof valorNumerico}`);

//Ejemplo 5: Precauciones en aserciones
let valorErroneo: any = 42;
let textoErroneo = valorErroneo as string;
console.log(textoErroneo.length); //undefined porque length no existe en number


