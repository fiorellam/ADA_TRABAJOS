// ▪ Modelo: Encargado de leer el archivo JSON
// (movies.json) que contiene la lista de películas y buscar
// la película por título.
const path = require('path');
const fs = require('fs');
const fileName = './movies.json';
const filePath = path.join(__dirname, fileName);

const getMovieByTitle = (title) => {
    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        const movies = JSON.parse(data);
        return movies.find(movie => movie.titulo.toLowerCase() === title.toLowerCase() || null);
    
    } catch(e){
        console.log('Error al leer el archivo', e);
        return null;
    }
}

module.exports = {getMovieByTitle};