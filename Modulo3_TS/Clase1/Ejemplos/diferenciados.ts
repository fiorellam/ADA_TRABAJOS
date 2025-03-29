//Tipos diferenciados en typescript

//1. Any: Permite almacenar cualquier tipo de valor sin restricción
let anyValue: any = "Hola any type"; //String
console.log(anyValue);
anyValue = 42; //numero
console.log(anyValue);
anyValue = {name: "Typescript"}; //objeto
console.log(anyValue);

//2. Unknown: Similar a any pero require verificacion antes de su uso
let unknownValue: unknown = "Hola soy unknown";
console.log(unknownValue);
//necesitamos verificar el tipo antes de usarlo como string

//3. Void: se usa en funciones que no retornan valor
function logMessage(message: string): void{
    console.log(message);
}
logMessage("Esto es una funcion void");

//4. never
function infiniteBucle() : never {
    while (true) {
        console.log("Este bucle nunca termina!!!");
    }
}
// infiniteBucle();

//5. Null y undefined
let valorNull: string | null = null;
console.log(valorNull);

valorNull = "Ahora tiene un valor";
console.log(valorNull);
