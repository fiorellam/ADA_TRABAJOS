// Ejercicio 3: Crear un Servicio de Búsqueda de Películas

// Descripción:

// 1. Crea un archivo searchMovie.js.
// 2. Escribe una función que reciba el título de una película como parámetro,
// realice una solicitud a la API de OMDb y devuelva el título y el año de
// lanzamiento de la primera película que coincida con la búsqueda.
// (Requiere clave de API gratuita).
// 3. Llama a esta función pasando un título, y muestra el resultado en la
// consola.

// Pistas:
// • Usa fetch("https://www.omdbapi.com/?s=" + titulo +
// "&apikey=TU_API_KEY") para realizar la solicitud.

// • La respuesta contiene una lista de películas en Search; accede a la primera
// película con Search[0]. 
const _API_KEY = 'c77ee7b7';
async function searchMovieByTitle(title){
    try{
        if (!title) throw new Error('No enviaste el titulo');
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${_API_KEY}`);
        if (!response.ok) throw new Error(`La pelicula no fue encontrada ${response.status}`);
        const data = await response.json();
        const firstMovie = data.Search[0];
        console.log(firstMovie);

    } catch(error) {
        console.error('Error', error);
    }
}
searchMovieByTitle('Harry Potter');