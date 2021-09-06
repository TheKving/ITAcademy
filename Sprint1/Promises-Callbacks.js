/* Nivell 1 */
/*
Crear una function que retorni una Promise que invoqui 
la funcion resolve() o bé reject() que rep. 
Invocar-la des de fora pasandole totes dues funcions que 
imprimeixin un missatge diferent en cada cas.
*/

const myFunction = () => {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 11);
        setTimeout(
            () => number > 5
                            ? resolve(`El numero es mayor que 5: ${number}`)
                            : reject(new Error(`Menor o igual a 5: ${number}`)),
            1500
        );
    });
}

myFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error.message));

/*
- Exercici 2
Crear una arrow function que, rebent un paràmetre i una function callback, li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.*/

const myFunctionCallback = (parm, myCallback) => {
    myCallback(parm);
}

function callbackExe2(x){
    if(x>10) {
        console.log("Es mayor");
    } else {
        console.log("Es menor");
    }
}
myFunctionCallback(11, callbackExe2);

/*Nivell 2*/

/*
- Exercici 1
Donats els objectes employees i salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.*/

let employees =    [ {id: 1, name: 'Linux Torvalds'},   {id: 2, name: 'Bill Gates'},    {id: 3, name: 'Jeff Bezos'} ];
let salaries =     [ {id: 1, salary: 4000 },            {id: 2, salary: 1000 },         {id: 3, salary: 2000} ];


const getEmpleado = (employeeId) => {
    return new Promise((resolve, reject) => {
        if(employees.some(emp => emp.id === employeeId) == true){
            var searchEmployee = employees.find(emp => emp.id === employeeId);
            resolve(`ID ${employeeId} is ${searchEmployee.name}`);
        } else {
            reject('Employee doesn\'t exist');
        }
    });
}

/*
 Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre 
un objecte employee i retorni el seu salari.*/

const getSalario = (searchEmployee) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee == undefined) {
            reject(new Error(`[ERROR]: Can't find employee`));
        } else if(employees.some(emp => emp.id === searchEmployee.id) !== false) {
            var searchSalary = salaries.find(sal => sal.id === searchEmployee.id);
            resolve(`id: ${searchEmployee.id}, ${searchEmployee.name} salary is ${searchSalary.salary}`);
        } else {
            reject(new Error(`Employee doesn't have salary or not exist`));
        }
    });
}


/*- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, 
enviant l'execució de les dues promises.*/

const empId = 1; //Exe2 & Exe3
var searchEmployee = employees.find(emp => emp.id === empId);

getEmpleado(empId)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    getSalario(searchEmployee)
    .then(response => console.log(response))
    .catch(reject => console.log(reject.message))
    .catch(reject => console.log(reject.message));

/*Nivell 3*/

/* Exercici 1
Fixi un element catch a la invocació de la fase anterior que 
capturi qualsevol error i l'imprimeixi per consola.*/

const getSalario2 = (searchEmployee) => {
    return new Promise((resolve, reject) => {
        try { 
            if(searchEmployee == undefined) {
                reject(new Error(`Can't find employee`));
            } else if(employees.some(emp => emp.id === searchEmployee.id) !== false) {
                var searchSalary = salaries.find(sal => sal.id === searchEmployee.id);
                resolve(`id: ${searchEmployee.id}, ${searchEmployee.name} salary is ${searchSalary.salary}`);
            } else {
                reject(new Error(`Employee doesn't have salary or not exist`));
            }
        } catch(otherError) {
            console.error(otherError);
        }

    });
}


getSalario2(searchEmployee) 
    .then(response => console.log(response))
    .catch(reject => console.log(reject.message))
    .catch(reject => console.log(reject.message));
