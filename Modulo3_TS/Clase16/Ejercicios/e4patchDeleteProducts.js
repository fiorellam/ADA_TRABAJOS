// o 4: PATCH y DELETE para productos:

// Descripción:
// Implementa dos endpoints adicionales para el CRUD de
// productos:
// o PATCH /products/:id: Permite actualizar el name de un
// producto.
// o DELETE /products/:id: Elimina un producto por id.
// Pistas:
// • Usa las estructuras y lógica del ejercicio anterior como
// referencia.
// • Cambia el arreglo y los campos para adaptarlo a productos.
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

app.patch('/api/products/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const index = products.findIndex( user => user.id === parseInt(id));
    if(index === -1) return res.status(404).json('User not found');
    products[index].name = name;

    res.status(200).json(products[index]);
})

app.delete('/api/products/:id', (req, res) => {
    const {id} = req.params;
    const index = products.findIndex(user => user.id === parseInt(id));
    if(index === -1) return res.status(404).json('User not found');
    const productDeleted = products[index];
    products.splice(index, 1);
    res.status(203).json(productDeleted);
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
})