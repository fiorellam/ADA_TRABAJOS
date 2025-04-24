//Definimos un objeto 
class Rectangle{
    private _width: number; //propiedad privada 1
    private _height: number; //propiedad privada 2

    constructor(width: number, height: number){
        this._width = width;
        this._height = height;
    }

    //Getter para el area del rectangulo
    public get area(): number{
        return this._width * this._height;
    }

    //Getter para obtener la altura
    public get height(): number{
        return this._height;
    }

    //Getter para obtener el ancho del rectangulo
    public get width(): number{
        return this._width
    }
}
//Usamos la class Rectangle
const rectangulo = new Rectangle(10,5);
console.log(rectangulo);

//Accedemos a los valores usando los getter
console.log(`Ancho: ${rectangulo.width}`);
console.log(`Alto: ${rectangulo.height}`);
console.log(`Area: ${rectangulo.area}`);