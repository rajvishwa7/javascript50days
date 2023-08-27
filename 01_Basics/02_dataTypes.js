"use strict"; // treat all JS code as newer version
// currently mostly all JS engine works on strict mode only

// alert( 5 + 7 ) // can't run using nodejs (can run using console browser)

// code readability should be high

// console.log(5+2) console.log("Raj") 
// it will give error & if it's run then also not an correct way write code

// correct way
console.log(5+2); 
console.log("Raj");

let name = "Raj" // string
let age = 20 // number
let isLoggedIn = false // boolean

console.log(typeof age); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// original JavaScript [ECMAScript] standard documentation
// https://tc39.es/ecma262/

// Types of DataTypes [Primitive]

// number ==> 2 to power 53
// bigint ==> not that much usefull
// string ==> ""
// boolean ==> true / false
// undefined ==> [value not assigned]
// null ==> standalone value [empty value]
// symbol ==> unique [usefull in React]

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false

// const bigNumber = 45665478997456654n // bigint (just add 'n' at the end)

// [Non-Primitive] (Reference Type)

// objects
// Array
// Functions

const heros = ["shaktiman", "naagraj", "rajnikant"]

let myObj = {
    name:"Raj",
    age:30
}

const myFunction= function(){
    console.log("Hello SuperHeros");
}

// DataTypes Output
console.log(typeof myFunction); // function
console.log(typeof myObj); // object
console.log(typeof heros); // object
console.log(typeof anotherId); // symbol
