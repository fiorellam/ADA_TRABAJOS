// Ejercicio 7: Buscar usuarios por edad mínima y máxima
// Crea un endpoint GET que reciba dos parámetros de consulta (minAge y
// maxAge) y devuelva una lista de usuarios cuya edad esté en ese rango.
// 1. Si no se proporcionan ambos parámetros, responde con un error
// 400.
// 2. Si no hay usuarios en ese rango, devuelve un arreglo vacío.
// 3. Asegúrate de incluir un campo age en los usuarios existentes para
// realizar este ejercicio.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Fiorella", email:"fiorellaroma@gmail.com", age: 26},
    {id: 2, name: "Juan", email: "juan@gmail.com", age: 30}
]

app.get('/users/range-age', (req, res) => {
  const { minAge, maxAge} = req.query; // Capturamos el parámetro de consulta
  if(!minAge || !maxAge) return res.status(400).json({ error: "Se requieren los parámetros 'minAge' y 'maxAge'." });
  
  const filteredUsers = users.filter(user =>
    user.age >= parseInt(minAge) && user.age <= parseInt(maxAge)
  );

  res.status(200).json(filteredUsers);
});
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/range-age`);
})