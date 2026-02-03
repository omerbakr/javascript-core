//* Falsy values
// In JavaScript, some values are automatically evaluated as false
// when used in a boolean context (such as inside an if statement).
// These values are called "falsy values".

// 1. false
// 2. 0
// 3. "" (empty string), '', ``
// 4. null
// 5. undefined
// 6. NaN

// When any of these values is used in a condition,
// the condition will evaluate to false.

const value = 0;

if (value) {
  console.log(`Value ${value} is truthy`);
} else {
  console.log(`Value ${value} is falsy`);
}

// In this example, the else block runs because 0 is a falsy value.

//* Truthy values
// Any value that is NOT falsy is considered truthy.
// (Non-empty strings, numbers, objects, arrays, functions, etc.)

// ❌ Verbose and unnecessary validation
let username = "";

if (username !== "" && username !== null && username !== undefined) {
  console.log("Welcome " + username);
} else {
  console.log("Enter a valid username");
}

// This approach works, but:
// - It is repetitive
// - It hurts readability
// - It does not scale well in real-world codebases

// ✅ Cleaner and more common pattern
if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Enter a valid username");
}
