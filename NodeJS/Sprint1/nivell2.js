let name = "Kevin";
let lastname = "Gómez";

console.log(`Hello ${name} ${lastname}, this is exercise 2`);

/* Exe2 */
function returnMessage(name, lastname){
    const message = `${name} ${lastname}`;
    return message;
}

console.log(`Invoke function with template literal MSG: ${returnMessage(name, lastname)}`);
