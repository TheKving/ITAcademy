/* Nivell 1 - Exe1*/
let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1;

(sumarArrow = function (x, y){
    let resultado = x + y;
    return resultado;
})();

console.log(sumarArrow(num1, num2));

/* Nivell 2 */
/* exe 1 */

const exampleFunction = (name) => {
    return {
      name
    };
};
  
const explFunction = exampleFunction('Barcelona');
console.log(explFunction.name);



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
/**************/
/* Nivell 3                 
                Exercici 1
        Crear una function creadora d'objectes, 
        abstraient la definició de les classes. 
        Invocar-amb diferents definicions.
*/
var classAbstracta = {
    exampleMethod: function() {
        this.abstractMethod();
    }
}
  
callAbstract = Object.create(classAbstracta);
callAbstract.abstractMethod = function() { console.log("Abstract class");}

callAbstract.exampleMethod();

