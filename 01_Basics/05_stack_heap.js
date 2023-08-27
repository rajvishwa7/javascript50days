// Stack (Primitive)
// Heap (Non-Primitive)

// Stack ==> Copy
// Heap ==> Reference

let myJob = "DotNet Developer"
let newJob = myJob
newJob = "MERN Developer"

console.log(myJob); // DotNet Developer
console.log(newJob); // MERN Developer

let user1 = {
    email: "user@gmail.com",
    upi: "user@hdfc"
}
let user2 = user1
user2.upi = "user@axis"

console.log(user1.upi); // user@axis 
console.log(user2.upi); // user@axis (Heap with same Reference)