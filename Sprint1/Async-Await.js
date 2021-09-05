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
            resolve(`ID ${employeeId} is ${searchEmployee.name}`);
        } else {
            reject('Employee doesn\'t exist');
        }
    });
}

const getSalario = (employeeId) => {
    return new Promise((resolve, reject) => {
        if(salaries.some(sal => sal.id === employeeId) == true){
            var searchSalary = salaries.find(sal => sal.id === employeeId);
            resolve(`ID ${employeeId} salary is ${searchSalary.salary}`);
        } else {
            reject('Employee doesn\'t have salary or not exist');
        }
    });
}

/*Exercici 2
Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi 
per pantalla el nom de l'empleat i el seu salari*/
/*const empId = 'aaa';
const empId = 100;*/
const empId = 1;

const findEmployee = (employeeId) => {
    return new Promise((resolve, reject) => {
        if(!isNaN(employeeId)) {
            if(employees.some(emp => emp.id === employeeId) == true) { 
                var searchEmployee = employees.find(emp => emp.id === employeeId);
                var searchSalary = salaries.find(sal => sal.id === employeeId);

                resolve(`Employee ${employeeId} is ${searchEmployee.name} and salary is ${searchSalary.salary}`);
            } else {
                reject(new Error('Employee not exist'));
            }
        } else {
            reject(new Error('Employee Id isn\'t a number'));
        }
    });
}


async function asyncGetEmpleado() {
    try { 
        const getData = await findEmployee(empId);
        console.log(getData);
    } catch (error) {
        console.log(error.message);
    }
}

asyncGetEmpleado();
 
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
                            ? resolve(number)
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
