// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
// función debe retornar el área de la figura. Usa tipos específicos para cada caso.

//1RA FORMA DE HACERLO, MAS BASICA
function calcularArea(tipoFigura: 'circulo' | 'rectangulo', radio?: number, largo?:number, ancho?:number): number{
    let area: number = 0;
    if(tipoFigura === 'circulo' && radio){
        area = Math.PI * Math.pow(radio,2);
    } else if(tipoFigura === 'rectangulo' && largo && ancho){
        area = largo * ancho
    } else {
        console.log('Error');
    }
    return area;
}
console.log("Área del círculo:", calcularArea('circulo', 5));
console.log("Área del rectángulo:", calcularArea('rectangulo', undefined, 10, 5));

//2DA FORMA DE HACERLO
function calcularArea2(figura: string, ...parametros: number[]): number {
    if (figura === "circulo" && parametros.length === 1) {
        // Cálculo del área del círculo
        const radio = parametros[0];
        return Math.PI * radio * radio;
    } else if (figura === "rectangulo" && parametros.length === 2) {
        // Cálculo del área del rectángulo
        const [largo, ancho] = parametros;
        return largo * ancho;
    } else {
        throw new Error("Parámetros incorrectos para el tipo de figura.");
    }
}

const areaCirculo = calcularArea2("circulo", 5);
console.log(`Área del círculo: ${areaCirculo}`);

const areaRectangulo = calcularArea2("rectangulo", 10, 5);
console.log(`Área del rectángulo: ${areaRectangulo}`);