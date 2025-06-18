// Ejercicio 4: CRUD básico (solo parte inicial)
// 1. Objetivo: Implementar las rutas iniciales de un CRUD para gestionar
// usuarios.
// 2. Instrucciones:
// o Define las siguientes rutas:
// ▪ GET /users: Responde con una lista de usuarios (puede ser un
// array estático).
// ▪ POST /users: Recibe un JSON con id, name y email, y responde
// con { message: "Usuario creado", user: [datos del usuario] }.
// 3. Pasos para probar con Postman:
// o Haz una solicitud GET a /users para obtener la lista de usuarios.
// o Haz una solicitud POST a /users enviando un JSON como:
// {
//  "id": 1,
//  "name": "Ana",
//  "email": "ana@example.com"
// }
// Verifica que la respuesta incluya el mensaje y los datos enviados.
const express = require('express');
const app = express();
const PORT = 3000;
const users = []; // Array para almacenar usuarios

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    users.push({ id, name, email });
    res.json({ message: 'Usuario creado', user: { id, name, email } });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});