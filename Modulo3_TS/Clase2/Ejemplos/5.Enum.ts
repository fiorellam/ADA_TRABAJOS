//Definicion de un enum numerico
enum colores{
    Rojo,
    Verde,
    Azul,
}

//Acceder a los valores del enum
let coloresFavoritos: colores = colores.Verde;
console.log('Color favorito (por numero): ', coloresFavoritos);

console.log('Nombre del color por indice: ', colores[coloresFavoritos]);
console.log('Nombre del color por indice: ', colores[1]);

//2. Definicion de enum de cadenas
enum Direcciones{
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O',
}

//Asignar un valor del enum a una variable
let direccionViaje : Direcciones = Direcciones.Norte;
console.log('Direccion del viaje: ', direccionViaje);
