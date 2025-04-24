//Definimos una class Triangulo
class Triangle{
    private _height: number;
    private _base: number;

    constructor(){
        this._height = 0;
        this._base = 0;
    }

    //setter para la base, con validacion de numeros
    public set base(value:number){
        if(value > 0){
            this._base = value;
        } else{
            console.log('La base debe ser mayor a 0');
        }
    }
    //Setter para altura, con validacion
    public set height(value:number){
        if(value > 0 ){
            this._height = value;
        } else {
            console.log('La altura debe ser mayor a 0');
        }
    }
    //Metodo para calcular el area de triangulo
    public calculateArea(): number {
        return (this._base * this._height) / 2;
    }
}

//Usamos la clase Triangulo
const triangulo = new Triangle();

//Usamos setter para establecer nuevos valores
// triangulo.base = 10;
// triangulo.height = 5;

// //calculamos el area
// console.log(`Area del triangulo: ${triangulo.calculateArea()}`);

//Probamos con numeros no validos
triangulo.height = -5;
triangulo.base = -8;
console.log(`Area del triangulo: ${triangulo.calculateArea()}`);

