/*
Descripcion:
1. Modificar la funcion para recibir un id como parametro y
asi hacer la funcion reutilizable para distintos personajes.
Solicitar datos de diferentes personajes de la API pasando
un id como argumento.
Crear una funcion fetchCharacter(id).
Validar el id y lanzar un error si no es valido.
*/

//Paso definimos una funcion asincrona que recibe un parametro id
async function fetchCharacter(id){
    try{
        //validamos que el id no fue ingresado
        if(!id) throw new Error('No ingresaste el ID');
        //Hacemos una solicitud a la api
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        //Verificamos si la respuesta no fue exitosa(status diferente a 200) lanzamos un error
        if(!response.ok) throw new Error(`El personaje no fue encontrado: ${response.status}`);

        //convertimos la respuesta a formato json para obtener los datos del personaje
        const character =  await response.json();
        //imprimimos los datos del personaje
        console.log('Datos del personaje: ', character);
    } catch(error){
        console.error(error.message);
    }
}

fetchCharacter(1);