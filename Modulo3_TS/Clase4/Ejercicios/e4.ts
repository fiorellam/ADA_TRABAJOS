// Actividad 4: Usar aserciones de tipo

// Declara una variable de tipo any y usa una aserción para tratarla como string,
// accediendo a la propiedad .length.
let variableAny : any = "Hola!"
let longitudVariable: number = (variableAny as string).length;

console.log(longitudVariable);
