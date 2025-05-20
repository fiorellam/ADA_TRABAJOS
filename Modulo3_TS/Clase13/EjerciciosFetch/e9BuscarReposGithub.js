// Ejercicio 9: Buscar GitHub Repositorios por Término
// 1. Crea un archivo searchRepo.js.
// 2. Escribe una función que reciba un término de búsqueda y realice una
// solicitud a la API de GitHub para obtener repositorios que coincidan con
// el término.
// 3. Muestra en la consola el nombre del repositorio y la descripción de los
// primeros cinco resultados.

// Pistas:
// • La URL de búsqueda es
// https://api.github.com/search/repositories?q={query}&per_page=5. 
async function searchRepo(terminoBusqueda){
    try{
        if(!terminoBusqueda) throw new Error('No has enviado el termino de Busqueda');
        
        const response = await fetch(`https://api.github.com/search/repositories?q=${terminoBusqueda}&per_page=5`);
        if(!response.ok) throw new Error('No se encontro nada');

        const data = await response.json();
        const repos = data.items;
        repos.forEach(repo => {
            console.log(repo.name, repo.description);
            
        });
    }catch(error){
        console.error(error);
    }
}
searchRepo('PHP');