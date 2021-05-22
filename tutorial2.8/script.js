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
/*
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
/*
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
/*
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
/*
// create array of friend strings in collection 'friends'
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2000, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // inside '[]' can use any expression

friends[2] = 'Jay';
console.log(friends);

const firstName = 'David';
const david = [firstName, 'Nguyen', 2020 - 1998, 'unemployed', friends];

console.log(david);

// Exercise 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

// Cannot use arrays as a value in an expression
const years = [1990, 1967, 2002, 2010, 2018];
// gives an error due to invalid action
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge([years[0]]), calcAge(years[1]), calcAge([years[years.length - 1]])];

console.log(ages);

/**
 * Basic Array operations (methods)
 * 
 */
/*
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // adds another item into the array

console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift puts item at the start of array
console.log(friends);

friends.pop(); // removes the last item of array
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes the first item of array
console.log(friends);

// 'indexOf' finds the position of variable in array
console.log(friends.indexOf('Steven'));


friends.push(23);
// 'includes' checks if variable defined is in array
// strict equality (Must be EXACT same variable type)
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven!');
}

/**
 * Coding challenge 2
 * 
 */

/*
Steven is still building his tip calculator, using the same rules as before
Tip 15% of the bill if the bill value is between 50 and 300, if the bill
value is different, the tip is 20%

1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above
(You can check out the code from first tip calculator challenge if you need to)
Use the function type you like the most. 
Test the function using a bill value of 100
2. Let's use arrays? So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated
from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip

TEST DATA: 125, 555, 44
*/

function calcTip (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        const tip = billValue * 0.15;
        console.log(`Bill is ${billValue}, tip is ${tip}`);
        return tip;
    } else if (billValue < 50 && billValue > 300) {
        const tip = billValue * 0.2;
        console.log(`Bill is ${billValue}, tip is ${tip}`);
        return tip;
    } else {
        const tip = billValue * 0.2;
        console.log(`Bill is ${billValue}, tip is ${tip}`);
        return tip; // must be declared for each conditional result
    }
    
}

calcTip(100); // testing example

const bills = [125, 555, 44];
console.log(bills);

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

//console.log(tip1); // testing
const tips = new Array();
tips.push(tip1);
tips.push(tip2);
tips.push(tip3);
console.log(tips);

const total = new Array();

const total1 = bills[0] + tip1;
const total2 = bills[1] + tip2;
const total3 = bills[2] + tip3;
console.log(total1); // testing

total.push(total1);
total.push(total2);
total.push(total3);
console.log(total);

/**
 * Introduction to Objects
 * 
 */
/*
const davidArray = [
    'David',
    'Nguyen',
    2037 - 1991,
    'student',
    ['Michael', 'Peter', 'Steven']
];

// This object 'David' has properties; 'firstName', 'lastName', 'age', etc
// Object literal syntax, properties are clearly defined
const david = { 
    firstName: 'David',
    lastName: 'Nguyen',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(david);

/**
 * Dot and Bracket notation
 * Retrieving data from objects using Dot or Bracket notation
 * 
 */

// ' . ' dot notation is an operator which finds any property defined inside object
/*
console.log(david.lastName);
console.log(david['lastName']);

const nameKey = 'Name';

// '+' operator is executed first, square brackets can hold any expression 

console.log(david['first' + nameKey]);
console.log(david['last' + nameKey]);

const interestedIn = prompt('what do you want to know about David? Choose between firstName, lastName, age, job and friends');
console.log(david[interestedIn]);
// david doesn't have 'interestedIn' property
// bracket notation will allow 'david' object to have the property
// JS replaces the 'interestedIn' property with the correct value defined

if (david[interestedIn]) {
    console.log(david[interestedIn]);
} else {
    console.log('Wrong request! what do you want to know about David? Choose between firstName, lastName, age, job and friends');
}

david.location  = 'England';
david['twitter'] = '@InfamousNoodle';
console.log(david);

// Challenge
// David has 3 friends, and his best friend is called michael

david.bestFriend = 'Michael';
david.friends = 3;

/**
 * Object Methods
 * 
 */

 const david = { 
    firstName: 'David',
    lastName: 'Nguyen',
    birthYear: 1998,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // function Expression
    // 'calcAge' function (method) part of 'david' object
    // Needs ':' after function name to be property of object 
    // similar to calcAge function below
    calcAge: function() {
        // 'this' variable will point to 'david' object
        // 'this' = the object calling the method
        // calls and stores new 'age' property using 'this.age'
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    // 'getSummary' method, summarizes all information of object 'david'
    getSummary: function() {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

/*
// Similar to this function
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}
*/
//console.log(david.calcAge(1998));       // Dot notation
//console.log(david['calcAge'](1998));    // Bracket notation

console.log(david.calcAge());
console.log(david.age);
console.log(david.getSummary());

// Challenge 
// 'david is a 23 year old student, and he has a drivers license'
// located in 'david' object

/**
 * Coding challenge 3
 * 
 */

/*
Let's go back to Mark and John comparing their BMI
This time, let's use objects to implement the calculations ?
Remember BMI = mass / height ** 2  = mass / (height  + height), (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass and height
(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects)
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: 'John's BMI (28.3) is higher than Mark's (23.9)!'

TEST DATA: 
Mark's weight 78kg, height is 1.69m tall
John's weight 92kg, height is 1.95m tall
*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        const value = this.mass / this.height ** 2;
        console.log(value);
        this.bmi = value.toFixed(1);
        console.log(this.bmi);
        return this.bmi; 
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        const value = this.mass / this.height ** 2;
        console.log(value);
        this.bmi = value.toFixed(1);
        console.log(this.bmi);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`);

} else if (john.bmi > mark.bmi) {
   
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${marks.firstName}'s (${mark.bmi})!`);
}

/**
 * For loop (iteration)
 * 
 */

