// Ejercicio 3: PATCH y DELETE para usuarios:
// Descripción:
// Implementa dos endpoints adicionales para el CRUD de usuarios:
// • PATCH /users/:id: Permite actualizar el name de un usuario.
// • DELETE /users/:id: Elimina un usuario por id.
// Pistas:
// • Usa req.params para capturar el ID de la ruta.
// • Valida que el usuario exista antes de realizar la operación.
const express = require('express');

const app = express();
const PORT = 3000;
const users = [
    {id: 1, name: "Fiore"},
    {id: 2, name: "Ximena"}
];

app.use(express.json());

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

app.patch('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const index = users.findIndex((user) => user.id === parseInt(id));
    if(index === -1) return res.status(404).json('User not found');
    users[index].name = name;

    res.status(200).json(users[index]);
})

app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if(index === -1) return res.status(404).json('User not found');
    const userDeleted = users[index]
    users.splice(index, 1);
    res.status(203).json(userDeleted);
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/users`)
});