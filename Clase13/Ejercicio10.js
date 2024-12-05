// • Ejercicio 10: Factorial de un número (Ejercicio entrevista)
// Crea una función expresada llamada calcularFactorial que reciba un
// número y devuelva su factorial.
// Fórmula del factorial:
let calcularFactorial = function(numero){

    if(numero == 0){
        return 1;
    }
    //Inicio en numero - 1, para poder multiplicar el numero que me den por -1
    //Debe repetirse este ciclo hasta que inicio sea mayor igual que uno
    //Vamos decrementando
    for(let inicio = numero-1 ; inicio >= 1; inicio--){
        //Numero va a guardar el resultado de 5 X 4
        numero = numero * inicio;
    }
    return numero;

    //Otra forma de resolverlo
    // for(let inicio = numero ; inicio > 1; inicio--){
    //     //Numero va a guardar el resultado de 5 X 4
    //     numero = numero * (inicio-1);
    // }
    // return numero;
}

console.log(calcularFactorial(5));
