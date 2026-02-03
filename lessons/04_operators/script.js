// Operators are used to perform operations on variables and values.
// There are different types of operators in JavaScript.

//* 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations.

// Addition (+)
const sum = 10 + 5;
console.log("Addition: ", sum); // 15

// Subtraction (-)
const difference = 10 - 5;
console.log("Subtraction: ", difference); // 5

// Multiplication (*)
const product = 10 * 5;
console.log("Multiplication: ", product); // 50

// Division (/)
const quotient = 10 / 5;
console.log("Division: ", quotient); // 2

// Modulus (%)
const remainder = 10 % 3;
console.log("Modulus: ", remainder); // 1

// Exponentiation (**)
const power = 10 ** 2;
console.log("Exponentiation: ", power); // 100

// Increment (++)
let increment = 10;
increment++;
console.log("Increment: ", increment); // 11

// Decrement (--)
let decrement = 10;
decrement--;
console.log("Decrement: ", decrement); // 9

//* 2. Comparison Operators
// Comparison operators compare two values and return a boolean value: true or false.

const x = 10;
const y = 5;
const z = "10"; // A string with the same value as x

// Greater than (>)
console.log("Is x > y? ", x > y); // true (10 is greater than 5)

// Greater than or equal to (>=)
console.log("Is x >= y? ", x >= y); // true (10 is greater than 5)

// Less than (<)
console.log("Is y < x? ", y < x); // true (5 is less than 10)

// Less than or equal to (<=)
console.log("Is y <= x? ", y <= x); // true (5 is less than 10)

// Loose equality (==) - Compares values, but ignores types
console.log("Is x == z? ", x == z); // true (10 == "10" because == allows type conversion)

// Strict equality (===) - Compares both value and type
console.log("Is x === z? ", x === z); // false (10 is a number, "10" is a string)

// Loose inequality (!=) - Checks if values are different, ignoring type
console.log("Is x != z? ", x != z); // false (10 == "10" due to type coercion)

// Strict inequality (!==) - Checks if values OR types are different
console.log("Is x !== z? ", x !== z); // true (10 is a number, "10" is a string)

//* 3. Assignment Operators
// Assignment operators are used to assign values to variables.

// Assignment (=)
let number = 5;

number += 5; // the same as number = number + 5;
number -= 5; // the same as number = number - 5;
number *= 5; // the same as number = number * 5;
number /= 5; // the same as number = number / 5;
console.log(number);

//* 4. Logical Operators
// Logical operators are used to combine two or more conditions.

// AND Operator (&&)
// It checks whether all operands are truthy values.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true && true && true && false); // false
// So it is true only when all operands are true.

let signedIn = true;
let isVerified = true;

// If user is signed in and verified, show the dashboard.
console.log(signedIn && isVerified); // true

// OR Operator (||)
// It checks whether at least one operand is truthy value.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(false || false || false || true); // true

// If user is signed in or verified, show the dashboard.
console.log(signedIn || isVerified); // true

// NOT Operator (!)
// It reverses the boolen result of a condition.
console.log(!true); // false
console.log(!false); // true

// If user is NOT signed in, redirect to the login page.
if (!signedIn) {
  console.log("Redirecting to login page...");
}

// 5. Ternary Operator
// Ternary operator is a short way to write if-else statements.
const result = condition ? trueValue : falseValue;

// The same as:
function result(condition, trueValue, falseValue) {
  if (condition) {
    return trueValue;
  } else {
    return falseValue;
  }
}
