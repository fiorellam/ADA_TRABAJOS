// Ejercicio 2: Aplicación de Tareas con Patrón MVC y Persistencia
// Consigna:
// Crea una aplicación de lista de tareas usando el patrón MVC. Las tareas
// deben guardarse en un archivo JSON y poder ser consultadas, añadidas
// y eliminadas desde la línea de comandos.
// Pasos:
// • Usa readline-sync para interactuar con el usuario.
// • Separa el código en Modelo, Vista y Controlador.
// • Usa fs para persistir las tareas en un archivo JSON.
const readlineSync = require('readline-sync');// para leer la entrada del usuario
const taskController = require('./controllers/task-controller');

//Funcion principal que gestione el flujo de la aplicacion
function main() {
    let option;
    do {
        console.log('\nGestor de Tareas');
        console.log('1. Ver tareas');
        console.log('2. Agregar tareas');
        console.log('3. Eliminar tarea');
        console.log('4. Salir');

        //Leemos la opcion seleccionada por el usuario
        option = readlineSync.question('Elija una opcion');

        switch(option){
            case '1':
                taskController.showTasks(); //mostrar las tareas
                break;
            case '2':
                taskController.addTask();
                break;
            case '3':
                taskController.deleteTask();
                break;
            case '4':
                console.log('Hasta luego');
                break;
            default:
                console.log("Opcion invalida");
        }
    } while (option != '4');//el ciclo sigue hasta que el usuario elija salir
}

main() //llamamos a la funcion principal