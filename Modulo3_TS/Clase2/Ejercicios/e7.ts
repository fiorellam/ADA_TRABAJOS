// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.
let empleado : {nombre: string, salario: number, porcentajeAumento: number };

function aumentarSalario(empleado: {nombre: string, salario: number, porcentajeAumento: number}){
    let resultadoAumento = empleado.salario *  (1 + (empleado.porcentajeAumento/ 100));
    return resultadoAumento;
}
empleado = {nombre: 'Jimena', salario: 100, porcentajeAumento:15};
console.log(`Resultado de aumento de salario del empleado: ${empleado.nombre} \n salario anterior: ${empleado.salario} salario nuevo: ${aumentarSalario(empleado)}`)