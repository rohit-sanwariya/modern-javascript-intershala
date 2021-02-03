const arr = [1,2,3,4];
//Map will always return a new array
const modArr = arr.map((item,i,arr)=>{
if(i==0){
    return item*item*2;
}
else return item;
})

console.log(modArr);