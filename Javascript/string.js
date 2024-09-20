let text = 'iamishaq'
let a =text.at(4)
console.log(a);
// return 's'


// char at method 
let x = text.charAt(7)
console.log(x);
// return q

console.log(text.charAt(text.length-2));
// return a

console.log(text.charCodeAt(0));
// return 105


console.log(text.codePointAt(0));
// return unicode 105

// concate method 
let text1 = 'of pakkaya'
console.log(text.concat(' ',text1));
// return iamishaq of pakkaya

console.log(text1.endsWith('pakkaya'));
// return true

console.log(String.fromCharCode(105.102,45,342,100));
// 

let string = 'hello world ,wellcome to javascript'
console.log(string.includes('to'));
// return true

console.log(string.includes('and'));
//return false

console.log(string.indexOf('t',23));
// return true

console.log(string.lastIndexOf('world'));
// return 6

console.log(string.match('come'));

//  return    [
//     'come',
//     index: 17,
//     input: 'hello world ,wellcome to javascript',
//     groups: undefined
//   ]


console.log(string.match(/o/));
// return index 4

console.log(string.match(/o/g));
// return [ 'o', 'o', 'o', 'o' ]

let num = '44'
console.log(num.padEnd(7,'0k'));
// return  440k0k0

console.log(num.padStart(10,'Hi'));
// return  HiHiHiHi44

console.log(num.repeat(2));
// return 4444

console.log(string.replace('hello','Hi'));
// return Hi world ,wellcome to javascript

console.log(string.replaceAll('o', 'a'));
// return hella warld ,wellcame ta javascript

console.log(string.slice(0,21));
// return selected part ( hello world ,wellcome)

console.log(string.split(" " ));
// return   'hello', 'world', ',wellcome', 'to', 'javascript' ]

console.log(string.startsWith('hello'));
// return true


console.log(string.substr(10,20));
// return d ,wellcome to javas

console.log(string.toLocaleUpperCase());
// return   HELLO WORLD ,WELLCOME TO JAVASCRIPT

let space = '     hello world         '
console.log(space.trim());
// return remove space (hello world)

let str = 'value'
console.log(str.valueOf());
// retutn value

