/* Nivell 1 */
let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1;

(sumarArrow = function (x, y){
    let resultado = x + y;
    return resultado;
})();

console.log(sumarArrow(num1, num2));

/* Nivell 2 */
/* exe 1 */
( returnValue = function(x){
    return x;
})();

console.log(returnValue(5));

/* exe2 */
class Persona {
    constructor(nombre) {
    this.nombre = nombre;
    }
    
    decirNombre() {
        console.log(this.nombre);
    }
}

const namePersona = new Persona('Kevin');
namePersona.decirNombre();

/* Nivell 3 */

class Dog {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
    devolverPerro() {
        console.log('El perro es un '+this.raza+' y se llama '+this.nombre);
    }
}

Dog.prototype.devolverPerro.bind({
    nombre: 'Thor', 
    raza: 'Pastor Aleman'
})();

Dog.prototype.devolverPerro.bind({
    nombre: 'Mauri', 
    raza: 'Bulldog Frances'
})();
