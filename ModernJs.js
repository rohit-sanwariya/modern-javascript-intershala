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