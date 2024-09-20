
let num = [2,3,4,5,6,7,8,9,10]
let arr=[1.2,3.4,5.4,4.0]
function sumarr(num){
    let sum = 0
for(let i=0; i < num.length; i++){
    sum += num[i]
}
return sum
}

console.log(sumarr(num));
// return 54
console.log(sumarr(arr));
// return 14

