// DESAFIO Ejercicio 6: Hash de Contraseña con Sal
// Crea un script en Node.js que permita al usuario ingresar una contraseña
// y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
// genera un hash de la contraseña combinada con el "sal" usando el
// algoritmo SHA-256. Muestra el hash generado.
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu contraseña: ', (contraseña) => {
  
  // Solicitar al usuario que ingrese el "sal"
  rl.question('Ingresa un "sal" (valor aleatorio): ', (sal) => {
    
    // Combinar la contraseña con el "sal"
    const contrasenaConSal = contraseña + sal;

    // Crear el hash usando SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(contrasenaConSal);
    const hashFinal = hash.digest('hex');

    // Mostrar el hash generado
    console.log('Hash generado (SHA-256):', hashFinal);

    rl.close();
  });
});
