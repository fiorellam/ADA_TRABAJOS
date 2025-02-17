const formatMovieResponse = (movie) => {
    if(!movie){
        return JSON.stringify({error: 'No existe la pelicula'});
    } 
    return JSON.stringify(movie, null, 2);
}

module.exports = { formatMovieResponse};