// Ejercicio 5: Información Meteorológica por Ciudad
// 1. Crea un archivo getWeather.js.
// 2. Escribe una función que reciba el nombre de una ciudad y realice una
// solicitud a la API de OpenWeatherMap para obtener el clima actual de esa
// ciudad (requiere clave de API gratuita).
// 3. Extrae y muestra en la consola la temperatura y la descripción del clima.

// Pistas:
// • Usa fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
// ciudad + "&appid=TU_API_KEY").
// • La temperatura está en main.temp y la descripción en
// weather[0].description.
const APIKEY = '5504e790d70a3f81d5f0d88e6d149285';
async function getWeatherOfCity(cityName){
    try{
        if(!cityName) throw new Error('El nombre de la ciudad no fue enviado');

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
        if (!response.ok) throw new Error('No se pudo obtener el clima de la ciudad');

        const data = await response.json();
        console.log(data)

    }catch(error){
        console.error(error);
    }
}
getWeatherOfCity('London');