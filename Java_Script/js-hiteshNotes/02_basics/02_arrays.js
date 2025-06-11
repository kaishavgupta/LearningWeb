//array PArt2
const arr = [1,2,3,4,5]
const anoarr=[6,7,8]


//@ important it [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ] not merges as you may think of [ 1, 2, 3, 4, 5,  6, 7, 8  ]
//~ arr.push(anoarr)  

// console.log(arr);
// console.log(arr[5][2]);


//@ To merge an array we use (i)concat() or (ii)spread operator ...
//~ console.log(arr.concat(anoarr));
// console.log(...arr,...anoarr);

// // if we have array like
const spreadArr =[100,101,102,103,104,105,106]
// console.log([...arr,...anoarr,...spreadArr]);


//@ If an array like this we can use flat()
// const myNewArr = [1,2,[3,4,5],6,7,[8 , [[9, [10]]]]]
//~ const simpArr = myNewArr.flat(Infinity)
// console.log(simpArr);


//@ During data scrapping when we bring data we dont know that data is in array formate that purpose we firstly get to know that it isArray then if get false then convert to an array
//~ console.log(Array.isArray("Kaishav")) //check wether its an array 
// // console.log(Array.isArray(spreadArr))
//~ console.log(Array.from("kaishav")); //converting into an array
//// console.log(Array.from({name: "kaishav"})); //interesting


let score1=100
let score2=200
let score3=300

//~ console.log(Array.of(score1,score2,score3));//array of score
//// console.log(Array.of(arr,anoarr,spreadArr)); //it gives [[arr elements],[anoarr elements],[spreadArr elements]]
