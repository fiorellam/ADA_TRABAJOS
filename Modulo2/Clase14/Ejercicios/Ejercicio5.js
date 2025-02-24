// DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto
// Crea un script en Node.js que permita al usuario ingresar un texto, luego
// lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
// resultado original. Usa el módulo crypto para el cifrado y descifrado.
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definir una clave secreta y un IV (vector de inicialización)
const secretKey = crypto.randomBytes(32);  // 32 bytes para AES-256
const iv = crypto.randomBytes(16);  // 16 bytes para AES-256-CBC

rl.question('Ingresa el texto que deseas cifrar: ', (input) => {
  // Cifrar el texto
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  let cifrado = cipher.update(input, 'utf8', 'hex');
  cifrado += cipher.final('hex');
  console.log('Texto cifrado:', cifrado);

  // Descifrar el texto
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
  let descifrado = decipher.update(cifrado, 'hex', 'utf8');
  descifrado += decipher.final('utf8');
  console.log('Texto descifrado:', descifrado);

  rl.close();
});