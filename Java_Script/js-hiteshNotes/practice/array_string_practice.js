/*
  🧠 Beginner Level
  Create an array of numbers from 1 to 10.
  Add 0 at the start
  Remove the last element
  Check if the array includes the number 5
  Slice the array from index 2 to 5 and print both the slice and the original array. Then splice from index 2 to 4 and print again.
  Use .join() on an array of colors ["Red", "Green", "Blue"] and convert it into a single comma-separated string.*/

//? const arr=[1,2,3,4,5,6,7,8,9,10]
//? arr.unshift(0);
//? console.log(`Add ${0} at start of array ${arr}`);
//? const pop =arr.pop()
//? console.log(`Pop ${pop} last element from array ${arr}`);


//? console.log(`To check that Array include 5 ${arr.includes(5)}`);
//? console.log(`Array ${arr} after slice ${arr.slice(2,5)} original Array is ${arr}`);
//? console.log(`Array ${arr} after splice ${arr.splice(2,5)} original Array is ${arr}`);

//? const arrStrings =["Red", "Green", "Blue"] 
//? console.log(arrStrings.join());

/*
🔄 Intermediate Level
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
Merge both arrays using concat()
Merge them using spread ...
Push arr2 inside arr1 as a single element (like you did earlier)
Flatten the following array completely:
const messyArray = [1, 2, [3, 4], [5, [6, [7]]]];
Use Array.from() to:
Convert "JavaScript" into an array of characters
Convert {name: "Kaishav"} into an array — observe and explain what happens
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(`concatinating arr1 ${arr1} and arr2 ${arr2} using concat is ${arr1.concat(arr2)} `);
console.log(`concatinating arr1 ${arr1} and arr2 ${arr2} using spread operator is ${ [...arr1 , ...arr2]} `);
// console.log(`Push arr2 to ${arr2.push(arr1)}`);

const messyArray = [1, 2, [3, 4], [5, [6, [7]]]];
console.log(`Flatten the Mess Array ${messyArray.flat(Infinity)}`);
console.log(Array.from("JavaScript"));
console.log(Array.from({name:"Kaishav"}));
console.log(Array.of(arr1,arr2));

/* 
💬 String Challenges
Use string interpolation to print:
My name is Kaishav and I am 21 years old.
Use .charAt() and .indexOf() to find:
The first character of "developer"
The index of the letter "e"

const dirtyString = "   kaishav -  gupta   ";
Trim it
Remove the dash

Split it into words
Rejoin it as "kaishav gupta"
*/

console.log(`My name is ${"Kaishav"} and I am ${21} years old`);
const chara = "developer"
console.log(`Index 0f first character is ${chara.charAt()}`);
console.log(`Index 0f ${'e'} character is ${chara.indexOf('e')}`);

const dirtyString = "   kaishav -  gupta   ";

const cleanString = dirtyString.trim().replace("-","").split()
console.log(cleanString);

