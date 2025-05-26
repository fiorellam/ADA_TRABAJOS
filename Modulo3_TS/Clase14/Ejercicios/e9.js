// Ejercicio 9: Simular una búsqueda con una API externa
// Crea un endpoint GET /external/users que realice una solicitud HTTP a
// una API pública para obtener una lista de usuarios. Luego, devuelve los
// datos obtenidos al cliente.
// • Usa la API pública: https://jsonplaceholder.typicode.com/users.
// • Asegúrate de que el cliente reciba los datos correctamente desde la
// API externa.
const express = require('express');
const app = express();
const port = 3000;
app.get('/external/users', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error al obtener datos externos:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos de la API externa' });
    }
});
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/external/users`);
})