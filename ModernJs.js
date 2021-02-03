//var vs let vs const

//  var scope is inside of function BAD!!!

function varIsBad(){
    if(true){
        if(true){
            var scopeFunVar = 45;
        }
    }
    console.log(scopeFunVar);
}

varIsBad()