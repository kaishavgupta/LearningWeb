const myName="Kaishav"
const myAge=21

/**Its Outdated way of concatenating and printing a string
//?console.log(myName + myAge)// using it always give Kaishav21 as output no space between two values
//console.log(myName , myAge)// using it always give Kaishav 21 as output gives space between two values
**/

//? This is a Latest way  of concatenating and printing a string 
//It's called as String Interpolation
// console.log(`My name is ${myName} and my age is ${myAge}`) //we make string placeholders using ${} inside backticks ``
// const gameName = new String('hitesh')

console.log(myName.lastIndexOf('K'));

const gameName = new String("Kaiahav-alpha")
// console.log(gameName[0])
// console.log(gameName.length)

// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('t'));

// console.log(gameName.substring(0,7))

// console.log(gameName.slice(-1,-13)) //we can give negative value

const newString="  kaishav -  gupta   "
console.log(newString);
// console.log(newString.trim().replace('-',"").split(' ').delete(" ").join());

const arrString =newString.trim().split(" ")