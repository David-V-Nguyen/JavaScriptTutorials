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
/*
const age = 18;
// using '===' operator, compares the age if it is EXACTLY number 18
// if condition is single lined, can remove { } blocks and print result
if (age === age) console.log("You just became an adult!");

// using '==' operator, converts and coercion value to the compared value
// loosely equality operator
console.log('18' == 18); // true, converted to number type

// Calls website to find values using prompt function
//const favourite = prompt("What's your favourite number?");
const favourite = 2; // stops prompt
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

/** 
 * Basic Boolean logic
 * 'AND' , 'OR', 'NOT' operators
 */

// Boolean variables can be either true or false

// A: Sarah has a driver license
// B: Sarah has good vision

// A AND B = Sarah has a driver license AND good vision
// True when all conditions are true
// False when conditions are half true
// False when all conditions false

// A OR B = Sarah has a driver license OR good vision
// True when ONE condition is true
// False when all conditions are false

// NOT A, NOT B
// Inverts true/false value

/**
 * Logical operators
 * '&&' = AND , '!' = NOT , '||' = OR
 */
/*
const hasDriversLicense = true; // A 
const hasGoodVision = true;     // B

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

/*
There are 2 gymnastic teams Dolphins and Koalas,
They compete against each other 3 times and The winner
with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
print it to the console. Don't forget that there can be a draw, so test for that as well

3. Bonus 1: Include a requirement for the minimum score of 100, with this rule, 
a team only wins if it has a higher score than the other team, the same time a score
of at least 100 points
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

Test Data: 
Dolphins score 96, 108, 89
Koalas score 88, 91, 110
 */
/*
const dolphinAvScore = (96 + 108 + 89 / 3);
const koalaAvScore = (88 + 91 + 110 / 3); 
const minimumScore = 100;

console.log(dolphinAvScore);
console.log(koalaAvScore);

if (dolphinAvScore > koalaAvScore && dolphinAvScore >= minimumScore && koalaAvScore >= minimumScore) {
    console.log("Dolphins team has won!");
} else if (dolphinAvScore === koalaAvScore) {
    console.log("It is a draw between Dolphins and Koalas!");
} else {
    console.log("Koalas team has won!");
}

/**
 * Switch statement 
 * Removes repeated code, minimizes code written
 */

/*
const day = 'thursday';

switch(day) {
    case 'monday': // day === 'monday' if true, executes console.log 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // without break, code will keep executing
    case 'tuesday': 
        console.log('Prepare  theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default: // when input doesn't satisfy conditions
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare  theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day == 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}

/**
 * Statements and Expressions
 * 
 */

// {3 + 4} = is an expression, produces a value

// {true && false && !false} = is an expression
/*
if (23 > 10) { // an expression since it is produces a result
    const str = '23 is bigger'; // Statement due to semicolon used 
}
*/
const me = 'Jonas';
// use amp sign to enable strings and expressions
console.log(`i'm ${2037 - 1991} years old ${me}`);

/**
 * Conditional (Ternary) operator, produces a value
 * '?' = short-hand if statement
 */

const age = 15;
age >= 18 ? console.log("I like to drink wine"):
console.log("I like to drink water");

// removed console.logs, stored value into variable and consoled the variable
// easier to write and understand compared to if statement below
const drink = age >= 18 ? "wine" : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}

console.log(drink2);

// Expression can be used to print value
// use amp sign to enable ternary operators in expressions
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/**
 * Coding challenge 4
 * 
 */
/*
Steven wants to build a very simple tip calculator for whenever he goes
eating in a restaurant. In his country, it's usual to tip 15% if the bill value
is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value.
Create the variable called 'tip' for this. It's not allowed to use an if/else statement
(if it's easier for you, you can start with an if/else statement and then try to convert
it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25`

Test Data: Test for bill values 275, 40 and 430
*/

const tip = 0;

const firstBill = 275;
const secondBill = 40;
const thirdBill = 430;

firstBill <= 300 && firstBill >= 50 || firstBill > 300 ? console.log(`The bill was ${firstBill}, the tip was ${firstBill * 0.15} and the total value ${firstBill + firstBill * 0.15}`):
console.log(`The bill was ${firstBill}, the tip was ${firstBill * 0.2} and the total value ${firstBill + firstBill * 0.2}`);

secondBill <= 300 && secondBill >= 50 && secondBill > 300 ? console.log(`The bill was ${secondBill}, the tip was ${secondBill * 0.15} and the total value ${secondBill + secondBill * 0.15}`):
console.log(`The bill was ${secondBill}, the tip was ${secondBill * 0.2} and the total value ${secondBill + secondBill * 0.2}`);

thirdBill <= 300 && thirdBill >= 50 || thirdBill > 300 ? console.log(`The bill was ${thirdBill}, the tip was ${thirdBill * 0.15} and the total value ${thirdBill + thirdBill * 0.15}`):
console.log(`The bill was ${thirdBill}, the tip was ${thirdBill * 0.2} and the total value ${thirdBill + thirdBill * 0.2}`);

/**
 * JavaScript releases and ES5, ES6+ and ESNext
 * 
 */

// Brendan Eich created first version of JavaScript called Mocha
// Mocha name changed to JavaScript to please the developers
// Microsoft launches IE, copies JS from netscape and called it JScript
// ES1 created
// ES5 big changes and features
// ES6 biggest update ever

// Javascript is able to execute due to backward compatibility
// Older version not removed only added new features

// use the up to date chrome version browser
// all browsers have certain versions of their browser that runs the software
// Converting back to ES5 to ensure browser compatibility for all users
// ES5 not supported in older browsers (only modern browsers supported)

// Most features in production with transpiling and polyfilling

// ESNext = future versions of the language (new feature proposals)


