let string = 'these is first paragraph'

function longeststring(str){
    let string = str.match(/\w[a-z]{0,}/gi)
    let result =string[0]
    for(let i = 1;i<string.length;i++){
        if(result.length < string[i].length){
            result = string[i]
        }
    }
    return result
}
console.log(longeststring(string));
