// 6. Simulación de Autenticación de Usuario con Manejo de Errores
// Imagina que estás desarrollando el sistema de inicio de sesión para una
// aplicación. En esta aplicación, el sistema debe validar que el nombre de usuario
// existe y es válido. Si el usuario no existe o se envía null o undefined como
// nombre de usuario, la función de autenticación debe fallar y lanzar un error.
// Para lograrlo:
// • Crea una función llamada autenticar que tome el nombre de usuario como
// parámetro.
// • La función debe simular un tiempo de validación de 2 segundos y retornar
// "Autenticación exitosa" si el nombre de usuario es válido.
// • En caso de que el usuario sea null o undefined, la función debe lanzar un
// error.
// • Utiliza try/catch en una función principal iniciarSesion para manejar los
// errores y mostrar un mensaje de éxito o error.
// Este ejercicio es esencial para aprender a manejar errores en operaciones de
// autenticación, simulando problemas comunes que podrías encontrar en
// sistemas de login.
//TODO: VALIDAR que el nombre de usuario existe y es valido, si el usuario no existe o se envia null o undefined
function autenticar(nombreUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nombreUsuario != null && nombreUsuario != undefined){
                resolve("Autenticacion exitosa");
            } else {
                reject("No se pudo autenticar, el usuario no existe");
            }
        }, 2000 );
    })
}

async function iniciarSesion(nombreUsuario){
    try{
        console.log("Iniciando sesión ...");
        const resultado = await autenticar(nombreUsuario);
        console.log(resultado);
    }catch(error){
        console.error("Ocurrió un error ", error);
    }
}
iniciarSesion("Fiorella");