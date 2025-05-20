// Ejercicio 4: Obtener Información de un País por Nombre

// 1. Crea un archivo getCountry.js.
// 2. Escribe una función que reciba el nombre de un país como parámetro,
// realice una solicitud a la API de REST Countries, y devuelva el nombre,
// capital y región del país.
// 3. Muestra estos datos en la consola.
// Pistas:

// • La URL para buscar un país es
// https://restcountries.com/v3.1/name/{name}.
// • La respuesta contiene un arreglo; accede al primer objeto con [0] para
// extraer la información. 
async function getCountryByName(countryName){
    try{
        if(!countryName) throw new Error('No enviaste el pais a buscar');

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if(!response.ok) throw new Error('El pais no fue encontrado');

        const data = await response.json();
        const country = data[0];
        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : 'No tiene capital';
        const region = country.region;
        console.log(`Pais: ${name}, capital: ${capital}, region: ${region}`);
    }catch(error){
        console.error(error);
    }
}

getCountryByName('Peru');
// getCountryByName('');