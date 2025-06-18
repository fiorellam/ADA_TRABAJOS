// Actividad 6: Validación de Datos con Middleware
// Consigna:
// 1. Implementa un middleware que valide los datos enviados al crear o
// actualizar un usuario.
// 2. Asegúrate de que el campo email sea un correo electrónico válido y
// que el campo name no esté vacío.
// 3. Aplica este middleware en las rutas POST /api/users y PUT
// /api/users/:id.
// Middleware de validación de datos
const express = require ('express'); 
const app = express(); 
const PORT = 3000; 

app.use(express.json());
const users = [];
const validateUserData = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El campo "name" es obligatorio y debe ser un texto válido' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'El campo "email" debe ser un correo electrónico válido' });
  }

  next(); // Continuar si los datos son válidos
};

// Aplicar el middleware en las rutas de creación y actualización de usuarios
app.post('/api/users', validateUserData, (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', validateUserData, (req, res) => {
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

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en: http://localhost:${PORT}`);
})