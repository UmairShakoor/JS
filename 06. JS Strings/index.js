console.log("This is Strings Tutorial");

let a = "Umair"; // Strings are text enclosed in double or single quotes
console.log(a); // Output: Umair

console.log(a[0]); // Accessing characters by index (starts at 0)
console.log(a[1]); // Output: m
console.log(a[2]); // Output: a
console.log(a[3]); // Output: i
console.log(a[4]); // Output: r
// console.log(a[5]); // Undefined (index out of bounds)

console.log(a.indexOf("ai")); // Finding the index of a substring
console.log(a.indexOf("zz")); // Returns -1 if substring is not found

console.log(a.charAt(0)); // Getting the character at a specific index
console.log(a.charAt(110)); // Returns an empty string if index is out of bounds

console.log(a.startsWith("U"));
console.log(a.endsWith("r")); 
console.log(a.includes("i")); 

console.log(a.length); // Getting the length of the string

// Template Literals: Easier way to create strings with variables
let name = "Muhammad";
let friend = "Abu Bakar";
console.log("His name is " + name + " and his friend's name is " + friend); // Old way (concatenation)
console.log(`His name is ${name} and his friend's name is ${friend}`); // New way (template literals)
console.log(`He "is" ${name}`); // Quotes inside template literals are easy

// Escape Sequences: Special characters in strings
// console.log("His name is S"Harry"); // Error! Quotes inside quotes cause problems
console.log("His name is \"Harry"); // Escaping the inner quote
console.log("His name is \nHarry"); // Newline character
console.log("His name is \rHarry"); // Carriage return (moves cursor to beginning of line)
console.log("His name is \r\nHarry"); // Newline + Carriage Return (better cross-platform new line)
console.log("His name is \tHarry"); // Tab character

// String Functions: Useful tools for working with strings
a = "Alpha";
console.log(a.toUpperCase()); // Converting to uppercase
console.log(a.toLowerCase()); // Converting to lowercase
console.log(a.length); // Getting the length (a property, not a function)
console.log(a.slice(1, 4)); // Extracting a substring (from index 1 up to, but not including, 4)
console.log(a.slice(1)); // Extracting a substring (from index 1 to the end)

let y = "Gamma Gaa";
console.log(y.replace("Ga", 77)); // Replacing a substring
console.log(y.concat(a, " I don't know")); // Combining strings
// You can also use + operator to add data into strings instead of using concat()

console.log(a, y); // Strings are immutable (original strings don't change)

// String to Number Conversion:
let ageString = prompt("Enter your age:"); // Prompt returns a string
console.log(typeof ageString); // Output: string

let age = Number(ageString); // Converting the string to a number
console.log(typeof age); // Output: number

alert("Your age is: " + age); // String concatenation (age is converted to string)
alert(age); // Alert also converts numbers to strings

// .trim(): Removing whitespace from the beginning and end of a string
let stringWithSpaces = " Hello, world! ";
let trimmedString = stringWithSpaces.trim();
console.log(stringWithSpaces); // Original string (unchanged)
console.log(trimmedString); // Trimmed string

// Math.random() and Math.floor(): For random numbers
console.log(Math.random()); // Generates a random decimal between 0 and 1
console.log(Math.floor(3.14)); // Rounds down to the nearest integer
console.log(Math.floor(3.99)); // Output: 3
console.log(Math.floor(-3.14)); // Output: -4 (rounds down even for negative numbers)

// Math.ceil() is opposite to Math.floor() . Means it increase the number to closest 
