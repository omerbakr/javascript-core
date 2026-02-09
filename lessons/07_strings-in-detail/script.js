// If you're not sure what a string is, review the basics here:
// ../03_data-types/01-primitives.js

//* String Methods

const name = "Luke";
const sentence = "May the Force will be with you";

//* String Length
// Strings are sequences of characters.
// Each character has a position (index), starting from 0.

// The length property returns the total number of characters in the string
console.log(name.length); // 4

// Accessing Characters in a String
// To get the first letter of a string:
console.log(name[0]); // L

// To get the last character:
// String indices start at 0, so the last index is length - 1
console.log(name[name.length - 1]); // e

//* Changing the Case of a String
// JavaScript provides built-in string methods to change letter casing.

// string.toUpperCase()
// string.toLowerCase()
// These methods allow you to convert a string to all uppercase or lowercase letters.

console.log(sentence); // May the Force will be with you
console.log(sentence.toUpperCase()); // MAY THE FORCE WILL BE WITH YOU
console.log(sentence.toLowerCase()); // may the force will be with you

//! These methods do NOT change the original string.
//! They return a new string with the updated casing.

//* Finding Substrings in a String
// There are several ways to search for a substring inside a string.
// Below are the most commonly used ones.

const exampleString = "I love ducks, he said, ducks are great!";

// 1. str.indexOf(substr, startIndex)
// indexOf returns the index where the substring FIRST appears.
// If no match is found, it returns -1.
console.log(exampleString.indexOf("ducks")); // 7
console.log(exampleString.indexOf("Ducks")); // -1 (case-sensitive)

// The second parameter tells indexOf where to start searching.
// It does NOT affect how the returned index is calculated.
console.log(exampleString.indexOf("ducks", 8)); // 23

// 2. str.lastIndexOf(substr)
// Works like indexOf, but searches from the END of the string.
// The returned index is still based on the start of the string.
console.log(exampleString.lastIndexOf("ducks")); // 23

// 3. str.includes(substr)
// Use includes() when you only care whether the substring exists.
// It returns true or false.
console.log(exampleString.includes("ducks")); // true
console.log(exampleString.includes("dogs")); // false

// 4. str.startsWith() and str.endsWith()
// These methods check if a string starts or ends with a specific value.
console.log(exampleString.startsWith("I")); // true
console.log(exampleString.endsWith("great!")); // true
console.log(exampleString.endsWith("ducks")); // false

//* Getting a Substring
// One of the most commonly used methods for getting a substring from a string is slice().
// It allows you to extract a specific part of a string using start and end indexes.

// str.slice(start, end)
// slice() returns the part of the string from start up to (but NOT including) end.
// If the end parameter is omitted, extraction continues to the end of the string.

// Index positions:
// M(0) a(1) y(2)  (3) t(4) h(5) e(6)  (7)
// F(8) o(9) r(10) c(11) e(12)

// Extracts characters from index 8 up to index 13 (13 is NOT included)
console.log(sentence.slice(8, 13)); // "Force"

// If the end parameter is omitted, slice() extracts to the end of the string
console.log(sentence.slice(8)); // "Force will be with you"

//* Splitting Strings
// The split() method divides a string into an array of substrings
// based on a specified separator.

// 1. Splitting a Word into Characters
// Using an empty string "" as the separator splits the string
// into individual characters.

console.log(name.split("")); // ["L", "u", "k", "e"]

// 2. Splitting a Sentence into Words
// Using a space " " as the separator splits the sentence into words.
console.log(sentence.split(" "));
// ["May", "the", "Force", "will", "be", "with", "you"]

//! Important:
// split() always returns an array.
// This allows you to loop over, modify, or analyze each part separately.

//* Reverse, Repeat, & Trim a String
// 1. Reverse
// JavaScript does NOT have a built-in string method to reverse a string.
// A common workaround is:
// 1) Convert the string into an array
// 2) Reverse the array
// 3) Join it back into a string

const original = "test";
const reversed = original.split("").reverse().join("");
console.log(reversed); // "tset"

// 2. Repeat
// The repeat() method returns a new string that contains
// the original string repeated a specified number of times.
const dogSays = "woof";
console.log(dogSays.repeat(5)); // "woofwoofwoofwoofwoof"

// 3. Trim
// The trim() method removes whitespace from BOTH ends of a string.
// It does NOT affect spaces inside the string.
const messyString = "       Hello World!        ";
console.log(messyString.trim()); // "Hello World!"
