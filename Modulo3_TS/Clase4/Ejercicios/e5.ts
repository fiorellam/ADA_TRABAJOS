// Actividad 5: Usar aserciones dobles

// Crea una variable de tipo any y haz una conversión con aserciones dobles para
// convertirla en un number. Muestra el resultado.


// La razón del problema
// El tipo any le permite a TypeScript aceptar cualquier tipo, pero una aserción de tipo (as number) no transforma el valor. Si el valor es un string como "1998", la aserción de tipo no lo convierte en un número real.

// Entonces, cuando haces:
// let number: number = (variable as any) as number;
// No estás realmente convirtiendo la cadena "1998" en un número; solo estás diciendo que el compilador trate el valor como number, pero el valor real sigue siendo un string.

// La solución correcta
// Si quieres convertir una cadena en un número, deberías usar funciones como Number() o parseInt(), que realizan la conversión real del valor:
let variable: any = "1998";
let number: number = (variable as any) as number;
console.log(typeof number);
console.log(number);


// let variable2: any = "1998";
// // Conversión real a number usando Number()
// let number2: number = Number(variable2);

// console.log(typeof number2);  // Esto debería imprimir 'number'
// console.log(number2);         // Esto imprimirá 1998
