// Ejercicio 6: Validar productos con Zod
// Descripción:
// 1. Define un esquema con Zod para validar que los datos de un
// producto.
// Cada producto debe tener:
// • id: Número obligatorio.
// • name: Cadena de texto obligatoria.
// 2. Valida los datos antes de agregarlos al arreglo en un endpoint
// POST.
// Pistas:
// • Usa el esquema del ejercicio 5 como referencia, adaptándolo a
// los productos.
// • Responde con un error 400 en caso de datos inválidos.
const express = require('express');
const {z} = require("zod");
const app = express();
const PORT = 3000;

const products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Notebook"}
]

const productSchema = z.object({
    name: z.string()
})

app.use(express.json());

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})

app.post('/api/products', (req, res) => {
    const {name} = req.body;
    try{
        const productData = productSchema.parse(req.body);
        if(!name){
            res.status(400).send('No se pudo agregar producto, hace falta el nombre')
        }
        res.status(201).json({success: true, data: productData});
        const newid = products.length + 1;
        products.push({id: newid, name}); 
    }
    catch(error){
        res.status(400).json({success: false, errors: error.errors});
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
})