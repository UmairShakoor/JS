let arr = [1, 13, 234, 10, 9]; // Make a box (array) with numbers

// Old way to make a new box with the squares of the numbers:
// let newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2); // Put the square of each number into the new box
// }

// New way (using map): Make a new box with the squares of the numbers
let newArr = arr.map(e => {
    return e ** 2; // For each number, return its square
});
console.log(newArr); // Show the new box

// Make a function to check if a number is bigger than 7
const greaterThanSeven = e => {
    if (e > 7) {
        return true; // Yes, it's bigger
    } else {
        return false; // No, it's not bigger
    }
}
console.log(arr.filter(greaterThanSeven)); // Make a new box with only the numbers bigger than 7

let arr2 = [1, 2, 3, 4, 5]; // Another box with numbers

// Make a function to multiply two numbers
const red = (a, b) => {
    return a * b; // Multiply them
}
console.log(arr2.reduce(red)); // Multiply all the numbers in the box together and show the result
