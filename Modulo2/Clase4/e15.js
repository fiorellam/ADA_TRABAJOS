// Ejercicio 15: Historial de actividades deportivas
// Consigna:
// Crea un programa para registrar actividades deportivas en un archivo
// actividades.json. Debe incluir:
// 1. Registrar una actividad con tipo (correr, nadar), duración (en
// minutos) y fecha.
// 2. Mostrar todas las actividades realizadas.
// 3. Filtrar actividades por tipo (por ejemplo, solo mostrar las de
// "correr").
//  Pista: Usa Date.now() para obtener la fecha exacta.
const fs = require('fs');
const filePath = './e15actividadesDeportivas.json';

const obtenerActividadesDeportivas = () =>{
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

const guardarActividades = (actividades) => {
    fs.writeFileSync(filePath, JSON.stringify(actividades, null, 2));
}

const agregarNuevaActividad = (tipo, duracion)=> {
    const actividades = obtenerActividadesDeportivas();
    actividades.push({id: actividades.length + 1, tipo, duracion, fecha: Date.now()});
    guardarActividades(actividades);
    console.log("Tarea guardada");
}

const listarActividades = () => {
    const actividades = obtenerActividadesDeportivas();
    console.log('Todas las actividades');
    console.log(actividades);
}

const filtrarActividadesPorTipo = (tipo) => {
    const actividades = obtenerActividadesDeportivas();
    const actividadesFiltradas = actividades.filter(actividad => actividad.tipo === tipo);
    console.log(`Actividades filtradas por tipo ${tipo}`, actividadesFiltradas);
}

// agregarNuevaActividad('nadar', 15.5);
// agregarNuevaActividad('correr', 25.5);
// agregarNuevaActividad('correr', 35.5);
filtrarActividadesPorTipo('nadar');
listarActividades();
