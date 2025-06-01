// var myFavNum="100"
// console.log(typeof myFavNum)
// console.log(typeof +myFavNum)
// console.log(typeof Number(myFavNum))

// let str=5
// console.log(typeof str)
// console.log(typeof (str+""))
// console.log(typeof String(str))

// console.log("6"==="6")

//! Q: Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓
//todo
// var maths=60
// var science=0
// var sst=20
// var cs=80

// var tot=(maths+science+sst+cs)/4
// console.log(tot>60?"PASS":"FAIL")

// console.log(true+true)
// console.log(2-"5"+3)//here 2-"5" first converts "5"-->5 then -5 then 2-5=-3-->-3+3=0

// var a=prompt("Enter your age")
// if(a<18)
// {
//     alert("You are ineligible");
// }

// else{
//     alert("You are eligible");
// }


// function na(n)
// {
//     var c=1;
//     for(i=2;i<n;i++)
//     {
//         if(n%2==0)
//         {
//            c=0;
//            break; 
//         }
//     }
//     return c==1?" YES it is a":" it is Not a";
// }

// var c=1;
// do{
// var n=parseInt(prompt("Enter a number"));
// var b=na(n);
// alert(n+b+" prime number");
// c=parseInt(prompt("0 to continue"));
// }while(c==0)

// var x=(function(a,b)
// {
//     console.log(a+b);
//     return a+b;
// })(jsp,jsas)

// for(i=1;i<=10;i++)
// {
//     console.log(`${5} * ${i} = ${5*i}`)
// }


// function year(yea=2024)
// {
//   return (yea%4==0)?("True"):("false");
// }

// console.log(`${(year(2028)=="True")?"Its a Leap year":"Its not a leap year"}`);

// const sum =(a,b)=>
//     {for(let i=0;i<b;i++)
//         {
//             a+=b
//         }
//         return a
//     }
// console.log(sum(5,5))

// let arr=[11,12,13,14,15,16,17,18,19,10]
// console.log(arr[8]);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

/* use of for of loop */
// for(let num of arr)
// {
//     console.log(`${num} is ${x(num)}`);
// }

// for(let x in arr)
// {
//     console.log(x);   
// }

// console.log(arr)
// arr.splice(1,0,10220)
// console.log(arr);






// arr.map((currentElement,indeasx,arr)=>
// {
//     console.log(`${indeasx}`);
// })

// console.log('\\ \' ');

let text = "Vinod Thapa e"
// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

let starr=Array.from(text)
let ind=starr.map((customElements,inx)=>
     `${customElements} - ${inx} `);
console.log(ind);
