function palindrome(x){
    const str = x.toLowerCase().replace(/[^a-z0-9]/g,'')

    let reversed = str.split('').reverse().join('')
     return str === reversed
}
console.log(palindrome('123321'));
// return true ,123 return false


