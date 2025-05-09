const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado pending. La operacion ha comenzado...");

    //Simulamos una operacion asincrona

    setTimeout(() => {
        //Genera un valor booleano aleatorio: true = exito / false: fallo

        const exito = Math.random() > 0.5;
        if (exito) {
            resolve("La operacion se ha completado con exito.");
        } else {
            reject("La operacion ha fallado.");
        }
    }, 2000);           
});

//Manejo de la promeda
miPromesa
    .then((resultado) => {
        console.log("Exito ", resultado);
    })
    .catch((error) => {
        console.log("Error " , error);
    })
    .finally(() => {
        console.log("Promesa finalizada");
    });

