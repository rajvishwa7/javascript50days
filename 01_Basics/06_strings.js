const name = "Raj"
const myScore = 99 
// console.log(name + myScore + " winner"); // outdated syntax

// backtick `` // modern way syntax
console.log(`My name is ${name}, I'm an Winner with score ${myScore}`);

const gameName = new String("rockingraj")
console.log(gameName[0]); // r
console.log(gameName[3]); // k
console.log(gameName.__proto__); // {} object
console.log(gameName.length); // 10
console.log(gameName.toUpperCase()); // ROCKINGRAJ
console.log(gameName.charAt(5)); // n
console.log(gameName.indexOf('i')); // 4

const newString = gameName.substring(0,4) 
console.log(newString); // rock

const anotherString = gameName.slice(-8,4) 
console.log(anotherString); // ck // can use negative value

const newStringOne = "    Rocking  "
console.log(newStringOne); 
console.log(newStringOne.trim()); 

const url = "https://avenger.com/avenger%20marvel"
console.log(url.replace('%20','-')); // https://avenger.com/avenger-marvel
console.log(url.includes('avenger')); // true
console.log(url.includes('thor')); // false

const gamer = new String("rocking-raj")
console.log(gamer.split('-')); // [ 'rocking', 'raj' ]
