function maxnum(x){
    let maxvalue = x[0]
    for(let i = 0; i <x.length;i++){
         if(maxvalue <x[i]){
            maxvalue = x[i]
         }
    }
    return maxvalue
}
let num = [1,2,3,4,6,45,67,86,43,3,56]
console.log(maxnum(num));
// return 86

function maxnum(num){
    return Math.max(...num)
}
console.log(maxnum([2,3,4,5,8,9,7,6,45,43,23,12]));
// return 45