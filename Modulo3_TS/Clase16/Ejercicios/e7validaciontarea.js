// Ejercicio 7: Validación de Datos de una Tarea con Zod (POST):

// Descripcion:
// 1. Crea un esquema con Zod para validar los datos de una tarea.
// 2. Los datos de la tarea deben incluir:
// o title de tipo string (obligatorio).
// o completed de tipo boolean (opcional, por defecto debe ser
// false).
// 3. Valida los datos enviados en un endpoint POST antes de
// agregarlos a un arreglo temporal de tareas.
// Pistas:
// • Usa z.object() para definir el esquema.
// • Utiliza .default() para establecer un valor por defecto para
// completed.
const express = require('express');
const {z} = require("zod");
const app = express();
const PORT = 3000;

const tareas = [
    {id: 1, name: "Tarea1", description: "Descripcion 1"},
    {id: 2, name: "Tarea2", description: "Descripcion 2"},
    {id: 3, name: "Tarea3", description: "Descripcion 3"},
]

const tareaSchema = z.object({
    name: z.string(),
    description: z.string()
})

app.use(express.json());

app.get('/api/tarea', (req, res) => {
    res.status(200).json(products);
})

app.post('/api/tarea', (req, res) => {
    const {name} = req.body;
    try{
        const tareaData = tareaSchema.parse(req.body);
        if(!name){
            res.status(400).send('No se pudo agregar producto, hace falta el nombre')
        }
        res.status(201).json({success: true, data: tareaData});
        const newid = tareas.length + 1;
        tareas.push({id: newid, name}); 
    }
    catch(error){
        res.status(400).json({success: false, errors: error.errors});
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
})