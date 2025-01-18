// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Eliminar una tarea se puede hacer por su ID.
const fs = require('fs');
const filePath = './tarea.json';

const obtenerTareas = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}
const guardarTareas= (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));
}
const agregarTarea = (descripcion) => {
    const tareas = obtenerTareas();
    tareas.push({id: tareas.length + 1, descripcion: descripcion, pendiente: true })
    guardarTareas(tareas);

}

const listarTareas = () =>{
    const tareas = obtenerTareas();
    console.log(tareas);
}

const eliminarTarea = (idTarea) => {
    const tareas = obtenerTareas();
    let index = tareas.findIndex(tarea => tarea.id === parseInt(idTarea));
    if(index != -1){
        tareas.splice(index, 1);
        guardarTareas(tareas);
        console.log(`Tarea con id ${idTarea} eliminada correctamente`);
    } else {
        console.log("La tarea no fue encontrada");
    }
}
// agregarTarea("Actualizar linkedin");
// agregarTarea("Crear logica juego");
// agregarTarea("Sacar a pasear a mi perro");
eliminarTarea(1);