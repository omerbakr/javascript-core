//* Return Keyword
// 1. Outputting Data: It allows a function to produce an output value that can be used elsewhere.
// 2. Stopping Execution: It immediately exits the function. Any code after 'return' is ignored.
// 3. Default Behavior: Every function in JS returns 'undefined' unless a 'return' is specified.

// Every function in JavaScript returns undefined unless otherwise specified.

const add = (a, b) => {
  return a + b;
};
// Function in the above will return the sum of a and b. We can then invoke the function and save the return value to a variable:
const sum = add(1, 2);

console.log(sum);

// If function consists only of a single return statement, and only then, you can write it like this:
// const add = (a, b) => a + b;
// Note: When we omit curly braces {}, the 'return' keyword is also omitted because it's implied (implicit return).

const returnNumbers = () => {
  return 1; // Return statement stops function execution immediately
  return 2; // This line will never be executed
};

// As soon as you return out of the function, you cannot get back into it unless you recall it.

const result = returnNumbers();

// JavaScript typically runs linearly from top to bottom.
// But in this case, it will notice that this is a function declaration and it won't execute it.
// It will only execute it when we call it.

console.log(result); // 1
