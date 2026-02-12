// Arrays in the JavaScript comes with a variety of built-in methods that allow you to manipulate their data, such as adding or removing elements at certain positions.

//* Basic Array Methods
const fruits = ["apple", "banana", "orange"];

//* array.push(value);
// Adds a new element to the end of the array.
fruits.push("strawberry");

fruits.push("mango", "kiwi"); // You can add multiple values at once

console.log(fruits); // ["apple", "banana", "orange", "strawberry", "mango", "kiwi"]

//* array.pop();
// Removes the last element from an array and returns that element.
const lastElement = fruits.pop();

console.log(lastElement); // "kiwi"
console.log(fruits); // ["apple", "banana", "orange", "strawberry", "mango"]

//* array.shift();
// Removes the first element from an array and returns that element.
const firstElement = fruits.shift();

console.log(firstElement); // "apple"
console.log(fruits); // ["banana", "orange", "strawberry", "mango"]

//* array.unshift(value);
// Adds a new element to the beginning of the array.
fruits.unshift("grape");

console.log(fruits); // ["grape", "banana", "orange", "strawberry", "mango"]

//* array.splice(startIndex, deleteCount, item);
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(2, 1, "blueberry");
// 2 (startIndex): Start the operation at index 2 (which is the 3rd element).
// 1 (deleteCount): Remove 1 element starting from that position.
// "blueberry" (item): Insert this new element in place of the removed one.

console.log(fruits); // ["grape", "banana", "blueberry", "strawberry", "mango"]

//* array.slice(startIndex, endIndex);
// Returns a shallow copy of a portion of an array into a new array object selected from startIndex to endIndex (endIndex not included).
const citrus = fruits.slice(1, 3);
// 1 (startIndex): Start the operation at index 1 (which is the 2nd element).
// 3 (endIndex): Stop the operation at index 3 (which is the 4th element).

console.log(citrus); // ["banana", "blueberry"]
console.log(fruits); // ["grape", "banana", "blueberry", "strawberry", "mango"]
