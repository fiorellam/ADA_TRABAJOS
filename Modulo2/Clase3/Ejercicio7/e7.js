// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una
// tarea de "pendiente" a "completada".
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • El estado de cada tarea puede ser "pendiente" o "completada".
// • Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');
const filePath = './tareasDiarias.json';
const emojiDone = '✅';
const emojiNot = '❌';

const obtenerTareasDiarias = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    } 
    const content = fs.readFileSync(filePath, 'utf-8');
    if(content.length == 0){
        console.log('Archivo vacio');
        fs.writeFileSync(filePath, '[]');
    }
    return JSON.parse(content);
}

const guardarTareas = (tareasDiarias) => {
    fs.writeFileSync(filePath, JSON.stringify(tareasDiarias, null, 2));
}

const agregarNuevaTarea = (descripcion, estado)=> {
    const tareasDiarias = obtenerTareasDiarias();
    tareasDiarias.push({id: tareasDiarias.length + 1, descripcion, estado});
    guardarTareas(tareasDiarias);
    console.log("Tarea guardada");
}

const listarTareasDiarias = () => {
    const tareasDiarias = obtenerTareasDiarias();
    tareasDiarias.forEach(tarea => {
        console.log(`${tarea.descripcion}: ${tarea.estado === 'Pendiente' ? emojiNot : emojiDone}`);
    });
}

const cambiarEstadoTarea = (tareaID, estado) => {
    const tareas = obtenerTareasDiarias();
    const tarea = tareas.find((tar) => tar.id === tareaID);
    if(tarea) {
        tarea.estado = estado;
        guardarTareas(tareas);
        console.log('Tarea actualizada');
    } else {
        console.log("Tarea no encontrada")
    }
}
// agregarNuevaTarea("Buscar nuevo trabajo", "Pendiente");
// agregarNuevaTarea("Terminar Manual", "Pendiente");
// agregarNuevaTarea("Ir a bailar", "Pendiente");
// agregarNuevaTarea("Escuchar el nuevo album de bad bunny", "Completada");
cambiarEstadoTarea(4, 'Completada')
listarTareasDiarias();
