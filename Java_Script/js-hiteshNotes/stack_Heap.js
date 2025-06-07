let naMe="kaishav"
let anotnaMe=naMe //~get copy

// console.log(anotnaMe);


anotnaMe="kailash"

//~ console.log(naMe); //kaishav
// console.log(anotnaMe); //kailash

let userOne={
    color:"red",
    city:"up"
}

let userTwo=userOne //~get location same
userTwo.color="yellow"
console.log(userOne.color);
console.log(userTwo.color);