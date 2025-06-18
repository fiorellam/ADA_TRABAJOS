// Actividad 3: Crear un Middleware Personalizado
// Consigna:
// 1. Implementa un middleware para registrar en la consola cada
// solicitud recibida con su método y URL.
// 2. Úsalo en la API para registrar todas las solicitudes.
const express = require('express');
const app = express();

app.use(express.json());

const requestRegister = (req, res, next) => {
    console.log(`Solicitus recibida: ${req.method} ${req.url}`);
    next();
}

app.use(requestRegister);