'use strict';
// shows visible errors in the console
/*
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
/*
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