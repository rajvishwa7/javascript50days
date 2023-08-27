// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

console.log("2" > 1); // true // js automatically changed "2" into Number
console.log("02" > 1); // true

/* 
========> avoid this type of conversion
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true // not getting predictable result

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
*/

// clean code conversion
console.log("2" === 2); // false // checking DataType same or not

