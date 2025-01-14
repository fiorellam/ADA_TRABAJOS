// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.
let texto = "Programar es divertido";

function cantidadRepeticiones(texto, letra){
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == letra){
            contador++;
        }
    }
    console.log("La letra " + letra + " se repite : " + contador);
}
cantidadRepeticiones(texto, "r");