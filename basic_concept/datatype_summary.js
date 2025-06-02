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

console.log(typeof bigNumber);
// console.log(bigNumber);
console.log(outSideTemp);
console.log(typeof outSideTemp);


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