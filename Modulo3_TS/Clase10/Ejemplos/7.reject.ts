const error = "Algo salió mal";

export const miPromesa = Promise.reject(error);

miPromesa
    .catch((error) => {
        console.error("Error de la promesa: ", error);
    })