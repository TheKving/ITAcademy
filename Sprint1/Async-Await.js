/*Exercici 1
Donats els objectes Employees i Salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
Creu una altra arrow function getSalario que rebi com a paràmetre un 
objecte Employee i retorni el seu salari.*/
 
let employees =    [ {id: 1, name: 'Linux Torvalds'},   {id: 2, name: 'Bill Gates'},    {id: 3, name: 'Jeff Bezos'} ];
let salaries =     [ {id: 1, salary: 4000 },            {id: 2, salary: 1000 },         {id: 3, salary: 2000} ];


const getEmpleado = (employeeId) => {
    return new Promise((resolve, reject) => {
        if(employees.some(emp => emp.id === employeeId) == true){
            var searchEmployee = employees.find(emp => emp.id === employeeId);
            resolve(searchEmployee);
        } else {
            reject('Employee doesn\'t exist');
        }
    });
}


const getSalario = (searchEmployee) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee == undefined) {
            reject(new Error(`[ERROR]: Can't find employee`));
        } else if(employees.some(emp => emp.id === searchEmployee.id) !== false) {
            var searchSalary = salaries.find(sal => sal.id === searchEmployee.id);
            resolve(searchSalary);
        } else {
            reject(new Error(`Employee doesn't have salary`));
        }
    });
}


/*Exercici 2
Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi 
per pantalla el nom de l'empleat i el seu salari*/


async function asyncGetEmpleado(empId) {
    try { 
        const findEmployee = await getEmpleado(empId);
        const findSalary = await getSalario(findEmployee);
        console.log(`${findEmployee.name} salary is ${findSalary.salary}`);
    } catch (error) {
        console.log(error.message);
    }
}

let employee = 1;
asyncGetEmpleado(employee);

 
/*  Nivell 2    */

/*Exercici 1
Creu una funció asíncrona que anomeni a una altra que retorni una 
Promise que efectuï la seva resolve amb una demora de 2 segons.*/
const number = Math.floor(Math.random() * 11);

const myFunction = (number) => {
    return new Promise((resolve, reject) => {
        if(isNaN(number)){
            reject(new Error(`Isn't a number`));
        }
        setTimeout(
            () => number > 5
                            ? resolve(`El numero es mayor que 5: ${number}`)
                            : reject(new Error('Menor o igual a 5: '+number)),
            2000
        );
    });
}
/*  Nivell 3    */

/*Exercici 1
Capturi tots els errors possibles del Nivell 2*/
async function asyncMyFunction() {
    try { 
        await myFunction(number);
    } catch (error) {
        console.log(error.message);
    }
}
asyncMyFunction(number);
