// Ejercicio 4: Transformación y Análisis de Cadenas
// Pide al usuario que ingrese una lista de nombres separados por comas.
// Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
// “Pablo” y “Pedro”.
// Luego, escribe la función “transformarYAnalizarNombres”que realice las
// siguientes tareas:
const prompt = require("prompt-sync")();
// let nombres = "Julian, Maria, Malena, Andrea, Pablo, Pedro";
let nombres2 = prompt("Escribe varios nombres y separalos con una coma: ");

function transformarYAnalizarNombres(nameList){
    
    let listaNombres = nameList.split(",");
    // 1. Quite los espacios en blanco alrededor de cada nombre.
    let quitaEspacios = listaNombres.map(function(nombre){
        return nombre.trim();
    });
    console.log('Arreglo sin espacios', quitaEspacios);
    
    // 2. Verifique si existe el nombre "Juan".
    let juanExiste = listaNombres.includes("Juan");
    console.log('Juan existe en la lista? ', juanExiste);
    
    // 3. Reemplace todos los nombres "María" por "Ana".
    let reemplazarMaria = quitaEspacios.map(function(nombre){
        return nombre.replace(/Maria/g, 'Ana');
    })
    console.log(reemplazarMaria);
    // let reemplazarMaria = quitaEspacios.map(function(nombre){
    //     if(nombre == 'Maria'){
    //         return 'Ana'
    //     } else {
    //         return nombre;
    //     }
    // });

    console.log('Arreglo que reemplaza el nombre de Maria por el de Ana' , reemplazarMaria);
    
    // 4. Encuentre el índice del nombre "Pedro".
    let indicePedro = reemplazarMaria.indexOf("Pedro");
    console.log('Pedro se encuentra en la posicion' , indicePedro + 1);
    
    // 5. Devuelva una cadena de nombres en orden alfabético separados
    // por puntos. Investigar el método “.sort()”
    // https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    reemplazarMaria.sort();
    let nombresOrdenados = reemplazarMaria.join(".");
    console.log(nombresOrdenados);
}
transformarYAnalizarNombres(nombres2);