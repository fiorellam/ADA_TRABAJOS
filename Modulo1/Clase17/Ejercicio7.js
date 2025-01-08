// • Ejercicio 7: “La Floreria”
// Escribe una función "gestionarFloreria" que realice las siguientes tareas
// con una lista predefinida de nombres de flores:
let entrada = "Rosa, Tulipán, Margarita, Orquidea, Lirio";

function gestionarFloreria(){
    // 1. Quite los espacios en blanco alrededor de cada flor.
    let arreglodeFlores = entrada.split(",");
    
    // 2. Verifique si existe la flor "Margarita" y, si está presente, agregue
    // "Azucena" al final de la lista.
    arreglodeFlores = arreglodeFlores.map(flor => flor.trim())
    if(arreglodeFlores.includes("Margarita")){
        arreglodeFlores.push("Azucena");
    }
    // 3. Reemplace todas las flores "Orquídea" por "Clavel".
    arreglodeFlores = arreglodeFlores.map(flor => flor == "Orquidea" ?  'Clavel' : flor);
    
    // 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
    // "Girasol" al inicio de la lista.
    if(arreglodeFlores.indexOf("Girasol" == -1)){
        arreglodeFlores.unshift("Girasol");
    }

    // Devuelva una cadena de flores en orden alfabético separadas por puntos.
    arreglodeFlores.sort();
    let resultado = arreglodeFlores.join(".");
    console.log(resultado);
}
gestionarFloreria();