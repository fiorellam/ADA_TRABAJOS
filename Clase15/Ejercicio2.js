// • Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
// El último invitado no puede asistir. Elimina al último invitado y muestra
// quién fue eliminado y el estado actualizado de la lista.

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let invitadoNoAsiste = invitados.pop();

console.log("El invitado que no puede asistir es ", invitadoNoAsiste);
console.log("Lista actualizada", invitados);
