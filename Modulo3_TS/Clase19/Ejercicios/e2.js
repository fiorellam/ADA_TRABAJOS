// Actividad 2: Implementar Operaciones CRUD en una API REST
// Consigna:
// 1. Usa la misma estructura de proyecto para implementar operaciones
// CRUD en una colección de "usuarios".
// 2. Define los siguientes endpoints:
// o GET /api/users para obtener todos los usuarios.
// o POST /api/users para crear un nuevo usuario.
// o PUT /api/users/:id para actualizar un usuario por ID.
// o DELETE /api/users/:id para eliminar un usuario por ID.
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint para actualizar un usuario
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  user.name = name || user.name;
  user.email = email || user.email;
  res.status(200).json(user);
});

// Endpoint para eliminar un usuario
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== parseInt(id));
  res.status(204).send(); // No se envía contenido
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});