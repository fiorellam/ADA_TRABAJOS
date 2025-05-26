// Ejercicio 3: Filtrar usuarios por nombre
// Crea un endpoint GET que reciba un parámetro de consulta (query
// parameter) llamado name y devuelva una lista de usuarios cuyo nombre
// coincida parcial o totalmente con el valor enviado. Si no se encuentra
// ningún usuario, devuelve un arreglo vacío.
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

app.get('/users/search', (req, res) => {
    const {name} = req.query;

    if(!name){
        return res.status(400).json({error: "El parametro 'name' es requerido"});
    }

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(name.toLowerCase())
    );

    res.status(200).json(filteredUsers);
})
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/search`);
})