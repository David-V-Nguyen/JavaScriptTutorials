'use strict';
// shows visible errors in the console

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive now');

//const interface = 'audio';
//const private = 534;

/** 
 * Functions 
 * Code that can be used continuously
 * 
 */

function logger () {
    console.log('My name is David');
}

// calling / running / invoking function
logger();

// parameters in the brackets for variables
// pass variables into the function to be used
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    // create a variable 'juice' using a template literal
    // use back-ticks to create a template literal, allows expressions to be included
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // allows function to return the juice value
    return juice;
}
// run the function using parameter values 5 and 0 for apples and oranges
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

/**
 * Function Declarations and Expressions
 * 
 */

// Function declaration
// creating a function and any parameters (values) it takes
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
// store function inside variable 'calcAge2'
// Also known as an anonymous function (function has no name)
// function Expression = gives a result (values)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

/**
 * Arrow functions
 * 
 */

// Arrow function
// What is being used as parameters
// Arrow points to expression
// store function in variable
const calcAge3 = birthYear => 2037 - birthYear;
// explicitly returns '2037 - birthYear' automatically
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;  // return function must be written due to '{}'
    return `${firstName} retires in ${retirement} years`;
} 

console.log(yearsUntilRetirement(1991, 'David'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// arrow functions don't understand the 'this' declaration

/**
 * Coding challenge 1
 * 
 */

/*
Dolphins and the koalas gymnastics teams, there is a new gymnastics discipline,
which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated
(So one average score per team)
A team ONLY wins if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as
parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console,
together with the victory points, according to the rule above. 
Examples: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2

DATA 1: 
Dolphins score 44, 23, 71
Koalas score 65, 54, 49

DATA 2:
Dolphins score 85, 54, 41
Koalas score 23, 34, 27
*/

const dolphinsPoints1 = 44 + 23 + 71;
const koalasPoints1 = 23 + 34 + 27;

const dolphinsPoints2 = 85 + 54 + 41;
const koalasPoints2 = 23 + 34 + 27;

const calAverage = (dolphinsTotal, koalasTotal) => {
    const avgDolphinsScore = dolphinsTotal / 3;
    const avgKoalasScore = koalasTotal / 3; 
    //console.log(avgDolphinsScore); // testing
    //console.log(avgKoalasScore); // testing
    return `Dolphins average score ${avgDolphinsScore}, Koalas average score ${avgKoalasScore}`;
    
}
//console.log(calAverage(85, 54, 41));

function checkWinner(avgDolphins, avgKoalas) {
    
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins >= avgKoalas * 2 && avgKoalas >= avgDolphins * 2) {
        console.log(`Both teams draw`);
    } else {
        console.log(`No team wins`);
    }
}

console.log(calAverage(dolphinsPoints1, koalasPoints1));
checkWinner(46, 28);
console.log(calAverage(dolphinsPoints2, koalasPoints2));
checkWinner(60, 28);

/**
 * Introduction to arrays
 * 
 */
// longer to write out if multiple variables of same type
const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

// create array of friend strings in collection 'friends'
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2000, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // inside '[]' can use any expression

