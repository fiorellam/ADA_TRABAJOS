// Ejercicio 2: Eliminar un usuario
// Crea un endpoint DELETE para eliminar un usuario de la lista utilizando un
// parámetro dinámico :id en la URL (por ejemplo, /users/1).
// • Si el usuario no existe, responde con un error 404.
// • Si el usuario es eliminado exitosamente, responde con un mensaje
// confirmando la eliminación.
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
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id === parseInt(id, 10));
    if(index === -1) return res.status(404).json({error: "Usuario no encontrado"});
    const deletedUser = users.splice(index, 1);
    res.status(200).json({ message: "Usuario eliminado", usuario: deletedUser[0] });
});
// Servidor en ejecución
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/users`);
});