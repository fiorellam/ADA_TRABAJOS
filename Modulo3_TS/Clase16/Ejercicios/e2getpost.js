// Ejercicio 2: GET y POST de productos:
// Descripción:
// 1. Crea un arreglo inicial de productos con id y name.
// Ejemplo: { id: 1, name: “Notebook”}
// 2. Implementa dos endpoints:
// • GET /products: Devuelve la lista de productos.
// • POST /products: Permite agregar un producto enviando id y
// name en el body.
// 3. Asegúrate de manejar errores si faltan datos.
// Pistas:
// • Usa estructuras similares a las del ejercicio de usuarios.
// • El arreglo inicial puede contener al menos dos productos.
// • Usa res.json() para devolver datos como respuesta.
const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Notebook"}
]

app.use(express.json());

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})

app.post('/api/products', (req, res) => {
    const {name} = req.body;
    if(!name){
        res.status(400).send('No se pudo agregar producto, hace falta el nombre')
    }
    res.status(201).send(`Producto creado ${name}`);
    const newid = products.length + 1;
    products.push({id: newid, name}); 
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
})