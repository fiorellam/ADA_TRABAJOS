// • Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un
// bucle que los atiende de a uno. Realiza lo siguiente:


// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contadorClientes = 0;
while(clientes.length > 0){
    // 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
    let clienteActual = clientes.shift();
    console.log("Esta siendo atendido ", clienteActual);
    
    // 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
    if(clienteActual == 'VIP'){
        console.log('El cliente Actual es VIP tiene prioridad');
    }
    contadorClientes++;
}
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
console.log(`Fueron atendidos: ${contadorClientes} clientes`);