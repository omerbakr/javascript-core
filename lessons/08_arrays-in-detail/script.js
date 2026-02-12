// In programming, we often need an ordered collection of items.
// Where we have a 1sr, 2nd, 3rd element and so on.
// This is where arrays come in.

//* Declaration
// An array is a data structure that stores a collection of items.
const months = ["January", "February", "March", "April", "May"];
// This is how we declare an array, the most important part here is the square brackets []:

//* Accessing elements
// Each element is assigned a unique index starting from 0 for the first element.
console.log(months[0]); // January

//* Modifying Elements
months[2] = "March Madness"; // ["January", "February", "March Madness", "April", "May"]

// Or add a new to the array
months[5] = "June"; // ["January", "February", "March Madness", "April", "May", "June"]

//* Array Length
// Same as strings, arrays have a length property.
console.log(months.length); // 6

//* Storing Different Types
// Arrays can store different types of data.
const arr = [
  "January",
  { name: "Luke" },
  true,
  67,
  null,
  undefined,
  function () {
    console.log("Noooo");
  },
];

// Yes, you can store functions in arrays and call them.
arr[6](); // Noooo

//* Looping Through Arrays
// You'll often need to loop through all the elements of an array. That's where the for loop comes in handy:

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

// This will print:
// January
// February
// March Madness
// April
// May
// June
