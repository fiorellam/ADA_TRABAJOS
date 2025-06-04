// Ejercicio 9: Configuración de CORS para un dominio específico:
// Descripción:
// 1. Configura un servidor para permitir solicitudes solo desde
// http://localhost:3000.
// 2. Crea un endpoint GET que devuelva un mensaje simple,
// accesible solo desde ese dominio.
// Pistas:
// • Usa el paquete cors para configurar las políticas.
// • Define el origen permitido en la configuración de CORS.

const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

const data = {data: "Data 1", type: "json"};
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT']
}
app.use(cors(corsOptions));
app.use(express.json());

app.get('/',  (req, res) => {
    res.status(200).json(data);
})
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
