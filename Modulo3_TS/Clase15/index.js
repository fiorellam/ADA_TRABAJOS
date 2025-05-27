//Importaciones 
const express = require('express');
const jwt = require('jsonwebtoken');

//Instancia de express
const app = express();
// Puerto
const PORT = 3000;

//Clave secreta
SECRET_KEY = 'TODO_NODE';

//Middleware para validar el token
function verifyToken(req, res, next){
    const authHeader = req.headers['authorization'] //Los tokens suelen enviarse con el header de autorizacion
    const token = authHeader && authHeader.split(' ')[1] //Si existe el header, que extraiga el token

    if(!token){
        return res.status(401).json({message: 'Token no ingresado'});
    }

    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded // se agrega la info del usuario objeto de la solicitud
        next();
    } catch(error){
        res.status(401).json({message: 'Token invalido o expirado'});
    }
} 
//Rutas para generar un token
//Ruta simple para obtener usuario
app.get('/login', ( req, res) => {
    //En un caso real se verifica con bd
    const user = {
        id: 1, 
        name: 'Fiorella',
        email: 'fiore@gmail.com',
        role: 'admin'
    }

    //Creamos el token
    const token = jwt.sign(user, SECRET_KEY, {expiresIn: '1h'});
    //inicio de sesion
    res.json({
        message: 'Inicio de sesion exitoso',
        token: token
    })
})

//ruta protegida
app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message: 'Acceso concecido a ruta protegida',
        user: req.user
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:3000/`)
})

