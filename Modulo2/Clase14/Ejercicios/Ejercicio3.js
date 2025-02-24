// Ejercicio 3: Cálculo de Hash Simple
// Escribe un script en Node.js que use el módulo crypto para generar un
// hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
// la consola.
const crypto = require('crypto');
//Datos que queremos hashear
const data = 'Este es un mensaje secreto';

//creamos el objeto hash usando el algoritmo sha256
const hash = crypto.createHash('sha256');

//actualizae el hash con los demas datos
hash.update(data)


//actualizar el hash con los datos
const hashOutput = hash.digest('hex');

//mostrar el hash generado
console.log('Hash de sha256 ', hashOutput);