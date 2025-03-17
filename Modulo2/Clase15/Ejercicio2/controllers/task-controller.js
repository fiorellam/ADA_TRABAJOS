// Ejercicio 2: Aplicación de Tareas con Patrón MVC y Persistencia
// Consigna:
// Crea una aplicación de lista de tareas usando el patrón MVC. Las tareas
// deben guardarse en un archivo JSON y poder ser consultadas, añadidas
// y eliminadas desde la línea de comandos.
// Pasos:
// • Usa readline-sync para interactuar con el usuario.
// • Separa el código en Modelo, Vista y Controlador.
// • Usa fs para persistir las tareas en un archivo JSON.

//importamos el modelo y la vista 
const taskModel = require('../models/task-model');
const taskView = require('../views/task-view');

//funcion para mostrar tareas
function showTasks() {
    const tasks = taskModel.readTasks(); //leemos las tareas desde el modelo
    taskView.displayTasks(tasks); //Mostramos las tareas usando la vista
}

//funcion para agregar una tarea
function addTask(){
    const taskDescription = taskView.promptForTask() //pedimos al usuario que ingrese la descripcion de la tarea
    const tasks = taskModel.readTasks();
    tasks.push({description: taskDescription, completed: false});
}
//funcion para eliminar una tarea
module.exports = {
    showTasks, 
    addTask
}