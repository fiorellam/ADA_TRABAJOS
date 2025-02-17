// Controlador: Encargado de recibir la solicitud del
// cliente, llamar al modelo para obtener los datos y
// luego pasar esos datos a la vista para formatear la
// respuesta
const {getHotelById} = require('../models/hotelModel');
const {formatHotelResponse} = require('../views/hotelView');

//Manejando la solicitud del cliente
const handleHotelRequest = (hotelId) => {
    const hotel = getHotelById(hotelId);
    return formatHotelResponse(hotel);
};

module.exports = {handleHotelRequest};