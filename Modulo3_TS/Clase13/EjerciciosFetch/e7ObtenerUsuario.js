// Ejercicio 7: Obtener Información de un Usuario por ID

// 1. Crea un archivo getUser.js.
// 2. Usando fetch, realiza una solicitud a la API de JSONPlaceholder para
// obtener la información de un usuario específico.
// 3. Extrae y muestra en la consola el nombre, nombre de usuario y correo
// electrónico del usuario.

// Pistas:
// • La URL para buscar un usuario es
// https://jsonplaceholder.typicode.com/users/{id}. 
async function getUser(id){
    try{
        if(!id) throw new Error('No has enviado el id del usuario que deseas buscar');
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!response.ok) throw new Error('No se encontro el usuario');

        const data = await response.json();
        const {name, username, email} = data;
        console.log(name, username, email);
    }catch(error){
        console.error(error);
    }
}
getUser(2);