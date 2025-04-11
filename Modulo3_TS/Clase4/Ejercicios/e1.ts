// Actividad 1: Usar For...In para recorrer propiedades de un objeto
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
// bucle for...in para recorrer y mostrar cada propiedad y su valor.

let estudiante = {
    nombre: 'Fiore',
    edad: 26,
    ciudad: 'Ensenada'
}

for(let clave in estudiante){
    console.log(`Propiedad: ${clave}, valor: ${estudiante[clave as keyof typeof estudiante]}`);
}