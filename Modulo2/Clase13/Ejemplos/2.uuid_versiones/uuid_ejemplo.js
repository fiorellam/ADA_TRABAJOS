//1. Importamos las versiones de uuid que vamos a usar
const {v1: uuidv1, v3: uuidv3, v4:uuidv4, v5:uuidv5} = require('uuid');

//Ejemplo 1: UUID V1 - Basado en tiempo 
//genera un uuid unico basado en la marca del tiempo y la direccion mac
const idv1 = uuidv1();
console.log("UUID V1 (basado en tiempo ): " ,idv1);

//Ejemplo 2 UUID V3 BASA EN NOMBRE Y ESPACIO DE NOMBRE
//UTILIZA UN NOMBRE Y UN ESPACIO DE NOMBRE PARA GENERAR UUIDS
//USANDO UN HASH MD5
const NAMESPACE = uuidv3.URL;//Espacio de nombres estandar basado en url
const namev3 = 'ejemploNombre';
const idv3 = uuidv3(namev3, NAMESPACE);
console.log("UUID V3 (BASADA EN NOMBRE Y ESPACIO DE NOMBRE)", idv3);

//EJEMPLO 3: UUID V4 - ALEATORIO
//GENERA UN UUID ALEATORIO UTILIZANDO VALORES GENERADOS DE MANERA RANDOM
const idv4 = uuidv4();
console.log("UUID V4(aleatorio)", idv4);

//Ejemplo 4 UUID V5 Espacio de nombre y nombre (sha-1)
//similar a la v3 pero usa sha-1

const namev5 = "OtroEjemplo";
const idv5 = uuidv5(namev5, NAMESPACE);
console.log("UUID V5 (BASADA EN NOMBRE Y ESPACIO DE NOMBRE CON SHA-1", idv5);
