// Ejercicio 1: Actualizar datos de un usuario
// Crea un endpoint PUT para actualizar la información de un usuario
// existente en la lista. El cliente debe enviar el ID del usuario como
// parámetro dinámico en la URL (por ejemplo, /users/1) y los nuevos datos
// del usuario en el cuerpo de la solicitud en formato JSON.
// • Si el usuario no existe, responde con un error 404.
// • Si los datos enviados son incompletos (falta name o email),
// responde con un error 400.
// • Si todo está correcto, actualiza los datos del usuario y responde con
// el usuario actualizado.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Fiorella", email:"fiorellaroma@gmail.com"},
    {id: 2, name: "Juan", email: "juan@gmail.com"}
]
app.get('/users/', (req, res) => {
    if(users.length > 0){
        return res.status(201).json(users);
    } else {
        return res.status(404).json({error: "Aun no existen usuarios"});
    }
})
app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if(userIndex === -1){
        return res.status(404).json({error: "Usuario no encontrado"});
    }
    if(!name || !email){
        return res.status(400).json({error: "Datos incompletos. Se requiere name y email"});
    }

    users[userIndex] = {id: parseInt(id), name, email};
    res.json(users[userIndex]);
});
// Servidor en ejecución
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/users`);
});