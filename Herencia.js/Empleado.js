class Empleados extends Persona {

 static contadorEmpleados = 0;
    
    constructor(nombre, edad, apellido, sueldo) {
        super(nombre, edad,apellido);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleados.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
   
    toString(){ // Sobreescritura
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
    
}