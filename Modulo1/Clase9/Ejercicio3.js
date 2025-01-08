// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el
//  resultado de diversas combinaciones lógicas.
const prompt = require("prompt-sync")({sigint:true});

const condicion1 = true;
const condicion2 = false; 

let bool1_user = prompt("Ingresa un booleano true o false: ");
let bool2_user = prompt("Ingresa otro booleano true o false: ");

console.log(
    `IMPRIMIENDO RESULTADOS EN CASO DE USAR OPERADOR AND
    ${condicion1} && ${bool1_user} nos dan como resultado:  (${condicion1 && bool1_user})
    ${condicion1} && ${bool2_user} nos dan como resultado:  (${condicion1 && bool2_user})
    ${condicion2} && ${bool1_user} nos dan como resultado:  (${condicion2 && bool1_user})
    ${condicion2} && ${bool2_user} nos dan como resultado:  (${condicion2 && bool2_user})`
)

console.log(`
    IMPRIMIENDO RESULTADOS EN CASO DE USAR OPERADOR OR
    ${condicion1} || ${bool1_user} nos dan como resultado:  (${condicion1 || bool1_user})
    ${condicion1} || ${bool2_user} nos dan como resultado:  (${condicion1 || bool2_user})
    ${condicion2} || ${bool1_user} nos dan como resultado:  (${condicion2 || bool1_user})
    ${condicion2} || ${bool2_user} nos dan como resultado:  (${condicion2 || bool2_user})
`)
console.log(`
    IMPRIMIENDO RESULTADOS EN CASO DE USAR OPERADOR NOT
    ${condicion1} != ${bool1_user} nos dan como resultado:  (${condicion1 != bool1_user})
    ${condicion1} != ${bool2_user} nos dan como resultado:  (${condicion1 != bool2_user})
    ${condicion2} != ${bool1_user} nos dan como resultado:  (${condicion2 != bool1_user})
    ${condicion2} != ${bool2_user} nos dan como resultado:  (${condicion2 != bool2_user})
`)

