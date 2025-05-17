// Ejercicio 1: Creando un Endpoint GET para listar usuarios
// Consigna: Imagina que tienes una aplicación que necesita mostrar una lista de
// usuarios. Tu tarea es crear un endpoint GET en Express que responda con un
// listado de usuarios en formato JSON. Cada usuario debe tener un nombre
// (name) y un correo electrónico (email).
// Utiliza el método res.json() para enviar la respuesta. Asegúrate de que el
// servidor funcione correctamente en el puerto 3000 y de imprimir un mensaje en
// la consola al iniciarlo.
const express = require('express');
const app = express(); //Instancia de express
const PORT = 3000;

app.use(express.json());

let usuarios = [
    {name: "Fiorella", email: "fiorellaroma@hotmail.com"}, 
    {name: "Ximena", email:"ximena@gmail.com"}
]

app.get('/', (req, res) => {
    res.status(200).send("Hola! Bienvenida al ejercicio 1");
})
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
