// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y
// estado (pendiente o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un
// proyecto a "finalizado" o "en progreso".
// Pistas:
// • Usa un archivo JSON para guardar los proyectos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada proyecto debe tener un ID único.
const fs = require('fs');
const filePath = './proyecto.json';

const obtenerProyectos = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contentFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contentFile);
}

const guardarProyectos = (proyectos) => {
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2));
}

const registrarProyecto = (nombre, estado) => {
    const proyectos = obtenerProyectos();
    proyectos.push({id: proyectos.length + 1, nombre, estado});
    guardarProyectos(proyectos);
    console.log('Guardado');
}

const listarProyectos = () => {
    const proyectos = obtenerProyectos();
    console.log(proyectos);
}

const actualizarEstadoProyecto = (idProyecto, nuevoEstado) => {
    const proyectos = obtenerProyectos();
    const proyecto = proyectos.find((proyecto) => proyecto.id === parseInt(idProyecto));
    if(proyecto){
        proyecto.estado = nuevoEstado;
        guardarProyectos(proyectos);
        console.log("Proyecto actualizado");
    } else {
        console.log("El proyecto no fue encontrado");
    }
}

// registrarProyecto("Lobos", "en progreso");
// registrarProyecto("Inventarios", "en progreso");
// registrarProyecto("XVs web page", "finalizado");
// listarProyectos();
// actualizarEstadoProyecto(3, "en progreso");
listarProyectos();