// Ejercicio 5: Agregar múltiples usuarios con validación
// Crea un endpoint POST que permita agregar múltiples usuarios en una
// sola solicitud. El cuerpo de la solicitud debe ser un arreglo de objetos con
// name y email.
// • Si algún objeto del arreglo no tiene los campos requeridos,
// responde con un error 400 indicando específicamente qué usuario
// es inválido.
// • Si todo está correcto, agrega los usuarios a la lista y responde con
// la lista actualizada.
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

app.post('/users/multiple-users', (req, res) => {
    const newUsers = req.body;

    if (!Array.isArray(newUsers)) {
        return res.status(400).json({ error: "El cuerpo debe ser un arreglo de usuarios." });
    }

    for(let i = 0; i < newUsers.length; i++){
        const {name, email} = newUsers[i];
        if(!name || !email){
            return res.status(400).json({error: `El usuario en la posición ${i} tiene datos incompletos.`})
        }
    }
    // Obtener el último ID usado
    let lastId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    const usuariosValidados = newUsers.map(user => {
        lastId += 1;
        return { id: lastId, ...user };
    });
    users = users.concat(usuariosValidados);

    res.status(201).json(users);
})
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/multiple-users`);
})