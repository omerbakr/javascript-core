/*
 Variables are named containers that store reusable data.
 They let you assign, update, and access values in your program.

 Baby steps:
 1. Declare a variable
 2. Assign a value
 3. Use the value
*/

// JavaScript variable types:
// - var   → legacy, avoid using
// - let   → reassignable
// - const → not reassignable

// let: value can be changed
let mutable = "This can be changed";
mutable = "Changed once";
mutable = "Changed again";
console.log(mutable);

// const: value cannot be reassigned
const immutable = "This cannot be changed";
// immutable = "This will throw an error"; // ❌ reassignment not allowed
console.log(immutable);

// Naming is not cosmetic. Bad names create bugs before logic does.
let userAge = 22; // ✅ clear
let a = 22; // ❌ useless
