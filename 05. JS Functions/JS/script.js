// Function: A reusable block of code that performs a specific task.

// Regular function definition
function nice(name) { // Function name: nice, parameter: name
    console.log("Hey " + name + " you are good!"); // Code to be executed
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " your tshirt is nice!");
}

nice("Harry"); // Calling the function with argument "Harry"
nice("Umair"); // Calling the function with argument "Umair"

function sum(a, b, c = 3) { // Function name: sum, parameters: a, b, c (c has a default value)
    console.log(a, b, c); // Prints the values of a, b, and c
    return a + b + c; // Returns the sum of a, b, and c
}

result1 = sum(4); // Calling sum with only one argument (c uses default value 3)
result2 = sum(43, 5, 1); // Calling sum with all three arguments
result3 = sum(3, 13); // Calling sum with two arguments (c uses default value 3)

console.log("The sum of these numbers is:", result1); // Printing the returned value
console.log("The sum of these numbers is:", result2);
console.log("The sum of these numbers is:", result3);

// Arrow function: A shorter way to define functions

const func1 = (x) => { // Function name: func1, parameter: x
    console.log("I am an arrow function", x); // Code to be executed
}

func1(33); // Calling the arrow function
func1(66);
func1(99);

// Key Concepts:

// - Functions: Reusable blocks of code.
// - Parameters: Input values to a function.
// - Arguments: Actual values passed to a function when it's called.
// - Return value: A value that a function can send back after it's done.
// - Default parameters: Parameters can have default values if not provided.
// - Arrow functions: A concise syntax for defining functions.


// Some Important Functions:

// Number(): Converts a value to a number.
// Use case: Converting string input from prompts or form fields to numbers for calculations.
let ageString = prompt("Enter your age:");
let age = Number(ageString); // Convert the string to a number
if (Number.isNaN(age)) { // Check if the conversion failed (non-numeric input)
    alert("Invalid age input.");
} else {
    console.log("Your age is:", age);
}

// isNaN(): Checks if a value is "Not a Number".  Returns true if the value is NaN, false otherwise.
// Use case: Validating user input to ensure it's a number.
let userInput = prompt("Enter a number:");
if (isNaN(userInput)) {
    alert("Invalid input. Please enter a number.");
} else {
    let num = Number(userInput); // Convert to number after validation
    // ... use the number ...
}


// toLowerCase(): Converts a string to lowercase.
// Use case: Case-insensitive comparisons or normalizing text.
let city = "New York";
let lowercaseCity = city.toLowerCase(); // lowercaseCity will be "new york"
if (lowercaseCity === "new york") { // Case-insensitive check
    console.log("You live in New York (or new york)");
}


// toUpperCase(): Converts a string to uppercase.
// Use case: Displaying text in a consistent format (e.g., headings).
let message = "hello world";
let uppercaseMessage = message.toUpperCase(); // uppercaseMessage will be "HELLO WORLD"
console.log(uppercaseMessage);

// String(): Converts a value to a string.
// Use case: Displaying non-string values (numbers, booleans) in output.
let price = 99.99;
let priceString = String(price); // priceString will be "99.99"
console.log("The price is: $" + priceString);

// parseInt(): Parses a string and returns an integer. (Useful for whole numbers)
let quantityString = "10 apples";
let quantity = parseInt(quantityString); // quantity will be 10 (ignores " apples")
console.log("Quantity:", quantity);


// parseFloat(): Parses a string and returns a floating-point number. (Useful for decimals)
let priceString2 = "19.99 dollars";
let price2 = parseFloat(priceString2); // price2 will be 19.99 (ignores " dollars")
console.log("Price:", price2);

// String to number & vice versa : 

let ageString = prompt("Enter your age:"); // User enters "25"

console.log(typeof ageString); // Output: "string" (even though 25 is a number)

let age = Number(ageString); // Convert the string to a number

console.log(typeof age); // Output: "number"

alert("Your age is: " + age); // age is a number, but when concatenated with a string, it is coerced to a string.

alert(age); // age is a number, but alert() will convert it to a string.


// .trim(): Removes whitespace from both ends of a string.

let stringWithSpaces = "   Hello, world!   "; // String with leading and trailing spaces

let trimmedString = stringWithSpaces.trim(); // Call .trim() on the string

console.log(stringWithSpaces); // Output: "   Hello, world!   " (Original string is unchanged)
console.log(trimmedString); // Output: "Hello, world!" (New string with spaces removed)

let noSpaces = "No spaces here";
let trimmedNoSpaces = noSpaces.trim();

console.log(noSpaces); // Output: "No spaces here" (No change if no spaces)
console.log(trimmedNoSpaces); // Output: "No spaces here"

let withNewlinesAndTabs = "\n\t Hello \n\t"; // String with newline and tab characters
let trimmedWithNewlines = withNewlinesAndTabs.trim();

console.log(withNewlinesAndTabs); // Output: "\n\t Hello \n\t" (Original string is unchanged)
console.log(trimmedWithNewlines); // Output: "Hello" (Newline and tab removed)


// Key points:

// - .trim() *returns* a new string; it doesn't change the original string.
// - Whitespace includes spaces, tabs, and newline characters.
// - Useful for cleaning up user input or ensuring consistent string comparisons.

// Math.random() generates a diff random number every time b/w 0 & 1 

console.log(Math.random()); // Output: Something like 0.345789 (a different random number each time)
console.log(Math.random()); // Output: Something like 0.921345 (another random number)
console.log(Math.random()); // Output: Something like 0.012398 (and so on...)

// Math.floor() rounds a number down to the nearest integer (whole number).
console.log(Math.floor(3.14)); // Output: 3
console.log(Math.floor(3.99)); // Output: 3
console.log(Math.floor(3)); // Output: 3
console.log(Math.floor(-3.14)); // Output: -4 (rounds down even for negative numbers) 

// Template literals & ${varaible_name} (This is used to embed varaibles in a string) 
let name = "Alice";
let age = 30;

let message = `Hello, my name is ${name} and I am ${age} years old.`; // This increases readability instead of 
// let message = "Hello, my name is " + name + " and I am " + age + " years old.";

console.log(message); // Output: Hello, my name is Alice and I am 30 years old.

// Another benefit of template literal is
let quote = `She said, "Hello!"`;
console.log(quote); // Output: She said, "Hello!"

// Important:  These are just a few of the many built-in functions in JavaScript.  
// Explore the documentation for more!
