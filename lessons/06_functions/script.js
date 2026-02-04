//! Functions
// Functions are one of the most important parts of any programming language.
//! Functions are blocks of code that perform a specific task.
// They allow the code to be called many times without repeating the same code.

// Defining Functions
// the function keyword is used to define a function
// the function name is followed by parentheses
// a list of parameters enclosed in parentheses ()
// the function body is enclosed in curly braces {}

// function: The reserved JavaScript keyword for creating a function.
// square: The name of the function.
// Parameters:  Inside the parentheses (), we have parameters. These are values we'll send to our function when calling it. The function square takes one parameter, called number. You can name parameters however you'd like.
// return: The keyword used to return a value from a function.

function square(number) {
  // number is the parameter
  return number * number;
}

// Calling a function
// Defining a function does not execute it. To run the code inside a function, you need to "call" it.

// Here, we have the function name followed by parentheses. Inside the parentheses, we put arguments.
// Arguments are the values we want to pass to our parameters.
// For example, if we send the value of 5, the parameter number becomes 5. The function then multiplies it by itself and returns the result.
square(5); // 5 is the argument

//? What is the difference between parameter and argument?
// Parameter is the variable that is defined in the function definition.
// Argument is the value that is passed to the function when it is called.
// In our example, number is the parameter and 5 is the argument.

// To use the values from the function, we can store them in a variable.
const result = square(5);
console.log(result); // 25

// We can also use the function directly in an expression.
console.log(square(5)); // 25

//! Function Naming
// The function below have same functionallity as the square function. But as you can see, the function name is different. This is because the function name is arbitrary. You can name the function however you'd like.
// But, when the project gets bigger, when you work in a team or when you come back to your code after a long time, it is important to name the functions descriptively so that it is easy to understand what the function does.
function a(b) {
  return b * b;
}

console.log(a(5)); // 25

// You've already used functions in previous lessons. For example, console.log() is a function.
// console.log() is a function that prints the value of a variable to the console.
// As you can see, we have passed an argument to console.log() multiple times.
