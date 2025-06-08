let myDate = new Date("mm-dd-yyyy")

//~ `toISOString()` ensures UTC format, while `console.log(myDate)` may vary by environment.
// console.log(myDate);
// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());


// console.log(typeof myDate);


// let myCreatedDate = new Date(2027 ,0 , 23 , 5,3,85)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("10-11-2025")
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.);

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);

console.log
(newDate.toLocaleString('default',{
    weekday:"long",
    
}))
