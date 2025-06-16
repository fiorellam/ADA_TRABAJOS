//Este archivo configura el servidorr y sirve tanto las APIs como el frontend
const express = require('express'); //Framework para manejar solicitudes y rutas
const cors = require('cors'); // Middleware para permitir solicitudes entre dominios
const bodyParser = require('body-parser'); // Analizador del cuerpo de las solicitudes HTTP
const path = require('path'); //Modulo nativo de Node.js para manejar rutas de archivos
const contactsRoutes = require('./routes/contacts') //Importamos las rutas de contactos

const app = express(); //Creamos la aplicacion de express
const PORT = process.env.PORT || 3000; //Usamos el puerto definido en las variables de entorno o el puerto 3000

//Middleware
app.use(cors()); //Habilitamos CORS para que el frontend pueda comunicarse con este servidor
app.use(bodyParser.json()); //Habilitamos la lectura de datos en formato json

//Servir archivos estaticos (Frontend)
app.use(express.static(path.join(__dirname, '../public'))); //Configuramos la carpeta 'public' para servir archivos estaticos (HTML, CSS, JS)

//Rutas API
app.use('/api/contacts', contactsRoutes); //Todas las rutas que comienzan con "/api/contacts" seran manejadas en el archivo contacts.js

//Ruta para manejar cualquier otra solicitud (fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); //Cualquier ruta no especificada sirve el frontend
})

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})