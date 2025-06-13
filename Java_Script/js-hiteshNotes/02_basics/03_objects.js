/*
Objects can be declaed in 2 way Literals and Constructors
*/

// singleton //whenever we create through constructor then we create a singleton object , means its an object 

//object literals

Object.create  //creation of another way of object , it is through constructor method and its only said as singleton constructor

const JsUser = {
    name: "Kaishav",
    age:22,
    "fullname":"Kaishav Gupta",
    location:"Lucknow",
    email:"kaishavgupta4.2001@gmail.com",
    isLoggeIn:false,
    lastLoginDays:["Monday","Saturday"],
    1:"one"
}

//~ To access it we have 2 ways
/*(1)*/console.log(JsUser.name); //? Through . operator 

/*(2a)*/console.log(JsUser[name]);//? keys here it is string if key is number then its accessible Like jsUser[1]

/*(2b)*/console.log(JsUser["name"]);//? accesing key name as like an array element
// // /*Important*/ console.log(JsUser."fullnaem")
/*
 @Important*/ console.log(JsUser["fullname"]) 

 /*
@Important */ console.log(JsUser."fullname") // We can't access it like , therefore its been said to access like JsUser["fullname"]
