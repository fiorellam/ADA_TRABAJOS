// Ejercicio 8: Obtener estadísticas de usuarios
// Crea un endpoint GET /users/stats que devuelva las siguientes
// estadísticas sobre los usuarios:
// 1. Cantidad total de usuarios.
// 2. Edad promedio de los usuarios.
// 3. Usuario más joven.
// 4. Usuario más viejo.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Fiorella", email:"fiorellaroma@gmail.com", age: 26},
    {id: 2, name: "Juan", email: "juan@gmail.com", age: 30},
    {id: 3, name: "Xime", email: "xime@gmail.com", age: 17},
    {id: 4, name: "Eli", email: "eli@gmail.com", age: 20},
]

app.get('/users/stats', (req, res) => {
    const totalUsers = users.length;
    if(totalUsers === 0){
        return res.status(200).json({
            totalUsers: 0,
            averageAge: null,
            youngestUser: null,
            oldestUser: null
        })
    }
    let suma = 0;
    let youngestUser = users[0];
    let oldestUser = users[0];

    for(let i = 0; i < users.length; i++) {
        suma += users[i].age;
        
        if(users[i].age < youngestUser.age ){
            youngestUser = users[i];
        }
        if(users[i].age > oldestUser.age){
            oldestUser = users[i]
        }
    }
    //Otra forma de hacerlo
    // const averageAge = users.reduce((sum, user) => sum + user.age, 0) / totalUsers;
    // const youngestUser = users.reduce((youngest, user) =>
    //     user.age < youngest.age ? user : youngest, users[0]);
    // const oldestUser = users.reduce((oldest, user) =>
    //     user.age > oldest.age ? user : oldest, users[0]);

    const averageAge = suma / totalUsers;
    res.status(200).json({totalUsers, averageAge, youngestUser, oldestUser});
});
app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:3000/users/stats`);
})