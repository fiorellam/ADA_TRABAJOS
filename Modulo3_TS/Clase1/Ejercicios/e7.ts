// Ejercicio 7: Tipos literales
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en
// TypeScript.
let dia: "Lunes" | "Martes" | "Miercoles";
dia = "Lunes";
console.log(dia)
//dia = "jueves"
//El error que aparece al querer asignarle ese valor a la variable dia es
//"type" jueves is not assignable to type '"Lunes" | "Martes" | "Miercoles"'