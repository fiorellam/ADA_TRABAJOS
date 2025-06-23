const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const contactsRoutes = require('./routes/contacts-route');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

//usar los archivos del front
app.use(express.static(path.join(__dirname, '../public')));

//rutas api
app.use('/api/contacts', contactsRoutes);

//ruta para manejar cualquier solicitud
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

//iniciamos servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en : http://localhost:${PORT}/api/contacts`);
})