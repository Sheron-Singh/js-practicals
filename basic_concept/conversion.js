let score = "45asb";

// if convert in number output will

// let score = "33"; // o/p -- 33
// let score = null; //  o/p :- 0
// let score = "sheron"; // o/p -- NAN
// let score = undefined; // o/p -- NAN
// let score = true; // o/p -- 1 

// two way to check type
console.log(typeof score); // o/p => string
console.log(typeof (score)); // O/p => string

let valueInNumber = Number(score) // convert score value in number
console.log(typeof valueInNumber); // number

console.log(valueInNumber); // NAN (not a number)

// Boolean Conversion
let isLoggedIn = 1;

let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn);

// 1 => true; 
// 0 => false;
//  "" => false ; 
// "sheron" => true

// Conversion in String

let sNumber = 44;

let stringNumber = String(sNumber);
console.log(stringNumber);
console.log(typeof stringNumber);