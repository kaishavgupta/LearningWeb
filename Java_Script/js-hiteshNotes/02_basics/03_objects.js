/*
Objects can be declaed in 2 way Literals and Constructors
*/

// singleton //whenever we create through constructor then we create a singleton object , means its an object 

//object literals

Object.create  //creation of another way of object , it is through constructor method and its only said as singleton constructor

const mySym=Symbol("key1")

const JsUser = {
    name: "Kaishav",
    age:22,
    [mySym]:1, //This is now identified as key , if mySym:1 , its not identifies as key 
    "fullname":"Kaishav Gupta",
    location:"Lucknow",
    email:"kaishavgupta4.2001@gmail.com",
    isLoggeIn:false,
    lastLoginDays:["Monday","Saturday"],
    1:"one"
}



//~ To access it we have 2 ways
// /*(1)*/console.log(JsUser.name); //? Through . operator 

// /*(2a)*/console.log(JsUser[name]);//?Through keys, if keys are string then its unaccessible like it only when JsUser["name"]; jsUser[1] accessible

/*(2b)*///console.log(JsUser["name"]);//? accesing key name as like an array element

// // /*Important*/ console.log(JsUser."fullnaem")  //!can't be accessed


//@ console.log(JsUser[mySym]); //?its how its key
//@ console.log(typeof JsUser[mySym]);



//~ JsUser.email="kaishavgupta@kvg.com"
//~ console.log(JsUser);


//~ Object.freeze(JsUser) /
// JsUser.name="Shikhar"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2=function(){
    console.log(`Hello Js User , ${this.name}`);
    
}

console.log(JsUser.greeting);//? we get function return back , here function don't return it only gives refernce here
// console.log(JsUser.greeting());

console.log(JsUser.greeting2());
