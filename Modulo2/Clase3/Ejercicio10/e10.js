// Actividad 10: Gestión de compras
// Consigna: Crea un programa que registre las compras realizadas. El
// programa debe permitirte:
// 1. Agregar una compra: Registrar una compra con su nombre y
// precio.
// 2. Listar las compras: Mostrar todas las compras registradas.
// 3. Eliminar una compra: Eliminar una compra de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las compras.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada compra debe tener un ID único.

const fs = require('fs');
const filePath = './compras.json';

const getPurchases = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contentFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contentFile);
}

const savePurchases = (purchases) => {
    fs.writeFileSync(filePath, JSON.stringify(purchases, null, 2));
}

const addPurchase = (nombre, precio) => {
    const purchases = getPurchases();
    purchases.push({id: purchases.length + 1, nombre, precio});
    savePurchases(purchases);
    console.log("Purchase added");
}

const listPurchases = () => {
    const purchases = getPurchases();
    console.log(purchases);
}
const deletePurchase = (idPurchase) => {
    const purchases = getPurchases();
    let index = purchases.findIndex(purchase => purchase.id === parseInt(idPurchase));
    if(index != -1){
        purchases.splice(index, 1)
        savePurchases(purchases);
        console.log("Purchase deleted");
    } else {
        console.log("Purchase not found");
    }
}

addPurchase("book", 15.6);
addPurchase("shampoo", 188);
listPurchases();
deletePurchase(1);
listPurchases();