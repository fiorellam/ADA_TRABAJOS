// Ejercicio 1: GET y POST de usuarios:
// Descripción:
// 1. Crea un arreglo inicial de usuarios con propiedades id y name:
// Por ejemplo: { id: 1, name: “Emma”}
// 2. Implementa dos endpoints:
// • GET /users: Devuelve la lista de usuarios.
// • POST /users: Permite agregar un usuario enviando un objeto
// con id y name en el body.
// 3. Si faltan datos, responde con un error adecuado.
// Pistas:
// • Usa app.get() y app.post() para manejar las rutas.
// • Utiliza req.body para capturar los datos enviados en la solicitud
// POST.
// • Asegúrate de usar express.json() c
const express = require('express')

const app = express();
const PORT = 3000;
const users = [
    {id: 1, name: "Fiore"},
    {id: 2, name: "Ximena"}
]

app.use(express.json());

app.get('/api/', (req, res) => {
    res.send('Bienvenidas al ejercicio1');
})
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

app.post('/api/users', (req, res) => {
    const {name} = req.body;
    if(!name){
        res.status(400).send('No se pudo agregar usuario, hace falta el nombre')
    }
    res.status(201).send(`Usuario creado ${name}`);
    const newid = users.length + 1;
    users.push({id: newid, name}); 

})
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
