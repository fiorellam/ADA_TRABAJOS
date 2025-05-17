// Ejercicio 3: Usar parámetros dinámicos con :id
// Consigna: En este ejercicio, vamos a permitir que el cliente busque información
// de un usuario por su ID. Crea un endpoint GET que reciba un parámetro
// dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar
// este valor y busca al usuario correspondiente en una lista. Si no se encuentra el
// usuario, responde con un error 404.

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let usuarios = [
    {id: 1, name: "Fiorella", email: "fiorellaroma@hotmail.com"}, 
    {id: 2, name: "Ximena", email:"ximena@gmail.com"},
    {id: 3, name: "mena", email:"a@gmail.com"}
]

app.get('/', (req, res) => {
    res.status(200).send("Bienvenida al ejercicio 3 Params dinamicos");
})
app.get('/usuarios/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = usuarios.find(u => u.id === parseInt(userId));
    if(!user){
        res.status(404).send("User not found")
    } else {
        res.json(user);
    }
})
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})