// Ejercicio 8: Lista de Episodios de una Serie

// 1. Crea un archivo getEpisodes.js.
// 2. Realiza una solicitud a la API de TVMaze para obtener la lista de episodios
// de una serie específica (puedes usar el nombre “Friends” como ejemplo).
// 3. Muestra en la consola los nombres de los episodios y sus números de
// temporada.
// Pistas:
// • La URL para obtener episodios es
// https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embe
// d=episodes.
// • Los episodios están dentro de _embedded.episodes.
async function getEpisodes(titleSerie){
    try{
        if(!titleSerie) throw new Error('No enviaste el titulo de la serie que deseas encontrar');
        
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${titleSerie}&embed=episodes`)
        if(!response.ok) throw new Error('No se encontro la serie');

        const data = await response.json();
        const serieName = data.name;
        const episodes = data._embedded.episodes;
        console.log(serieName.toUpperCase());
        
        let currentSeason = null;
        episodes.forEach(episode => {
            if(episode.season !== currentSeason){
                //Si la temporada cmabia imprime la temporada
                if(currentSeason !== null){
                    console.log(`-------------------------TEMPORADA ${episode.season}-------------------------`);
                }
                currentSeason = episode.season;
            }
            console.log(`Temporada ${episode.season} x ${episode.number} : ${episode.name}`);  
        });

    }catch(error){
        console.error(error);
    }
}
getEpisodes('Friends');