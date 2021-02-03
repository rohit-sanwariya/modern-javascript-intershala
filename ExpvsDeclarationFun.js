console.log(fun());
function fun(){
    return "hello world"
}

console.log(fun());
// Hoisting allows declaration
// at the top at the begining of the execution 

// console.log(funExp()); // would through error before definition 
const funExp = () =>{
    return "this would through";
}
console.log(funExp());