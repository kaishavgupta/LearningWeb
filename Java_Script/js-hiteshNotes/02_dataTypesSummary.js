// Primitive 
// 7 types String , Number , Boolean , null , undefined , Symbol , BigInt

const id=Symbol("123")
const Anotherid=Symbol("123")


// console.table([id,Anotherid,id===Anotherid])

// Non-Primitive
// Array , Object ,Function 

//~Array
let marks=[7,10,15,8,2,20]

//~Object
let student={
    sName:"Kaishav Gupta",
    sAge:21
}

console.log(typeof student);//object oR function object 

//~Function
let myFunction =function(){
    console.log("Hello World")
}
console.log(myFunction.toString())
console.log(typeof myFunction) //function oR  object function