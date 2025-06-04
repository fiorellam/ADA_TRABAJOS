// Ejercicio 10: Middleware básico de autenticación
// Descripción:
// 1. Crea un middleware de autenticación que verifique si la solicitud
// incluye un token en el encabezado Authorization.
// 2. Si el token está presente, permite que la solicitud continúe.
// 3. Si no hay un token, responde con un código de estado 403 y un
// mensaje de "No autorizado".
// Pista:
// • Usa req.headers.authorization para acceder al encabezado de
// autorización.
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

const SECRET_KEY = "miclaveeee";

function verifyToken(req, res, next) {
    const  authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Token no proporcionado'});
    }

    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();

    } catch(err){
        res.status(403).json({message: 'Token invalido o expirado'});
    }
}

app.get('/login', (req, res) => {
    const user = {
        id: 1,
        name: "mdw",
    }
    const token = jwt.sign(user, SECRET_KEY, {expiresIn: '1h'});
    res.json({
        message:"Inicio exitoso",
        token: token
    })
})
app.get('/protected', verifyToken, (req, res) => {
    res.json({
        message:"Acceso a ruta protegida concedida",
        user: req.user
    })
})

app.listen(PORT, () => {
    console.log(`Server http://localhost${PORT}`);
})