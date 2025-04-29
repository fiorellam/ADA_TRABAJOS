// 6. Ejercicio de Supermercado
// Crea una clase Producto que contenga propiedades privadas como nombre,
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea
// negativo y que cantidad no sea menor que 0.
class Producto{
    private _nombre: string;
    private _precio: number;
    private _cantidad: number;

    constructor(nombre:string, precio: number, cantidad: number){
        this._nombre = nombre;
        this._precio = 0; //inicializacion por defecto
        this._cantidad = 0; //inicializacion por defecto

        this.precio = precio;
        this.cantidad = cantidad;
    }

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(cantidad: number) {
        if(cantidad > 0) this._cantidad = cantidad;
        else console.log('la cantidad debe ser mayor a 0');
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(precio: number) {
        if(precio > 0){
            this._precio = precio;
        } else {
            console.log('El precio debe ser mayor a 0');
        }
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(nombre: string) {
        this._nombre = nombre;
    }
    public mostrarInfo(): void {
        console.log(`Producto: ${this._nombre}, Precio: $${this._precio}, Cantidad: ${this._cantidad}`);
    }
}
const producto1 = new Producto("Manzana", 2.5, 100);
producto1.mostrarInfo();
console.log('-------------------------------------------------------');

producto1.precio = -1;     //Inválido
producto1.cantidad = -50;  //Inválido

console.log('-------------------------------------------------------');
producto1.precio = 3;      //Válido
producto1.cantidad = 120;  //Válido
producto1.mostrarInfo();