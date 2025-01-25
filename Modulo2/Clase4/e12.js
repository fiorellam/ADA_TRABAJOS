// Ejercicio 12: Sistema de registro de tareas
// Consigna:
// Crea un programa que maneje un archivo tareas.json con las siguientes
// funcionalidades:
// 1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y
// estado (pendiente o completa).
// 2. Completar una tarea: Cambia el estado de una tarea a completa.
// 3. Listar tareas por estado: Muestra las tareas agrupadas por su
// estado (pendiente o completa).
//  Pista: Utiliza métodos como filter y map para manipular la lista de
// tareas.
const fs = require('fs');
const filePath = './e12tareas.json';

const leerTareas = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}
const guardarTareas= (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2));
}
const agregarTarea = (nombre, descripcion) => {
    const tareas = leerTareas();
    tareas.push({ nombre, descripcion, estado: 'pendiente' })
    guardarTareas(tareas);
    console.log('Tarea guardada');
}

const completarTarea = (nombre) => {
    const tareas = leerTareas();
    let tarea = tareas.find(tarea => tarea.nombre === nombre);
    if(tarea != null){
        tarea.estado = 'completa';
        guardarTareas(tareas);
    } else{
        console.log('Tarea encontrada');
    }
}

const listarTareasPorEstado = () =>{
    const tareas = leerTareas();
    const tareasCompletas = tareas.filter(tarea => tarea.estado === 'completa');
    const tareasPendientes = tareas.filter(tarea => tarea.estado === 'pendiente');

    console.log('Tareas completas');
    console.table(tareasCompletas);
    console.log('Tareas pendientes');
    console.table(tareasPendientes);
}

agregarTarea("Actualizar linkedin", 'Crear y revisar informacion para crear un buen perfil');
agregarTarea("Actualizar fb", 'Crear y revisar informacion para crear un buen perfil');
completarTarea("Actualizar fb");
listarTareasPorEstado();