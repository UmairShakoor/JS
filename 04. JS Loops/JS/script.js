// 1. The for loop: Repeat code a specific number of times

for (let i = 0; i < 5; i++) { // Initialize; Condition; Increment
    console.log("Iteration: " + i); // Code inside runs 5 times (i: 0, 1, 2, 3, 4)
    let doubled = i * 2; // Example expression using i
    console.log("Doubled: " + doubled);
}

// 2. The while loop: Repeat while a condition is true

let count = 0;
while (count < 3) { // Condition checked before each run
    console.log("Count: " + count);
    let squared = count * count; // Example expression
    console.log("Squared: " + squared);
    count++; // Update condition to avoid infinite loop!
}

// 3. The do...while loop: Repeat at least once, then while a condition is true

let x = 0;
do {
    console.log("x is: " + x);
    x++;
} while (x < 5); // Condition checked *after* the first run

// 4. The for...of loop: Iterate over iterable objects (strings) - without arrays

const message = "Hello!";
for (let char of message) { // char holds each character in the string
    console.log(char);
}

// 5. The for...in loop: Iterate over object properties (keys)

const person = { Name: "Alice", Age: 30, City: "New York" };

for (let key in person) { // key holds each property name ("name", "age", "city")
    if (person.hasOwnProperty(key)) { // Check if property belongs to the object
        // console.log("Key: " + key);
        // console.log("Value: " + person[key]);
        console.log(key , person[key]);
    }
}

// Key Concepts for Beginners (Without Arrays):

// - Loops repeat code. Choose the right loop for the job.
// - for: Use when you know how many times to repeat.
// - while: Use when repetition depends on a condition.
// - for...in: Use to go through object properties (keys). Use hasOwnProperty().

// Important Reminders:

// - Infinite Loops: Be careful with while loops! If the condition is always true, the loop will never end.
// - Updating Conditions: In while loops, make sure you change the variable used in the condition inside the loop.
// - hasOwnProperty():  Always a good idea to use with for...in loops.
