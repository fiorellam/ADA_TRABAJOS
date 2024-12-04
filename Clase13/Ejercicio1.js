// Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
// Crea una función declarada llamada calcularAreaTriangulo que reciba dos
// parámetros: la base y la altura de un triángulo. La función debe devolver el
// área del triángulo.
// Pista: Usa la fórmula: 
const prompt = require("prompt-sync")();

let base = parseFloat(prompt("Ingresa la base: "));
let altura = parseFloat(prompt("Ingresa la altura: "));

function calcularAreaTriangulo(base, altura){
    let area = (base * altura) / 2;
    return area;
}
console.log("El área del triangulo es ", calcularAreaTriangulo(base, altura));