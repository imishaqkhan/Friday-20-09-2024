function vowels(str){
    let count = 0
    const vowel= ['a','e','i','o','u']
    for(let char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++
        }
    }
      return count
}
let sting = 'hello wellcome back'
console.log(vowels(sting));
// return 6

function vowels(string){
    let vowel =string.match(/[aeiou]/gi)
    return vowel ? vowel.length :0
}
console.log(vowels('wellcome'));
// return 3
