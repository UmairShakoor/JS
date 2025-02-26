// Arrays are like boxes that can hold many things (even different kinds of things)
let arr = [1, 2, 3, 4, 5, 6, 7]; // Make a box with numbers inside
// Each thing has a number (index) - starts from 0
console.log(arr, typeof arr); // Show the box and what kind of thing it is (it's an object)
console.log(arr.length); // Show how many things are in the box

// You can change what's inside the box

arr[1] = 5666; // Change the thing at number 1 to 5666
console.log(arr[1]); // Show what's at number 1
console.log(arr[2]); // Show what's at number 2
console.log(arr[4]); // Show what's at number 4

console.log(arr.toString()); // Turn the box into a line of text
console.log(arr.join(" and ")); // Turn the box into a line of text with "and" between things

console.log(arr.pop()); // Take out the last thing in the box
console.log(arr.shift()); // Take out the first thing in the box

console.log(arr.push("5666")); // Put "5666" at the end of the box
console.log(arr.unshift("Hello")); // Put "Hello" at the start of the box

console.log(delete(arr[1])); // Remove the thing at number 1 (leaves a hole)
// It removes the thing but the box stays the same size

console.log(arr.concat("Hello", 8980)); // Make a new box by adding "Hello" and 8980 to the end

let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(1,2)); // Remove things from the box using their numbers (indexes)

console.log(numbers.splice(1, 2, 989, 893729)); // Remove things and put new things in their place

arr = [0, 9, 8, 6, 7, 4];
console.log(arr.sort()); // Put things in order (like words in a dictionary)
// Sorts things like words, not numbers correctly.

let y = [0, 1, 2, 3, 4, 5];
console.log(y.slice(3)); // Make a new box with some things from the old box

console.log(y.reverse()); // Turn the box backwards

console.log(Array.from("obj")); // Make a box from a line of text (each letter becomes a thing)
