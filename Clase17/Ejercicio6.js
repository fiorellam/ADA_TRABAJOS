// • Ejercicio 6: Autos y más autos…
// Escribe una función "gestionarAutos" que realice las siguientes tareas con
// una lista predefinida de marcas de autos:
// 1. Quite los espacios en blanco alrededor de cada marca.
// 2. Verifique si existe la marca "Tesla".
// 3. Reemplace todas las marcas "Ford" por "BMW".
// 4. Encuentre el índice de la marca "Chevrolet".
// 5. Devuelva una cadena de marcas en orden alfabético separadas por
// puntos. Utilizar “.sort()”
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan, Ford";

function gestionarAutos(){
    let arrayCarros = entrada.split(',');
    console.log('Arreglo de carros separados', arrayCarros);

    let arraySinEspacios = arrayCarros.map(marca => marca.trim())
    console.log('Arreglo sin espacios', arraySinEspacios);

    let existeTesla = arraySinEspacios.includes("Ford");
    console.log('Tesla existe?: ',existeTesla);

    let reemplazarFordXBMW = arraySinEspacios.map(marca =>{
        return marca == 'Ford' ? 'BMW' : marca;
    })
    //otra forma de resolverlo
    // let reemplazar2 = arraySinEspacios.map(marca => {
    //     return marca.replace(/Ford/g, 'BMW');
    // })
    console.log('Reemplazando Ford x BMW', reemplazarFordXBMW);

    let indiceChevrolet = arraySinEspacios.indexOf("Chevrolet");
    console.log('Chevrolet se encuentra en la posicion ', indiceChevrolet + 1);

    arraySinEspacios.sort();
    let cadena = arraySinEspacios.join(".");
    console.log(cadena);
}
gestionarAutos();