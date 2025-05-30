//Importaciones 
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

//Inicializo express;
const app = express();

//Defino el puerto
const PORT = 3000;

//Middleware para parsear json
app.use(express.json());

//Ruta al archivo que simula la base de datos
const dataBasePath = './database.json';

//cargar las variables de entorno
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'Fiore';

//Ruta base para confirmar que el servidor esta andando
app.get('/', (req,res) => {
    res.send('Bienvenidas al sistema de logueo');
})

//Ruta para registrar nuevos usuarios
app.post('/register', async(req, res) => {
    const {email, password} = req.body; //extraemos el mail y contrasena del cuerpo de la solicitud

    //Condicional para verificar que los campos no esten vacios
    if(!email | !password){
        return res.status(400).json({error: 'El usuario no ingresó los campos requeridos'})
    }
    
    //Leer la bd para verificar que el usuario existe
    const database = JSON.parse(fs.readFileSync(dataBasePath));
    const userExists = database.find((user) => user.email === email);
    if(userExists){
        return res.status(400).json({error: 'El usuario ya esta registrado'});
    }

    //Hashing de la contrasena donde el numero 10 ees el coste del algoritmo
    const hashedPassword = await bcrypt.hash(password, 10);

    //Creamos un nuevo usuario
    const newUser = {id: Date.now(), email, password: hashedPassword};

    //Guardamos
    database.push(newUser);
    fs.writeFileSync(dataBasePath, JSON.stringify(database, null, 2));

    //Respondemos al cliente confirmando que el registro fue exitoso
    res.status(201).json({message: 'Usuario registrado con exito'});
})

//Ruta para iniciar sesion
app.post('/login', async(req, res) => {
    const {email, password} = req.body; //extraemos el mail y contrasena del cuerpo de la solicitud

    //Condicional para verificar que los campos no esten vacios
    if(!email | !password){
        return res.status(400).json({error: 'El usuario no ingresó los campos requeridos'})
    }

    //leer la base de datos para buscar al usuario
    const database = JSON.parse(fs.readFileSync(dataBasePath));
    const user = database.find((user) => user.email === email);
    if(!user){
        return res.status(400).json({error: 'El usuario ya esta registrado'});
    }
    //Comparamos la contrasena (ingresada y hasheada)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(401).json({error: 'Contrasena incorrecta'});
    }

    //Generamos un JWT
    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY, {
        expiresIn: '1h',
    })
    res.json({message: 'Inicio de sesion exitoso', token})
})

//Middleware para verificar el token
function autenticacionToken(req,res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //extraemos el token

    //condicional para verificar que el token existe
    if(!token){
        return res.status(401).json({error: 'Token no proporcionado'});
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if(err){
            return res.status(403).json({error: 'Token invalido'});
        }
        req.user = user; //Guardamos los datos del user
        next();
    })
}

//Ruta protegida
app.get('/profile', autenticacionToken, (req, res) => {
    res.json({message: `Bienvenida ${req.user.email}`, user:req.user});
})

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
