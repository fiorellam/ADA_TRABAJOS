// Ejercicio 4. Consulta de Aeropuertos (GET)
// Objetivo: Realizar una solicitud GET para obtener todos los aeropuertos.
// • API: AirportGap API
// • URL: https://airportgap.com/api/v1/airports
// • Método: GET
// • Descripción: Realiza una solicitud GET para obtener todos los aeropuertos
// disponibles. Consulta la respuesta y muestra la lista de aeropuertos en la
// consola.
// Pistas:
// • Asegúrate de seleccionar el método GET en Postman y de no olvidar que
// la respuesta será un array en formato JSON.
async function getAirports(){
    try{
        const response = await fetch('https://airportgap.com/api/airports');
        if(!response.ok) throw new Error('Error en la consulta');
        const {data} = await response.json();

        const airports = data;
        console.log('✈️ AEROPUERTOS');
        airports.forEach(airport => {
            const {name} = airport.attributes;
            console.log(`Aeropuerto: ${name}`)
        })

    }catch(error){
        console.log(error);
    }
}
getAirports();