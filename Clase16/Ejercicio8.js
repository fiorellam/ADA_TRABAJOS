// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
// saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
// devolverlo.
let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreEncontrado = nombres.filter(function(nombre){
    return nombre == 'Laura';
})
console.log(nombreEncontrado);