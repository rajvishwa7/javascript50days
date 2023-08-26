const accountId = 12071986
let accountEmail = "raj@google.com"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;

// accountId = 2023 // this one not allowed
console.log(accountId);

accountEmail = "xyz@banking.com"
accountPassword = "9999"
accountCity = "Chennai"

// {} ==> Scope

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
bcoz of issues in Block Scope and Functional Scope
*/