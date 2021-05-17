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