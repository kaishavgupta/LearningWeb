// Learning Data Types in JavaScript
// JavaScript has 7 primitive data types:


//! 1. String

let name = "Kaishav Gupta";
console.log(name); // Output: Kaishav Gupta
console.log(typeof name); // Output: string

/*********************************************************************************************************************/



//! 2. Number
/*
*Number is a primitive data type in JavaScript that represents both integer and floating-point numbers.
*It is used to perform mathematical operations and can represent both positive and negative values.
*/
//? Example of Number
let age = 20;
console.log(age); // Output: 20
console.log(typeof age); // Output: number

/*********************************************************************************************************************/




//! 3. Boolean
/*
*Boolean is a primitive data type in JavaScript that can have one of two values: true or false.
*It is often used to represent the truth value of an expression or condition.
*Boolean is a fundamental data type in JavaScript and is used in control flow statements like if, while, and for.
*/
//? Example of Boolean
let isStudent = true;
console.log(isStudent); // Output: true
console.log(typeof isStudent); // Output: boolean

/*********************************************************************************************************************/




//! 4. Undefined
/*
*Undefined is a special value in JavaScript that indicates a variable has been declared but has not been assigned a value.
*It is a primitive data type in JavaScript and is used to represent the absence of a value.
*/
 //? Example of Undefined
let address;
console.log(address); // Output: undefined
console.log(typeof address); // Output: undefined

/*********************************************************************************************************************/




//! 5. Null
/*
*Null is a special value in JavaScript that represents the intentional absence of any object value.
*It is a primitive data type in JavaScript and is used to represent the absence of a value.
*Null is often used to indicate that a variable should not point to any object or value.
*/
//? Example of Null
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object



/*********************************************************************************************************************/




//! 6. Symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol

/*********************************************************************************************************************/



//! 7. BigInt
let bigNumber = BigInt(123456789012345678901234567890);
console.log(bigNumber); // Output: 123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint

/*********************************************************************************************************************/




// JavaScript also has a non-primitive data type:
//! 1. Object
let person = {
    name: "Kaishav",
    age: 20,
    isStudent: true
};
console.log(person); // Output: { name: 'Kaishav', age: 20, isStudent: true }
console.log(typeof person); // Output: object

//! 2. Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(typeof fruits); // Output: object
/*********************************************************************************************************************/

//! 3. Function

/*
*Function is a built-in object in JavaScript that allows you to define reusable blocks of code.
*Function is used to encapsulate code that can be executed when called.
*Function is not a subclass of Object, so it does not inherit from Object.prototype.
*Function is not an array, so it does not have array methods like push(), pop(), or slice().
*Function is a powerful tool for creating reusable code and can be used for complex tasks.
*Function is a first-class object in JavaScript, meaning it can be assigned to variables, passed as arguments, and returned from other functions.
*Function is not a subclass of Object, so it does not inherit from Object.prototype.
*/

//? Example of Function
function greet() {
    console.log("Hello, World!");
}
console.log(greet); // Output: [Function: greet]
console.log(typeof greet); // Output: function


//! 4. Date
/* 
*Date is a built-in object in JavaScript that represents a specific point in time.
*Date is used to work with dates and times, including formatting, parsing, and manipulating dates.
*Date is not a subclass of Object, so it does not inherit from Object.prototype.
*Date is not an array, so it does not have array methods like push(), pop(), or slice().
*Date is a powerful tool for working with dates and times and can be used for complex date manipulation tasks.
*Date is not a subclass of Object, so it does not inherit from Object.prototype.
*/

//? Example of Date
let currentDate = new Date();
console.log(currentDate); // Output: current date and time
console.log(typeof currentDate); // Output: object

//! 5. RegExp
/*
    *RegExp is a built-in object in JavaScript that allows you to work with regular expressions.
    *Regular expressions are patterns used to match character combinations in strings.
    *RegExp is used for searching, replacing, and validating strings based on specific patterns.
    *RegExp is not a subclass of Object, so it does not inherit from Object.prototype.
    *RegExp is a built-in object in JavaScript that allows you to work with regular expressions.
    *RegExp is not an array, so it does not have array methods like push(), pop(), or slice().
    *RegExp is a powerful tool for working with strings and can be used for complex string manipulation tasks.
*/

//? Example of RegExp
let regex = /[a-z]/;
console.log(regex); // Output: /[a-z]/
console.log(typeof regex); // Output: object

//! 6. Map
/*
    *Map is a collection of key-value pairs where keys can be any type and values can be any type.
    *Map is similar to an object, but the keys can be any type, not just strings or symbols.
    *Map is iterable, meaning you can loop through its key-value pairs using a for...of loop or the forEach() method.
    *Map has a size property that returns the number of key-value pairs in the Map.
    *Map has methods like set(), get(), delete(), and has() to add, retrieve, remove, and check for key-value pairs.
    *Map is useful for storing key-value pairs where the keys are not limited to strings or symbols.
*/

//? Example of Map
let map = new Map();
map.set("name", "Kaishav");
map.set("age", 20);
console.log(map); // Output: Map(2) { 'name' => 'Kaishav', 'age' => 20 }
console.log(typeof map); // Output: object

//! 7. Set

/*
    *Set is a collection of unique values. It can store any type of value, including objects and functions.
    *Set is similar to an array, but it does not allow duplicate values.
    *Set is iterable, meaning you can loop through its values using a for...of loop or the forEach() method.
    *Set has a size property that returns the number of values in the Set.
    *Set has methods like add(), delete(), and has() to add, remove, and check for values.
    *Set is useful for storing unique values, such as a list of unique items or a collection of unique objects.
    *Set is not an array, so it does not have array methods like push(), pop(), or slice().
    *Set is not a subclass of Array, so it does not inherit from Array.prototype.
    *Set is a built-in object in JavaScript that allows you to store unique values of any type.
    *Set is iterable, meaning you can loop through its values using a for...of loop or the forEach() method.
    *The values in a Set are not indexed, meaning that you cannot access them by index like you can with   arrays.
    *You can add, delete, and check for the existence of values in a Set.
*/
//? Example of Set
let set = new Set();
set.add("apple");
set.add("banana");
set.add("cherry");
console.log(set); // Output: Set(3) { 'apple', 'banana', 'cherry' }
console.log(typeof set); // Output: object

//! 8. WeakMap (weak reference to objects)
/* 
 *WeakMap is a collection of key-value pairs where keys are objects and values can be any type.
 *WeakMap is similar to Map, but the keys must be objects and the values can be any type.
 *WeakMap is used to store private data for objects, as the keys are not exposed to the outside world.
 *The keys in a WeakMap are weakly referenced, meaning that if there are no other references to the key *object, it can be garbage collected.
 *WeakMap is not iterable and does not have a size property.
 WeakMap is useful for storing private data for objects, as the keys are not exposed to the outside world.
*/

//? Example of WeakMap
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "Kaishav");
weakMap.set(obj2, 20);
console.log(weakMap); // Output: WeakMap(2) { {} => 'Kaishav', {} => 20 }