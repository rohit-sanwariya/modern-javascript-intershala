function nonArrowFunction(firstarg,secondArg="always this"){
    return firstarg.toString() + secondArg
}

console.log(nonArrowFunction("hello "));


// arrow function is related to "this"

const str = () => "hello world"
console.log(str);
console.log(str());