//* Function Declaration
// The classic way. Starts with the 'function' keyword.
function sayHi(name) {
  console.log(`Hi, ${name} (Function Declaration)`);
}

//* Function Expression
// Assigning a function to a variable.
// Usually, anonymous functions are used.
// An anonymous function is a function that has no name.
const sayHiExpression = function (name) {
  console.log(`Hi, ${name} (Function Expression)`);
};

//* Arrow Function Expression
// Modern and most concise syntax.
const sayHiArrow = (name) => {
  console.log(`Hi, ${name} (Arrow Function)`);
};

//* Invoking Functions
// Functions only execute when they are called (invoked).
sayHi("Arthur");
sayHiExpression("Dutch");
sayHiArrow("Micah");
