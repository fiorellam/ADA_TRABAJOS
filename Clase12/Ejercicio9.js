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
console.log(`Menú de opciones \n 1. Total de gastos de una semana en específico \n 2. Total de un día en particular
 3. Gasto total de un mes \n 4. Obtener la semana en que más gastos se realizaron \n 5. Obtener el día en que más gastos se realizaron`)
let opcion = parseInt(prompt(`Escribe el número de la opción que deseas: `));
switch(opcion){
    case 1:
        //A) Hace la suma de ganancias dependiendo de la semana que indique el usuario
        //Pregunta al usuario el dia de la semana de la que quiere saber el total de gastos
        let semana = parseInt(prompt("Ingresa la semana de la que deseas calcular el total: "));
        let sumaSemana = 0;
        for(let i = 0; i < matrizGastosDia[semana].length; i++){
            sumaSemana += matrizGastosDia[semana-1][i]; 
        }
        console.log(`El total de la semana ${semana} es de $${sumaSemana}\n`);
        break;

    case 2: 
        //B) Da el gasto de un dia en especifico
        let numeroDia = parseInt(prompt("Ingresa el dia que quieres saber "));
        //Creo un arreglo que contendrá todos los valores de la matriz, es decir todos los días del mes
        let arregloGastosDia = [];
        //Recorro la matriz
        for(let i = 0; i < matrizGastosDia.length; i++){
            for(let j = 0; j < matrizGastosDia[i].length; j++){
                arregloGastosDia.push(matrizGastosDia[i][j]); //Voy agregando cada uno de los valores de la matriz al arreglo
            }
        }
        console.log(`El gasto del día ${numeroDia} es de ${arregloGastosDia[numeroDia-1]}\n`)
        break;
    case 3:
        //C)Hace la suma de los gastos en el mes
        let sumaTotalGastos = 0;
        for(let i = 0; i < matrizGastosDia.length; i ++){
            for (let j = 0; j < matrizGastosDia[i].length; j++){
                sumaTotalGastos += matrizGastosDia[i][j];
            }
        }
        console.log(`El total de gastos en el mes es de ${sumaTotalGastos} \n`);
        break;

    case 4:
        //D) Obtener cuál fue la semana que más gastos se realizaron
        let sumaSemanal = 0;
        let totalSemanasArray = [];
        for(let i = 0; i < matrizGastosDia.length; i++){
            for(let j = 0; j < matrizGastosDia[i].length; j++){
                sumaSemanal += matrizGastosDia[i][j];
            }
            // console.log(`Esta semana gastaste: ${sumaSemanal}`);
            totalSemanasArray.push(sumaSemanal);
            sumaSemanal = 0;
        }
        // console.log('Imprimiendo arreglo totalSemanasArray', totalSemanasArray);
        let gastoMayorSemana = 0;
        let numeroSemana;
        for( let i = 0; i< totalSemanasArray.length; i++ ){
            if(totalSemanasArray[i] > gastoMayorSemana){
                gastoMayorSemana = totalSemanasArray[i];
                numeroSemana = i;
            }
        }
        console.log(`El gasto Mayor por semana fue de ${gastoMayorSemana}, y fue la semana ${numeroSemana + 1}`);
        break;
    case 5: 
    //D) Obtener cuál fue la semana que más gastos se realizaron
    let diasArray = [];
    for(let i = 0; i < matrizGastosDia.length; i++){
        for(let j = 0; j < matrizGastosDia[i].length; j++){
            diasArray.push(matrizGastosDia[i][j]);
        }
    }
    // console.log('Imprimiendo arreglo diasArray', diasArray);
    let numeroDiaPosicion;
    let diaMayorGastos = 0;
    for( let i = 0; i< diasArray.length; i++ ){
        if(diasArray[i] > diaMayorGastos){
            diaMayorGastos = diasArray[i];
            numeroDiaPosicion = i;
        }
    }
    console.log(`El día que más se gastó fue el ${numeroDiaPosicion + 1}, y se gastó ${diaMayorGastos}`);
    break;
    default:
        console.log(`LA OPCION QUE INGRESASTE NO ES VALIDA`);
}        