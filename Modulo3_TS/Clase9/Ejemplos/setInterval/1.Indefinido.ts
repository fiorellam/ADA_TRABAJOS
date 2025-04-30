//1. Intervalo indefinido: (cancelacion manual)
// El set interval() seguira ejecutandose hasta que lo detengamos manualmente
let contador = 0;

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador(indefinido): ${contador}`);

    //aqui podriamos llamar a clearInterval(intervalo) en algum momento
    //para detener el intervalo. Por ejemplo, podrias tener una logica
    //consicional o externa o un evento que lo detenga, pero en este caso
    //lo dejamos correr indefinidamente
    
}, 1000);
console.log("Intervalo indefinido iniciado");
