/* Nivell 1 */
let name = "Kevin";

function returnName(fname){
    return console.log('Name is '+fname);
}

returnName(name);
/***************************************/

/* Nivell 2 */
/* Exe1 */
let lastname = "Gómez";
const message = 'Hello '+ name + ' ' + lastname + ', this is exercise 2';

/* Exe2 */
console.log(message);

/***************************************/

/* Nivell 3 */

function countNumber(){
    for(var i = 0; i<10; i++){
        console.log(i);
    }
}

var array_of_functions = [
    function() { first_function('a string') },
    function() { second_function('a string') },
    function() { third_function('a string') },
    function() { fourth_function('a string') }
]

for (i = 0; i < array_of_functions.length; i++) {
    array_of_functions[i]();
}

/*
const myFuncs = [{
    firstFun: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    secondFunc: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    thirdFunc: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    fourthFun: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    fifthFun: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    sixthFun: function() { for(var i = 0; i<10; i++) {console.log(i);} },
    seventhtFun: function() { for(var i = 0; i<10; i++) {console.log(i);} }, 
    eighthFunc: function() { for(var i = 0; i<10; i++) {console.log(i);} }, 
    ninthFunc: function() { for(var i = 0; i<10; i++) {console.log(i);} }, 
    tenthFunc: function() { for(var i = 0; i<10; i++) {console.log(i);} }
}];

myFuncs.forEach(function(myFuncs, index) {
    console.log(`${index} : ${myFuncs}`);
});
/*
myFuncs.forEach(function (e) {
    console.log(e);
});
/*
for(var i = 0; i<10; i++){
    myFuncs[i];
}*/



/*Exe2 */
var nameAnonFunc = (function(aname) { 
    var printname = 'Anonymous Function Name is '+aname; 
    return{ printname:printname } 
})(name);

console.log( nameAnonFunc.printname ); 
