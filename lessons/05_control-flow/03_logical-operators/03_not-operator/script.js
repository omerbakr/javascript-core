//* NOT Operator (!)
// The logical NOT (!) operator converts a value to a boolean and then reverses it.
// ! always returns a boolean value (true or false),
// even when used with non-boolean operands.

console.log(!true); // false
console.log(!false); // true

console.log(!"hello"); // false
// "hello" → truthy → converted to true → reversed to false

console.log(!0); // true
// 0 → falsy → converted to false → reversed to true

console.log(!null); // true
// null → falsy → converted to false → reversed to true

//* Double NOT (!!)
// Common pattern to explicitly convert a value to boolean

console.log(!!"hello"); // true
console.log(!!0); // false
console.log(!!undefined); // false

// !! does NOT negate the value logically.
// It only forces boolean conversion.
