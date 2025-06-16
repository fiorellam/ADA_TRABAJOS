const API_URL = '/api/contacts'; //URL base para las solicitudes API
const form = document.getElementById('contact-form'); //Formulario para agregar contactos
const contactsTable = document.getElementById('contacts-table'); //Tabla donde se mostraran los contactos

//Funcion para obtener los contactos desde el backend
async function fetchContacts(){
    const res = await fetch(API_URL); //Realiza una solicitud GET al backend
    const contacts = await res.json(); //Convierte la respuesta en un array de contactos.
    renderContacts(contacts); //Muestra los contactos en la tabla
}

//Renderiza los contactos en la tabla
function renderContacts(contacts) {
    contactsTable.innerHTML = contacts.filter(contact => contact.id && contact.id.trim() !== ":" && contact.id.trim() !== "")
        .map(contact => `
        <tr>
            <td>${contact.name}</td>    
            <td>${contact.email}</td>    
            <td>${contact.phone}</td>   
            <td>
                <button class="delete-btn" onclick="deleteContact('${contact.id}')">Eliminar</button>
            </td> 
        </tr>
    `).join('');
}

//Maneja el evento de enviar el formulario para agregar un contacto
form.addEventListener('submit', async(e) => {
    e.preventDefault(); //Evita que la pagina se recargue
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    //Envia una solicitud POST al backend con el nuevo contacto
    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: Date.now().toString(), name, email, phone}),
    });

    form.reset(); //Limpia el formulario
    fetchContacts(); //Actualiza la tabla de contactos
});

//Elimina un contacto
async function deleteContact(id){
    if (!id || id.trim() === "") {
        console.error("ID inválido:", id);
        return;
    }

    console.log("Eliminando contacto con ID:", id);  // Depura el ID aquí
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'}); //Realiza una solicitud delete al backend
    fetchContacts();//Actualiza la tabla de contactos
}

//Inicializa la tabla de contactos al cargar la pagina
fetchContacts();