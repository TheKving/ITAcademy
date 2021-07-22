/* Nivell 1 */
let name = "Kevin";

function returnName(fname){
    console.log('Name is '+fname);
}
returnName(name);

/***************************************/

/* Nivell 2 */
/* Exe1 */
let lastname = "Gómez";

console.log(`Hello ${name} ${lastname}, this is exercise 2`);

/* Exe2 */
function returnMessage(name, lastname){
    const message = `${name} ${lastname}`;
    return message;
}

console.log(`Invoke function with template literal MSG: ${returnMessage(name, lastname)}`);

/* Nivell 3 */
/* EXE1 */


/*Exe2 */

var nameAnonFunc = (function(aname) { 
    var printname = 'Anonymous Function Name is '+aname; 
    console.log(printname);
})(name);


