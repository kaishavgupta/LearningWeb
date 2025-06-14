//~ const tinderUser =new Object()
const tinderUser ={} //

//~ console.log(tinderUser);

//~ adding keys/values to an object
tinderUser.id = "2024user1"
tinderUser.name="jay"
tinderUser.isLoggedIn =false

// console.log(tinderUser);


//~Nested Object's 
const shadiCom={
    email:"user@shadi.Com",
    human:{
        character:{
            physical:{
                gender:"male",
                eye:"bluish-green",
                skin:"brownish"
            }
        }
    }
}
//~ console.log(shadiCom.human.character.physical);



//~ concatinating multiple objects into single
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//// const obj3={obj1,obj2} //it merges two objects

/*
~(1)*/ obj3=Object.assign(obj1,obj2,obj4)

/*
~(2)*/obj3={...obj1,...obj2,...obj4}
// console.log(obj3);


const userx=[
    {
        id:"ab@XMLDocument.com",
        fault:"unclick Adds"
    },
    {
        id:"abc@XMLLLDocument.com",
        fault:"violent Posts"
    },
    {
        id:"abcd@XXMMLDocument.com",
        fault:"vulnerable talks"
    }
]

//~ console.log(userx[1]);

//~ console.log(Object.keys(shadicom));  //?Array of keys
//~ console.log(Object.values(shadicom));  //?Array of values in keys
//~ console.log(Object.entries(shadicom)); //?Array of keys:values

//~ console.log(shadiCom.hasOwnProperty('isLoggedIn'));//it checks that the key 
