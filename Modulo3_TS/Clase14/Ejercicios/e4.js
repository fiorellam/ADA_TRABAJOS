// Ejercicio 4: Contar usuarios con un dominio específico en su
// correo
// Crea un endpoint GET que reciba un parámetro de consulta (query
// parameter) llamado domain. El endpoint debe contar cuántos usuarios
// tienen un correo electrónico que pertenezca a ese dominio (por ejemplo,
// @example.com) y devolver el resultado.
// • Si no se proporciona el parámetro domain, responde con un error
// 400.
// • Si ningún usuario tiene un correo con ese dominio, devuelve 0.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Fiorella", email:"fiorellaroma@gmail.com"},
    {id: 2, name: "Juan", email: "juan@gmail.com"}
]

app.get('/users/count', (req, res) => {
    const {domain} =  req.query;
    if(!domain){
        return res.status(400).json({error: "El parametro 'domain' es requerido"})
    }

    const count = users.filter(user => user.email.endsWith(domain)).length;
    res.status(200).json({domain, count});
})

app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/count`);
})