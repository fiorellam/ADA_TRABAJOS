// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
// método “push” en los Arrays. ¡Este método lo veremos en las próximas
// clases, pero si desean pueden investigarlo para resolver este desafío!

let matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];
let sumaRojo = 0
let sumaVerde = 0;
//Sumar diagonal roja
for(let fila = 0; fila < matriz.length; fila++){
    sumaRojo += matriz[fila][fila];
}
console.log("Rojo ", sumaRojo);
//Sumar diagonal verde
for(let fila = matriz.length -1; fila >= 0; fila-- ){
    sumaVerde += matriz[fila][fila];
}
console.log("Verde ",sumaVerde);