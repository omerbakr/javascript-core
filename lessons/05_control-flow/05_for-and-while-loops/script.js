// Loops in JavaScript
// Sometimes we want to repeat an action a number of times.
// For example, let’s imagine we want to display numbers from zero to nine on the console.
// You might think of doing something like this:

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

// But this is not very efficient.
// What if we wanted to display numbers from zero to one thousand?
// We would have to write one thousand console.log statements!
// This is where loops come in handy.

//* The for Loop
// The for loop is more complex, but it’s also the most commonly used loop. It’s called a for loop because it runs "for" a specific number of times .
// For loops are declared with three optional expressions separated by semicolons: initialization, condition, and final-expression, followed by a statement (usually a block statement).

// Initialization: Sets up the loop variable (runs once).
// Condition: If true, the loop continues; if false, it stops.
// Final-expression: Updates the variable after each iteration.

/* 
  for ([initialization]; [condition]; [final - expression]) {
    // code to be executed
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//! ⚠️ Infinite Loop Warning
// In a for loop, if you forget to increment the variable (i++),
// the condition will ALWAYS be true, and your browser will CRASH!

/*
  for (let i = 0; i < 10; ) {
    console.log(i);
  }
*/

//* The While Loop
// The while loop is simpler than the for loop, and you want to use it when you don't know for how many times you want to run that loop.
// It will continue executing the block of code as long as the specified condition is true.

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//! ⚠️ Infinite Loop Warning
// In a while loop, if you forget to increment the variable (i++),
// the condition will ALWAYS be true, and your browser will CRASH!

/*
  let i = 0;
  while (true) {
    console.log(i);
    i++;
  }
*/
