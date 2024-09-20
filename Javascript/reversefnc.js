
function reversefn(num){
    let reversenum = []
    for(let i= num.length -1;i >=0;i--){
        reversenum.push(num[i]) 
    }
    return reversenum
}
let array = [1,2,3,4,5,6,7]
console.log( reversefn(array));
// print  7, 6, 5, 4, 3, 2, 1
 
function reversarr(num){

return num.reverse()

}
console.log(reversarr(array));

//return  7, 6, 5, 4,3, 2, 1

function revers(x){
    let start =0
    let end = x.length -1
    while(start<end){
        let temp = x[start]
        x[start]=x[end]
        x[end]=temp
        start++
        end--
    }
    return x
}
let arr = [2,3,4,3,6,3,8,6,5]
let result = revers(arr)

console.log(result);
