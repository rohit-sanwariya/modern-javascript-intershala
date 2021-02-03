//var vs let vs const

//  var scope is inside of function BAD!!!

function varIsBad(){
    if(true){
        if(true){
            var scopeFunVar = 45;
            // let scopeFunLet = "this won't print"
        }
    }
    console.log(scopeFunVar);
    //console.log(scopeFunLet); 
    // ReferenceError: scopeFunLet is not defined
}

varIsBad()

let a = 14;
const b = 13;
a = 17;
// b = 26; //TypeError: Assignment to constant variable.??
