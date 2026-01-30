// 1. Numbers
/*
  Unlike other programming languages, you don't have to declare the type of the 
  variable when you declare it. Whether it's a whole number or a decimal number,
  JavaScript will automatically assign the type of the variable.
*/

const age = 20;
const pi = 3.14159; // A decimal number for math calculations.

// You can perform all the math operations you know.
const a = 5;
const b = 10;

console.log(a + b); // 15
console.log(b - a); // 5
console.log(a * b); // 50
console.log(b / a); // 2

console.log("String" / 1); // NaN which means "Not a Number"

// 2. Strings
// A string can be a word, a sentence, a paragraph even a book.
// There are 3 types of strings.

// If your string contains single quotes, you can use double quotes.
const doubleQuote = "It's a sunny day.";

// If your string contains double quotes, you can use single quotes.
const singleQuote = 'She said, "We were on a break!"';

// If your string contains both single and double quotes, you can use backticks. Also known as template literal.
const firstName = "Luke";
const greeting = `Hello, ${firstName}`;
console.log(greeting); // Hello, Luke

//! Backticks allow you to do a couple of very cool things, such as embed variables or expressions using the $ and curly braces syntax.
const items = 5;
const price = 10;
const total = `You have ${items} items in your cart and the total price is ${price}`;

const multipleLines = `
This is a string
with multiple lines`;

// 3. Booleans
const isSnowing = true; // Yes, it is snowing!
const isSchoolCancelled = true; // Thankfully, school is cancelled.

/*
  if (isSnowing && isSchoolCancelled) {
    console.log("Stay inside and watch a movie!");
  } else {
    console.log("Go to school...");
  }

  This is not a part of this course but its reflects the main usage of booleans.
  If it's snowing and school is cancelled, then stay inside and watch a movie.
*/

// You can also expect to get a boolean as a result of comparison.
console.log(5 > 10); // false
console.log(5 < 10); // true

// 4. Null
// Null is a special value that means "nothing" or "empty".
// It's a value that represents the intentional absence of any object value.
const container = null; // It's empty but it's there.
console.log(container); // null

// 5. Undefined
// Means something is missing
let myPlaylist; // No value assigned yet.
console.log(myPlaylist); // undefined

//? What is the difference between null and undefined?
// undefined usually means JavaScript does not have a value yet,
// null means the developer intentionally removed the value.

let x;
x = undefined; // not recommended if you want to reset values just use null.
console.log(x); // undefined

// 6. Symbol - unique identifier (Advanced topic)
const id = Symbol("uniqeuID");
