const score = 555
console.log(score); // 555 // automatically define as Number
const balance = new Number(111)
console.log(balance); // [Number: 111] // specifically cast as Number
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 111.00 (mostly used in Ecommerce App)

const otherNumber = 125.7896
console.log(otherNumber.toPrecision(3)); // 126
console.log(otherNumber.toPrecision(2)); // 1.3e+2
console.log(otherNumber.toPrecision(4)); // 125.8

const myNewNum = 1000000
console.log(myNewNum.toLocaleString()); // 1,000,000 (US Standard Value)
console.log(myNewNum.toLocaleString('en-IN')); // 10,00,000 (Indian Standard Value)

// ******************* Maths **********************

console.log(Math); // object [Math] {}
console.log(Math.abs(-7)); // 7 convert negative into positive
console.log(Math.round(123.56)); // 124 roundoff
console.log(Math.ceil(123.26)); // 124 higher value
console.log(Math.floor(123.96)); // 123 lower value

console.log(Math.random()); // random value always between 0 and 1
console.log((Math.random()*10) + 1); // to avoid getting zero 0 value
console.log(Math.floor(Math.random()*10) + 1); // to roundoff value

// find random number between the range of 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))