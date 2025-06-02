const name = "Sheron";
const age = 23;

// console.log(name + age);// don't use this way to merge 

console.log(`My name is ${name} and my age is ${age}`); // merge this way to string

const gameName = new String("Sheron");

// console.log(gameName[0]);
// console.log(gameName.lastIndexOf(2));
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4);

console.log(newString);

const anotherString = gameName.slice(-6, 4);

console.log(anotherString);

const url = "https://youtube.com/sheron%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('sheron')); // o/p true false
console.log(gameName.split('-'));

