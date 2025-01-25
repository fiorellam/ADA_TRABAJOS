// Ejercicio 14: Diario personal
// Consigna:
// Desarrolla un programa para escribir entradas de un diario en un archivo
// diario.json. Cada entrada debe incluir fecha, titulo y contenido. Además:
// 1. Permite listar todas las entradas.
// 2. Filtra entradas por una palabra clave en el título.
//  Pista: Usa new Date() para registrar la fecha automáticamente.
const fs = require('fs');
const filePath = './e14diario.json';

const obtenerEntradasDiario = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}

const guardarEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2));
}

const agregarEntrada = (titulo, contenido) => {
    const entradas = obtenerEntradasDiario();
    entradas.push({id: entradas.length + 1, fecha: new Date, titulo, contenido});
    guardarEntradas(entradas);
    console.log("Entrada agregada");
}

const listarEntradas = () => {
    const entradas = obtenerEntradasDiario();
    console.log(entradas);
} 

const filtrarEntradaPorPalabraClave = (palabraClave) => {
    const entradas = obtenerEntradasDiario();
    const resultadoBusqueda = entradas.filter((entrada) => {
        let entradaMinusculas = entrada.titulo.toLowerCase();
        if(entradaMinusculas.includes(palabraClave.toLowerCase())){
            return entrada;
        }
    });
    console.log(resultadoBusqueda);
}
// agregarEntrada("Dormir temp", "Dormir tempranito");
// agregarEntrada("Comer", "Comer tempranito");
filtrarEntradaPorPalabraClave('Dorm');