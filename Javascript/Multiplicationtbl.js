
function table(num,count){
    for(let i=1;i<=num;i++){
        console.log(`Multiplication table for ${i}`);
        for(let j=1;j<=count;j++){
            console.log(`${i} x ${j}= ${i*j}`);
            
        }
         console.log('---------------------');
    }
   
    
}
table(1,5)
//print
// Multiplication table for 1
// 1 x 1= 1
// 1 x 2= 2
// 1 x 3= 3
// 1 x 4= 4
// 1 x 5= 5
// -----------
