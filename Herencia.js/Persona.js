class Persona{
 
static contadorPersonas = 0; 

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad,fechaRegistro){
        super(nombre, apellido,edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}
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
/*
El método toString() en JavaScript es un método nativo que se utiliza 
para convertir un objeto o valor en su representación de texto 
(cadena). Este método está disponible en todos los objetos y tipos de 
datos básicos de JavaScript porque heredan de Object.
*/


   let persona1 = new Persona('emilia','ana',28);
   console.log(persona1.toString())

   let persona2 = new Persona('ema','yulia',80);
   console.log(persona2.toString())

   let empleado1 = new Empleados('Karla','Gnomo', 20, 500);
   console.log(empleado1.toString())

   let empleado2 = new Empleados('Laura','Quintero', 21, 550);
   console.log(empleado2.toString())

   let cliente1 = new Cliente('Tula','jessi', 35, new Date());
   console.log(cliente1.toString());


   let cliente2 = new Cliente('Jana','lama', 35, new Date());
   console.log(cliente2.toString());
