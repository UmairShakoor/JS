let a = [1, 98, 5, 6, 88]; // Make a box (array) with numbers inside

// Loop 1: Go through each thing in the box one by one
for (var index = 0; index < a.length; index++) {
    const element = a[index]; // Get the thing at this number (index)
    console.log(element); // Show the thing
}

// Loop 2: Another way to go through each thing in the box
a.forEach((value, index, arr) => {
    console.log(value, index, arr); // Show the thing, its number, and the whole box
});

// Loop 3: A simpler way to go through each thing in the box
for (let items of a) {
    console.log(items); // Show the thing
}
