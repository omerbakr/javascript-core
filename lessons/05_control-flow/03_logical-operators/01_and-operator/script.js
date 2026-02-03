//* AND Operator (&&)
// The logical AND (&&) operator evaluates expressions from left to right.
// It returns the FIRST falsy value it encounters.
// If all values are truthy, it returns the LAST value.

//! Important:
// The && operator does NOT always return true or false.
// It returns one of the actual operand values.
// The boolean conversion happens later (for example, inside an if statement).

const age = 18;
const hasDriversLicense = true;

console.log(age >= 18 && hasDriversLicense); // true
// age >= 18          → true
// hasDriversLicense → true
// All operands are truthy, so the last value (hasDriversLicense) is returned.
// Since hasDriversLicense is true, the result is true.

// AND operator with non-boolean values
console.log("truthy" && 33 && "test" && 1); // 1
// "truthy" → truthy (non-empty string) → continue
// 33       → truthy (non-zero number)  → continue
// "test"   → truthy (non-empty string) → continue
// 1        → truthy and last operand → returned

console.log("truthy" && 0 && "test" && 1); // 0
// "truthy" → truthy → continue
// 0        → falsy → evaluation stops here
// The first falsy value (0) is returned.

// Common usage in conditional statements
if (age >= 18 && hasDriversLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}
