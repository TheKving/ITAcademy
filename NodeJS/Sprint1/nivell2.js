let name = "Kevin";
let lastname = "Gómez";


function returnMessage(name, lastname){
    const message = 'Hello '+ name + ' ' + lastname + ', this is exercise 2';
    return console.log(message);
}
returnMessage(name, lastname);

/* Exe2 */
var exe2 = `Invoke function with template literal ${returnMessage(name, lastname)}`;

//console.log(exe2); 