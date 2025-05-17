// Ejercicio 4: Practicando desestructuración de objetos
// Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud:
// {
//  "name": "Katherine Johnson",
//  "email": "katherine@example.com",
//  "age": 42
// }
// Crea un endpoint POST que use desestructuración para extraer name y email.
// Luego, responde con un mensaje que incluya estos valores. Si el cliente envía
// datos incompletos, responde con un error 400.
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bienvenidas al ejercicio 4 de desestructuracion");
})

app.post('/usuarios', (req, res) => {
    const  {name, email, age} = req.body;
    if(!name || !email || !age){
        res.status(400).send(`No se pudo agregar usuario`);
    } else {
        res.status(201).send(`Usuario creado ${name}, ${email}`)
        usuarios.push({name, email});
         res.json({ message: `Usuario ${name} con correo ${email} agregado con éxito` });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})