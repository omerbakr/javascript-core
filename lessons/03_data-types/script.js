//* 1. Primitive Data Types
// Numbers
// Strings
// Booleans
// Null
// Undefined
// Symbol

//* 2. Complex Data Types
// Objects
// Arrays

//* 3. Data Type Identification
// When we talking about data types, it's also important to know how we can identify different data types.
// We can use the typeof operator to identify the data type of a variable.

const car = {
  name: "Toyota",
  year: 2025,
};

console.log(typeof 35); // "number"
console.log(typeof "35"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a well-known JavaScript quirk)
console.log(typeof NaN); // "number" (NaN means "Not a Number", but its type is still number)
console.log(typeof Symbol()); // "symbol"
console.log(typeof car); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are objects in JavaScript)
