// In 01-primitives.js we talked about primitive data types.
// Primitives hold single values and are immutable.

// In real-world applications, we often need to group multiple values together.
// For that, JavaScript provides reference types such as objects and arrays.

// 1. Objects (reference type)
// Objects store data as key-value pairs.
const person = {
  name: "Han Solo",
  age: 25,
  isAlive: true,
  car: "Millennium Falcon",
  address: {
    city: "Tatooine",
    country: "Galaxy",
  },
};

// Objects are mutable, meaning their properties can be changed after creation.

// Dot notation
// Dot notation is the most common way to access object properties.
console.log(person.name); // Han Solo

// Bracket notation
// Bracket notation is useful when the property name is dynamic or stored in a variable.
console.log(person["name"]); // Han Solo

// 2. Arrays (reference type)
// Arrays are a special kind of object used to store ordered collections of values.
const movies = ["Star Wars", "The Matrix", "The Godfather"];

// Array indexes start from 0.
console.log(movies[0]); // Star Wars
console.log(movies[1]); // The Matrix
console.log(movies[2]); // The Godfather
