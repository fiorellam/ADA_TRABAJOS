// Ejercicio 6: Obtener usuarios ordenados alfabéticamente
// Crea un endpoint GET que devuelva la lista de usuarios ordenada
// alfabéticamente por su nombre.
// • Si se proporciona el parámetro de consulta order con el valor desc,
// ordena la lista en orden descendente.
// • Si no se especifica order o su valor es diferente de desc, ordena en
// orden ascendente.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Fiorella", email:"fiorellaroma@gmail.com"},
    {id: 2, name: "Juan", email: "juan@gmail.com"}
]

app.get('/users/sorted', (req, res) => {
  const { order } = req.query; // Capturamos el parámetro de consulta

  const sortedUsers = [...users].sort((a, b) => {
    if (order === 'desc') {
      return b.name.localeCompare(a.name); // Orden descendente
    }
    return a.name.localeCompare(b.name); // Orden ascendente
  });

  res.json(sortedUsers); // Respondemos con la lista ordenada
});
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/sorted`);
})