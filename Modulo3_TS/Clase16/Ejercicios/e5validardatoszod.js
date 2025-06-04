// Ejercicio 5: Validar datos de usuarios con Zod:

// Descripción:
// 1. Crea un esquema con Zod para validar que los datos de un
// usuario incluyan un id numérico y un name de tipo string.
// 2. Valida los datos enviados en un endpoint POST antes de
// agregarlos al arreglo.
// Pistas:
// • Usa z.object() para definir el esquema de validación.
// • Emplea .parse() o .safeParse() para validar los datos.
const express = require('express')
const { z } = require("zod");
const app = express();
const PORT = 3000;
const users = [
    {id: 1, name: "Fiore"},
    {id: 2, name: "Ximena"}
]

const userSchema = z.object({
    name: z.string()
})

app.use(express.json());

app.get('/api/', (req, res) => {
    res.send('Bienvenidas al ejercicio1');
})
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

app.post('/api/users', (req, res) => {
    const {name} = req.body;
    try{
        const userData = userSchema.parse(req.body);
        
        if(!name) res.status(400).send('No se pudo agregar usuario, hace falta el nombre');
        
        res.status(201).json({success: `Usuario creado ${name}`, data: userData});
        const newid = users.length + 1;
        users.push({id: newid, name}); 
    } catch(error){
        res.status(400).json({success: false, errors: error.errors})
    }
})

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
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
