
// print even number
    for(let i = 2;i <=10; i +=2){
        //console.log(i);   
    }
    // return 2,4,6,8,10


for(let i=2; i<=10; i++){
    if(i %2 ===0){
       // console.log(i);
        
    }
}
//return 2,4,6,8,10

let num =10
let i = 0
while(i<=num){
    //console.log(i);
    i = i+2
}
// return 0,2,4,6,8,10
let x= [1,2,3,4,1,14,15,16,17,21,23,25,27,29,32,33,34,35,363,37,54,55,43,32,45,78,67,88,99,89,6,64]
let evennum = x.filter(num => num%2===0)
    console.log('Even number'+evennum);
    // return 2,4,14,16,32,34,54...


//print odd number

function oddnum(value){
    for(let i = 1; i<=value; i+=2){
        
            console.log(i);
            
        }
        
        
    }
oddnum(10)
//print 1,3,5,7,9

let oddnums = x.filter(num => num %2 !==0)
console.log('Odd numbers' + oddnums);

//return Odd numbers1,3,1,15,17,21,23,25,27,29,33,35,363,37,55,43,45,67,99,89

let Evennumber =[]
let Oddnumber = []
for(let i=0; i<x.length;i++){
    if(x[i]%2===0){
        Evennumber.push(x[i])
    }else{
        Oddnumber.push(x[i])
    }
}
console.log('Evennumber'+Evennumber);
//  print Evennumber2,4,14,16,32,34,54,32,78,88,6,64
console.log('Odd numbers'+ Oddnumber);
//return Odd numbers1,3,1,15,17,21,23,25,27,29,33,35,363,37,55,43,45,67,99,89


