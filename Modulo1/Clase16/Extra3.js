// Encuentra la película más corta y analiza los títulos largos
// Supón que tienes una lista de películas con su duración en minutos:
// const movies = [ { title: 'El Señor de los Anillos', duration: 200 }, { title: 'Inception', duration: 148 }, { title: 'Matrix', duration: 136 }, { title: 'Toy Story', duration: 81 }, { title: 'Coco', duration: 105 }];
const movies = [{ title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },{ title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },{ title: 'Coco', duration: 105 }
];
// Encontrar la película más corta en duración.
let shorteeestMovie = movies.reduce(function(shortest, currentMovie){
    // console.log('Short', shortest, 'Current', currentMovie);
    if(currentMovie.duration < shortest.duration){
        return currentMovie;
    } else{
        return shortest;
    }
    // return (currentMovie.duration < shortest.duration) ? currentMovie : shortest;
});
// FORMA DE RESOLVERLO CON UN FOR
// let duracionCorta = 1000;
// let peliculaMasCorta;
// for(let i = 0; i < movies.length; i++){
//     if(movies[i].duration < duracionCorta){
//         duracionCorta = movies[i].duration;
//         peliculaMasCorta = movies[i];
//     }
// }

// De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres. Crear una lista de los títulos largos en minúsculas.
let tituloMayorADiez = movies.filter(function(movie){
    return movie.title.length > 10;
});

// o La lista de títulos largos en minúsculas
let titulosLargosMinusculas = tituloMayorADiez.map(function(movie){
    return movie.title.toLowerCase();
});

// console.log("La pelicula más corta es: " , peliculaMasCorta.title);
// Imprime en la consola:  o El título de la película más corta.
console.log("La pelicula más corta es: " ,shorteeestMovie);
console.log("La lista de peliculas con titulos largos es: ", tituloMayorADiez);