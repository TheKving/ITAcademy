/* Nivell 1 */
let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1;

((x, y) => {
    console.log(`${x} + ${y} = ${x+y}`);
})(num1, num2)


/* Nivell 2 */
/* exe 1 */
const nivell2Exercici1 = (y) => 10+y;

console.log(nivell2Exercici1(5));

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
class Perro {
    constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    }
    
    devolverPerro() {
        console.log('El perro es un '+this.raza+' y se llama '+this.nombre);
    }
}

const perroAleman = new Perro('Thor', 'Pastor Aleman');
perroAleman.devolverPerro();

const perroBulldog = new Perro('Mauri', 'Bulldog Frances');
perroBulldog.devolverPerro();