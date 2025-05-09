// Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
// Consigna:
// Crea una secuencia de promesas que simulen el flujo de un usuario que se
// registra en una plataforma y luego recibe un mensaje de bienvenida. La
// secuencia debe ser:
// 1. Registrar Usuario (promesa que tarda 2 segundos).
// 2. Enviar Email de Bienvenida (promesa que tarda 1 segundo).
// 3. Mostrar Mensaje Final al completar ambas tareas.
// Si alguna de las promesas falla, debe imprimirse un mensaje de error.
function registrarUsuario() {
    return new Promise((resolve, reject) => {
        console.log("Registrando usuario...");
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 70% chance de éxito
            if (exito) {
                resolve("Usuario registrado con éxito.");
            } else {
                reject("Error al registrar usuario.");
            }
        }, 2000);
    });
}

function enviarEmailBienvenida() {
    return new Promise((resolve, reject) => {
        console.log("Enviando email de bienvenida...");
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 70% chance de éxito
            if (exito) {
                resolve("Email de bienvenida enviado.");
            } else {
                reject("Error al enviar el email de bienvenida.");
            }
        }, 1000);
    });
}

registrarUsuario()
    .then((resultadoRegistro) => {
        console.log('Resultado registro usuario: ', resultadoRegistro);
        return enviarEmailBienvenida() 
    })
    .then((resultadoEnvio) => {
        console.log(resultadoEnvio);
        console.log("Registro completo. Bienvenido a la plataforma.", resultadoEnvio);
    })
    .catch((error)=> {
        console.log(error);
    })