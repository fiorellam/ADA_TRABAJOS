// Se está realizando el desarrollo de una aplicación para control de gastos. 
//Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana 
//y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. 
//Columna 0, día 1, columna 1, día 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana.
// Recordemos que cada fila representa una semana, es decir, si nos
// indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
// que las matrices comienzan siempre en posición 0.
// b) La aplicación también tendrá una parte de estadísticas, para esto
// nos solicitan dar el total de un día en particular, por ejemplo del día 3, 
//acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
// día que más gastos se realizaron. ✓ Posibles matrices para comprobar los resultados
const prompt = require("prompt-sync")();
let matrizGastosDia = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];
//Pregunta al usuario el dia de la semana de la que quiere saber el total de gastos
let semana = parseInt(prompt("Ingresa la semana de la que deseas calcular el total: "));

//A) Hace la suma de ganancias dependiendo de la semana que indique el usuario
let sumaSemana = 0;
for(let fila = 0; fila < matrizGastosDia[0].length; fila++){
    // console.log(matrizGastosDia[semana-1][fila]);
    sumaSemana += matrizGastosDia[semana-1][fila]; 
}
console.log(`El total de la semana ${semana} es de $${sumaSemana}\n`);

//B) Da el gasto de un dia en especifico
let numeroDia = parseInt(prompt("Ingresa el dia que quieres saber "));
//Creo un arreglo que contendrá todos los valores de la matriz
let arregloGastosDia = [];
//Recorro la matriz
for(let fila = 0; fila < matrizGastosDia.length; fila++){
    for(let col = 0; col < matrizGastosDia[fila].length; col++){
        //Voy agregando cada uno de los valores de la matriz al arreglo
        arregloGastosDia.push(matrizGastosDia[fila][col]);
    }
}
console.log(`El gasto del día ${numeroDia} es de ${arregloGastosDia[numeroDia-1]}\n`)

//C)Hace la suma de los gastos en el mes
let sumaTotalGastos = 0;
for(let fila = 0; fila < matrizGastosDia.length; fila ++){
    for (let col = 0; col < matrizGastosDia[fila].length; col++){
        sumaTotalGastos += matrizGastosDia[fila][col];
    }
}
console.log(`El total de gastos en el mes es de ${sumaTotalGastos} \n`);

