// Ejercicio 5: Herencia con Modificadores de Acceso
// Consigna: Crea una clase base Compania con un atributo privado
// nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
// derivada EmpresaTecnologia que use el atributo protegido y agregue un
// método que calcule el doble de los ingresos anuales.
class Compania{
    private nombreCompania: string;
    protected ingresosAnuales: number;

    constructor(nombreCompania: string, ingresosAnuales: number){
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;
    }

    //Metodo opcional para poder acceder al nombre, ya que es privado
    public getNombre():string{
        return this.nombreCompania;
    }
}

class EmpresaTecnologia extends Compania{
    constructor(nombreCompania: string, ingresosAnuales: number){
        super(nombreCompania, ingresosAnuales);
    }

    calcularDobleIngresosAnuales(): number{
        return this.ingresosAnuales * 2;
    }
}

const startup = new EmpresaTecnologia('TECH-IN', 40000);
const dobleIngresos = startup.calcularDobleIngresosAnuales();
console.log(`Nueva empresa ${startup.getNombre()}`);
console.log(`Doble de ingresos anuales ${dobleIngresos}`);
