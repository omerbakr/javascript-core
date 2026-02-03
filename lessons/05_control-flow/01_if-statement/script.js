const condition = true;
// If the condition is true, then the code inside the if block will be executed.
// If the condition is false, then the code inside the if block will be skipped.
if (condition) {
  console.log("Condition is true");
}

let age = 18;
// If the age is greater than or equal to 18, then the code inside the if block will be executed.
// If the age is less than 18, then the code inside the if block will be skipped.
if (age >= 18) {
  console.log("You are an adult");
}

// If statements can also have else if and else statements.

if (age >= 18) {
  console.log("You are an adult");
} else if (age === 18) {
  console.log("You are exactly 18 years old");
}
// Since the both conditions are true, first condition will be executed and the code will stop.

age = 15;
if (age > 18) {
  console.log("You are an adult");
} else if (age === 18) {
  console.log("You are exactly 18 years old");
} else {
  console.log("You are a minor");
}
// The else statement doesn't have a condition.
// That's beacuse if nothing is matched, else block will be executed.
