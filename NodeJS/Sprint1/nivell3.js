/* EXE1 */
/*
function countNumber(){
    for(var i = 0; i<10; i++){
        console.log(i);
    }
}

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
*/



/*Exe2 */
let name = "Kevin";

var nameAnonFunc = (function(aname) { 
    var printname = 'Anonymous Function Name is '+aname; 
    return{ printname:printname } 
})(name);

console.log( nameAnonFunc.printname ); 
