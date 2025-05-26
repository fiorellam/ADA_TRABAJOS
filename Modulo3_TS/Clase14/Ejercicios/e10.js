// Ejercicio 10: Buscar un usuario por nombre exacto en una API
// externa
// Crea un endpoint GET /external/users/search que reciba un parámetro de
// consulta (name) y busque un usuario cuyo nombre coincida exactamente
// en la API pública https://jsonplaceholder.typicode.com/users.
// • Si no se encuentra un usuario con ese nombre, devuelve un error
// 404.
// • Si el parámetro name no está presente, responde con un error 400.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
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

app.get('/external/users/search', async (req, res) => {
    const {name} = req.query;

    if (!name) {
        return res.status(400).json({ error: "Se requiere el parámetro 'name'." });
    }

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const userFound = users.find(user => user.name === name);

        if (!userFound) {
            return res.status(404).json({ error: `No se encontró un usuario con el nombre '${name}'` });
        }

        res.status(200).json(userFound);
    } catch (error) {
        res.status(500).json({ error: "Error al comunicarse con la API externa." });
    };
})
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/external/users/search`);
})