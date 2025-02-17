const {getMovieByTitle} = require('../models/moviesModel');
const {formatMovieResponse} =  require('../views/moviesView');

const handleMovieRequest = (movieTitle) => {
    const movie = getMovieByTitle(movieTitle);
    return formatMovieResponse(movie);
}

module.exports = {handleMovieRequest};