//2. Intervalo con condicion de parada
//Este intervalo se detendra automaticamente cuando
//el contador llegue a 5

export let contador = 0;
const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador(con condicion): ${contador} `);
    if(contador === 5){
        clearInterval(intervalo); //cancela el intervalo cuando el contador llega a 5
        console.log("Intervalo con condicion detenido al llegar a 5");
    }
}, 1000);
//Este segundo intervalo se ejecuta hasta que el contador llegue a 5
//despues de lo cual se detiene automaticamente
console.log("Intervalo con condicion iniciado");
