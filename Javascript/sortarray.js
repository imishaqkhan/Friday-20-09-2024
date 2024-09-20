
function sorted(array){
    
    for(let i = 0; i<array.length-1;i++){
      for(let j=0;j<array.length-1;j++){
        if(array[j]>array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
      }
    }
    return array
}
let num = [2,4,7,4,5,34,76,8,4]
console.log(sorted(num));
