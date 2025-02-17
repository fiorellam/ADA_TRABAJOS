// ▪ Modelo: Encargado de leer el archivo JSON
// (hotels.json) que contiene la lista de hoteles y sus
// habitaciones, y buscar la disponibilidad por ID del
// hotel.
const path = require('path');
const fs = require('fs');
const fileName = './hoteles.json';
const filePath = path.join(__dirname, fileName);

const getHotelById = (hotelId) => {
    try{
        const data = fs.readFileSync(filePath, 'utf-8')
        const hotels = JSON.parse(data);
        return hotels.find(hotel => hotel.id === parseInt(hotelId) || null);

    }catch(error) {
        console.error('Error al leer el archivo', error);
        return null;
    }
};

module.exports = {getHotelById};