 
//  Ejercicio 1: Rutas GET y POST simples
// 1. Objetivo: Crear un servidor con Node.js que maneje rutas GET y POST
// básicas.
// 2. Instrucciones:
// o Crea un servidor usando express.
// o Define las siguientes rutas:
// ▪ GET /hello: Responde con un mensaje JSON que diga: {
// message: "Hola, mundo!" }.
// ▪ POST /hello: Recibe un JSON con un campo name y responde
// con: { message: "Hola, [nombre]!" }, donde [nombre] es el valor
// enviado.
// 3. Pasos para probar con Postman:
// o Haz una solicitud GET a http://localhost:3000/hello y verifica la
// respuesta.
// o Haz una solicitud POST a http://localhost:3000/hello enviando un
// body como:
// {
//  "name": "Ana"
// }
// Verifica que el servidor responda con: { message: "Hola, Ana!" }.
const express = require('express');
const app = express();
const PORT = 3000;

//body-parser para leer JSON
app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ message: 'Hola, mundo!' });
});

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hola, ${name}!` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

