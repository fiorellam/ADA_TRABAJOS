// Ejercicio 10: Obtener Precio de Criptomoneda

// 1. Crea un archivo getCryptoPrice.js.
// 2. Escribe una función que reciba el símbolo de una criptomoneda (como
// "BTC" para Bitcoin) y realice una solicitud a la API de CoinGecko para
// obtener el precio actual.
// 3. Muestra en la consola el nombre de la criptomoneda y su precio en
// dólares.
// Pistas:
// • La URL para obtener el precio es
// https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currenc
// ies=usd.
// • Usa el id de la criptomoneda en minúsculas (por ejemplo, bitcoin para
// BTC). 
async function getCriptoPrice(simbolCripto){
    try{
        if(!simbolCripto) throw new Error('No has enviado el termino de Busqueda');
        
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${simbolCripto}&vs_currencies=usd`);
        if(!response.ok) throw new Error('No se encontro nada');

        const data = await response.json();
        
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
getCriptoPrice('bitcoin');