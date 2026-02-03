//* Ternary Operator
// The ternary operator is a concise way to write an if-else statement.

const age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// condition ? expressionIfTrue : expressionIfFalse
age >= 18
  ? console.log("You are eligible to vote.")
  : console.log("You are not eligible to vote.");

// If something is repeated in both of these cases, such as a console log in this case, you can actually wrap the entire thing within a console log and just return the strings.
console.log(
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.",
);

// You can also use the ternary operator to assign a value to a variable.
const message =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message);

// --- ADVANCED USAGE ---

//* 1. Using Ternary in Template Literals
// This is one of the most common use cases in modern JS.
const name = "Omer";
console.log(`Hello, ${name ? name : "Stranger"}!`);

//* 2. Nested Ternary (else if behavior)
// Careful! Too many nested ternaries can make code hard to read.
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(`Your grade is: ${grade}`); // B

//* 3. When to use Ternary?
// - Use it for simple, single-line checks and variable assignments.
// - Use if/else for complex logic with multiple lines or nested conditions to keep the code readable.
