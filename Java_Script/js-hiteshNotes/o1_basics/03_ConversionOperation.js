/*

let age=21
console.log(typeof age); // Output: number
console.log(typeof(age)); // another way to check the type

*/
/*
let age="21"
console.log(typeof age); // Output: string
/ console.log(typeof(age)); //another way to check the type

*/

/*

? Type Conversion
? 1. String to Number
stringToNumber=Number(age)
console.log(stringToNumber); // Output: 21
console.log(typeof stringToNumber); // Output: number
*/

// Must Remember

// let getAge="21abc"
// let getAgeconvert=Number(getAge)
// console.log(getAgeconvert); // Output: NaN
// console.log(typeof getAgeconvert); // Output: number


// let temp=null
// let tempConvert=Number(temp)
// console.log(tempConvert); // Output: 0
// console.log(typeof tempConvert); // Output: number


// let value=undefined
// let valueConvert=Number(value)
// console.log(valueConvert); // Output: NaN
// console.log(typeof valueConvert); // Output: number

// let isStudent=true
// let isStudentConvert=Number(isStudent)
// console.log(isStudentConvert); // Output: 1
// console.log(typeof isStudentConvert); // Output: number


// Note:
/*
* 1. If the string contains only numeric characters, it will be converted to a number.
? 2. If the string contains non-numeric characters, it will be converted to NaN (Not a Number).
* 3. If the string is empty, when it will be converted to a number then it will store 0.
? 4. If the value is null, when it will be converted to a number then it will store 0.
* 5. If the value is undefined, when it will be converted to a number then it will store.
? 6. If the value is NaN, when it will be converted to a number then it will store NaN.
* 7. If the value is a boolean, when it will be converted to a number then it will store 1 for true and 0 for false.
*/




//Operations
//console.log(1 + 2); //Operations:Addition  Output: 3
//console.log(1 - 2); //Operations:Subtraction  Output: -1
//console.log(1 * 2); //Operations:Multiplications  Output: 2
//console.log(1 / 2); //Operations:Divide  Output: 0.5
//console.log(5 % 2); //Operations:Mode gives remainder  Output: 2
//console.log(5 ** 2); //Operations:getting Square or doing exponents  Output: 25
//console.log(5 ** 0.5); //Operations:getting square root  Output: 2.23606797749979 √5

//? Addition of two strings or Concatenation
// let str1="Kaishav"
// let str2=" Gupta"
// let str3=str1+str2
// console.log(str3); // Output: Kaishav Gupta

//? Addition of string and number

// Note:
/*
* 1. If you add a string and a number, the number will be converted to a string and concatenated with the string.
* 2. If you add two numbers, and  a string, the string will be converted to a number and added to the number.
* 3. If you add a string and two number, the numbers will be converted to a string and concatenated with the string.
? Always remember that these operations are playble tll test logical reasoning. But in real world application you should not do this.
*/

// console.log(("1" + 2)); // Output: 12
// console.log(1 + "2"); // Output: 12

// console.log(1 + 2 + "3"); //! Important Output: 33
// console.log("1" + 2 + 3); //! Important Output: 123


// Boolean conversion using +
// ? But not recommended.

// console.log(+ true); // Output:1
// console.log(- false); // Output:-0
//console.log(true+true-false+true+2*false) // Output: NaN


//Prefix and Postfix
let a=1
//Postfix
console.log(a++); // Output: 1
console.log(a); // Output: 2

//Prefix
console.log(++a); // Output: 3
console.log(a); // Output: 3