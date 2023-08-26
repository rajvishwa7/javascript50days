let score = 77
// let target = "7abc" // NaN
// let target = null // 0 (Zero)
// let target = undefined // NaN
// let target = true // 1 (One)
// let target = false // 0 (Zero)
let target = "Raj" // NaN

console.log(typeof score);
console.log(typeof (score)); // different method

console.log(typeof target);
console.log(typeof (target)); // string

let valueInNumber = Number(target) // not to rely on Number
console.log(typeof valueInNumber); // convert in number even it's 77abc
console.log(valueInNumber); // NaN => Not an Number

let isLogOut = 0 
let isLogIn = 1 
// let isLogEmpty = "" // false
// let isLogEmpty = "Raj" // true
let booleanIsLogIn = Boolean(isLogIn)
let booleanIsLogOut = Boolean(isLogOut)
console.log(booleanIsLogIn); // true
console.log(booleanIsLogOut); // false

let myNumber = 9

let stringNumber = String(myNumber) 
console.log(stringNumber);
console.log(typeof stringNumber); // converted into String