// 🧠 Beginner Level
// Create an array of numbers from 1 to 10.

// Add 0 at the start

// Remove the last element

// Check if the array includes the number 5

// Slice the array from index 2 to 5 and print both the slice and the original array. Then splice from index 2 to 4 and print again.

// Use .join() on an array of colors ["Red", "Green", "Blue"] and convert it into a single comma-separated string.

const arr=[1,2,3,4,5,6,7,8,9,10]
arr.unshift(0);
console.log(`Add ${0} at start of array ${arr}`);
const pop =arr.pop()
console.log(`Pop ${pop} last element from array ${arr}`);


console.log(`To check that Array include 5 ${arr.includes(5)}`);
console.log(`Array ${arr} after slice ${arr.slice(2,5)} original Array is ${arr}`);
console.log(`Array ${arr} after splice ${arr.splice(2,5)} original Array is ${arr}`);

const arrStrings =["Red", "Green", "Blue"] 
console.log(arrStrings.join());

