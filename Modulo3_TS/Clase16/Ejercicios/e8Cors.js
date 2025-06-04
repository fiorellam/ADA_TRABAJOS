// Ejercicio 8: Configuración básica de CORS:
// Descripción:
// 1. Configura un servidor para permitir solicitudes desde
// cualquier origen.
// 2. Crea un endpoint GET /data que devuelva un objeto JSON con
// datos simples.
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

const data = {data: "Data 1", type: "json"};
const corsOptions = {
    origin: 'http://example.com',
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


