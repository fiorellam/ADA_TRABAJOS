// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
// valores.
let unknownVar: unknown;
unknownVar = 45;
let result: any;
result = typeof(unknownVar);
console.log(result);


unknownVar = "Holaaa";
result = typeof(unknownVar);
console.log(result);

unknownVar = true;
result = typeof(unknownVar);
console.log(result);

