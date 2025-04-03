//1. Definimos un objeto basico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
}

//Mostramos las propiedades del obj en consola
console.log(`Marca: ${auto.marca}, Modelos: ${auto.modelo}, Anio: ${auto.anio} `);

//2. Declaracion explicita del tipo de un objeto
let auto2 : { marca: string, modelo: string, anio: number } = {
    marca: 'Nissan',
    modelo: 'Kicks',
    anio: 2024
}

//Mostramos las propiedades del obj en consola
console.log(`Marca: ${auto2.marca}, Modelos: ${auto2.modelo}, Anio: ${auto2.anio} `);

//3. Propiedades opcionales
let estudiante: {nombre: string; edad?: number} = {
    nombre: "Fiorella"
}
console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? 'Desconocida'} `);

//4. Metodos en un objeto
let perro = {
    nombre: 'Wera',
    raza: "French Poodle",
    ladrar: function() {
        return `${this.nombre} esta ladrando`
    }
}
console.log(perro.ladrar());
