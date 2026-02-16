//* Advanced Array Methods

//* concat(...items);
// Returns a new array with all members of the current one and adds items to it.
const fruits = ["apple", "banana", "orange"];
const moreFruits = ["strawberry", "mango"];
console.log(fruits.concat(moreFruits)); // ["apple", "banana", "orange", "strawberry", "mango"]

//* indexOf(item, pos)
// item: the item to you are looking for
// pos: the position to start searching from
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("banana", 2)); // If the item is not found, it returns -1

//* lastIndexOf(item, pos)
// same as indexOf, but starts searching from the end of the array
console.log(fruits.lastIndexOf("orange")); // 2

//* includes(value)
// Returns true if the array contains the value, otherwise returns false.
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("banana", 2)); // false

//* find(func)
// Returns the first element for which func returns a truthy value.
const foundFruit = fruits.find((fruit) => fruit.length > 5); // Look through the list of fruits and grab the first one you find that has more than five letters in its name.
// The syntax in the above might look a bit strange, but it's actually quite simple.

/**
 * const foundFruit = fruits.find(function(fruit) {
 *  if (fruit.length > 5) {
 *    return true;
 *  } else {
 *    return false;
 *  }
 * })
 */

console.log(foundFruit); // "banana"

//* filter(func)
// Filters elements through func, returning all values that make it return true.
const filteredFruits = fruits.filter((fruit) => fruit.includes("a")); // Look through the list of fruits and grab all the ones you find that have the letter "a" in their name.
console.log(filteredFruits); // ["apple", "banana"]

//* findIndex(func)
// Like find, but returns the index of the first matched element.
const foundIndex = fruits.findIndex((fruit) => fruit.startsWith("b")); // Look through the list of fruits and grab the index of the first one you find that starts with the letter "b".
console.log(foundIndex); // 1

//* forEach(func)
// Executes a function for each array element. Does not return anything.
fruits.forEach((fruit) => console.log(fruit)); // Look through the list of fruits and print each one of them to the console.

//* map(func)
// Returns a new array with the results of calling a function for every array element.
const mappedFruits = fruits.map((fruit) => fruit.toUpperCase()); // Look through the list of fruits and convert all the letters to uppercase.
console.log(mappedFruits); // ["APPLE", "BANANA", "ORANGE"]

//? What's the difference between forEach and map?
const forEachResult = fruits.forEach((fruit) => fruit.toUpperCase());
console.log(forEachResult); // undefined

const mapResult = fruits.map((fruit) => fruit.toUpperCase());
console.log(mapResult); // ["APPLE", "BANANA", "ORANGE"]

// So if you want to return a new array, you should use map. Else, if you want to just iterate through the array, you should use forEach.

//* sort(func)
// Sorts the elements of an array in place and returns the sorted array.
const sortedFruits = fruits.sort(); // Sort the list of fruits in alphabetical order.
console.log(sortedFruits); // ["apple", "banana", "orange"]

//* reverse()
// Reverses the elements of an array in place and returns the reversed array.
const reversedFruits = fruits.reverse(); // Reverse the list of fruits.
console.log(reversedFruits); // ["orange", "banana", "apple"]

//* split(by)
// Converts a string to an array.
const string = "apple,banana,orange";
const array = string.split(",");
console.log(array); // ["apple", "banana", "orange"]

//* join(by)
// Converts an array to a string.
const joinedString = array.join(",");
console.log(joinedString); // "apple,banana,orange"

//* reduce(func, initialValue)
// Executes a reducer function on each element of the array, resulting in a single output value.
const numbers = [1, 2, 3, 4];
// acc is the accumulator, num is the current element
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

//* some(func)
// Returns true if at least one element in the array satisfies the provided testing function.
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // true

//* every(func)
// Returns true if all elements in the array satisfy the provided testing function.
const allEvenNumbers = numbers.every((num) => num % 2 === 0);
console.log(allEvenNumbers); // false

//* fill(value, start, end)
// Fills all the elements of an array from a start index to an end index with a static value.
// value: the value to fill the array with
// start: the index to start filling from
// end: the index to stop filling at (not included)
const filledArray = new Array(3).fill("Hello", 1, 3);
console.log(filledArray); // [empty, "Hello", "Hello"]
