// Ejercicio 6: Buscar Canción por Título

// 1. Crea un archivo searchSong.js.
// 2. Escribe una función que reciba el título de una canción y realice una
// solicitud a la API de iTunes para buscar la canción.
// 3. Muestra en la consola el nombre de la canción y el artista.

// Pistas:
// • La URL de búsqueda es
// https://itunes.apple.com/search?term={song_title}&limit=1.
// • La información de la canción se encuentra en el primer resultado del
// arreglo de resultados. 
async function searchSong(songTitle){
    try{
        if(!songTitle) throw new Error('No enviaste el titulo de la cancion');

        const response = await fetch(`https://itunes.apple.com/search?term=${songTitle}&limit=1`)
        if(!response.ok) throw new Error('La cancion no fue encontrada');

        const data = await response.json();
        const song = data.results[0];
        const {artistName, collectionName, trackCensoredName} = song;
        console.log(`Artista: ${artistName}, coleccion: ${collectionName}, nombre: ${trackCensoredName}`)
    }catch(error){
        console.log(error);
    }
}
searchSong('Corazon de Hojalata')