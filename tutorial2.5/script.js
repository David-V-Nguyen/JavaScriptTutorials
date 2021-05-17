/** 
 * Type conversion and coercion
 * 
 */

const inputYear = '1991';

// inputYear = string of numbers, convert to number type using Number function
console.log(Number(inputYear), inputYear);

// inputYear + 18 = 199118, inputYear is string and 18 is number (it concatenates)
console.log(inputYear + 18);

// convert a string into a number = Cannot be a number value
console.log(Number('Jonas'));

// NaN prints as a number, it is defined as an invalid number
console.log(typeof NaN);

// use String function to convert number into string type
console.log(String(23), 23);

/**
 * Type coercion
 * JS does this automatically
 * 2 values have different types
 * 
 */

// '+' operators converts types to similar types in order to execute
console.log("I am " + 23 + " years old");

// '-' operator converts strings to numbers
console.log('23' - '10' - 3);

// '*' operator converts strings to numbers
console.log('23' * '2');

// '/' operator converts strings to numbers
console.log('23' / '2');

// convert strings to numbers automatically
console.log('23' > '18');

// guess the value of n below
let n = '1' + 1;
n = n - 1
console.log(n);

// add all numbers (2, 3, 4) then converts value to string when adding 5
console.log(2 + 3 + 4 + '5');

// take-away numbers (10, 14, 3) then converts value to number when minus 2, concatenate 5 
console.log('10' - '4' - '3' - 2 + '5');

// type coercion can cause bugs if not known correctly

/** 
 * Booleans and truthy tables
 * 
 */

// 5 falsy values; 0, "", undefined, null, NaN = converted to false

// Use Boolean function to turn value to boolean (true / false)
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("jones")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!"); // executes (condition is false)
}

let height; // height is no value defined
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED"); // executes (condition is false)
 }

/** 
 * Equality operators
 * '==' vs '==='
 */

const age = 18;
// using '===' operator, compares the age if it is EXACTLY number 18
// if condition is single lined, can remove { } blocks and print result
if (age === age) console.log("You just became an adult!");

// using '==' operator, converts and coercion value to the compared value
// loosely equality operator
console.log('18' == 18); // true, converted to number type

// Calls website to find values using prompt function
const favourite = prompt("What's your favourite number?");

console.log(favourite);
console.log(typeof(favourite)); // type string

if (favourite === 23) { 
    console.log("cool 23 is an amazing number");
} else if (favourite == 7) {
    console.log("7 is also a cool number");
} else if (favourite == 9) { 
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

// '!==' operator compares and IS NOT the value
// if favourite value IS NOT 23, executes console.log
if (favourite !== 23) console.log("Why not 23?");

