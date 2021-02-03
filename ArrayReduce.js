arr = [1,2,3,4];
const total = arr.reduce((total,currentval)=>{
                return total + currentval;
},0)

console.log(total);