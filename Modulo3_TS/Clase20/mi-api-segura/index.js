//Importaciones
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const {z} = require('zod');
require('dotenv').config();

//Instancia
const app = express();
app.use(cors())//Permite acceder desde los origenes
app.use(express.json()) //Lee el json en las req

//Middlewares Para registrar todas las solicitudes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})


//Datos simulados
const user = {email: 'ada@lovelace.com', password: '1234'};
const productos = [];

//Middleware para proteger rutas con JWT
function auth(req,res, next){
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({error: 'Token invalido'})
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded //guardamos el mail decodificado
        next();

    } catch{
        res.status(403).json({error: 'Token invalido'});
    }
}

//Esquema zod
const productoSchema = z.object({
    name: z.string().min(2),
    price: z.number().positive(),

})

//Ruta publica para el login
app.post('/login', (req, res) => {
    const {email, password } = req.body;
    if(email === user.email && password === user.password){
        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).json({error: 'Credencial invalida'});
    }
})
//Ruta protegida obtener productos
app.get('/productos', (req, res) => {
    res.json(productos);
})
//Ruta protegida agregar producto validado
app.post('/productos', (req, res) => {
    try{
        const nuevoProducto = productoSchema.parse(req.body);
        productos.push(nuevoProducto);
        res.status(201).json('Nuevo producto creado: ', nuevoProducto)
    } catch(err){
        res.status(400).json({error: err.error})
    }
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})