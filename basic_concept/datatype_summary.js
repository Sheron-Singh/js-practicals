// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue =100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id =Symbol("123");
const anotherId = Symbol("123");
console.log(id=== anotherId);


// const bigNumber =13654888748588445n; // use "n" in end of number to convert number in BigInt



// Reference (non premitive)

// Array, function, Objects

const arrays = ["Mango", "Orange", "Grapes", "Lichi"];

const myObj ={

    name: "Sheron",
    age: 25
}

const myFunction = function(){
    console.log("hello");
};

// console.log(typeof bigNumber);
// // console.log(bigNumber);
// console.log(outSideTemp);
// console.log(typeof outSideTemp);


/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/


// *************************** Memory ****************************************

// stack(Primitive), Heap(Non-Primitive)


// stack Memory or Primitive ke andar copy milta hai 

// Heap (non-Primitive) ke andar reference me value change hoga (main value change)

/**
 Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
 */


let myName = "SheronSingh";
 let anotherName = myName;

 anotherName ="Sheron Sheron"

 console.log(myName);
 console.log(anotherName);
 
 let userOne ={
    email : "sheron@gmail.com",
    name : "Singh Singh"
 }

 let userTwo = userOne;

 userTwo.email = "singh@gmail.com"

 console.log(userOne.email);
 
 console.log(userTwo.email);
 
