
function filternum(x){
    let filtered = []
    let nagnum = []
    for(let i = 0; i<x.length;i++){
        if(x[i]>=0){
            filtered.push(x[i])
        }
    }
    return filtered
}
let num = [2,3,5,7,-6,8,-66,5,44,-33,-66,76,-54]
console.log(filternum(num));
