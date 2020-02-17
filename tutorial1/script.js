/**
 * Variables and data types
 */
/*
var firstName = "John";
console.log(firstName);
var lastName = "Smith";

var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
job = "Teacher";
console.log(job);

var _3years = 3;
var johnMark = "John and Mark";
// var if = 23; 
// shows an error due to naming convention of variable
*/

/**
 * Variable mutation and type coercion
 */
/*
 var firstName = "John";
 var age = 28;

 // type coercion
 console.log(firstName + " " + age);

 var job, isMarried;
 job = "teacher";
 isMarried = false;

 console.log(firstName + "is a " + age + ' year old ' + job + ". Is he married?" + isMarried);

 // variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + ' year old ' + job + ". Is he married? " + isMarried);

var lastName = prompt("what is his last name?");
console.log(firstName + " " + lastName);
*/

/**
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operator
yearJohn = now + ageJohn;
yearMark = now + ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeOf operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);


/**
 * Operator precedence
 * Precedence is priority of what is executed first
 */
/*
var now = 2018;
var yearJohn = 1989; 
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJohn >= fullAge; //Left to right
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //Left to right
console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 
console.log(x,y);

// more operators
x *= 2;
console.log(x);

x *= 10;
console.log(x);

x--;
console.log(x);

/***
 * Coding challenge 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula: BMI = mass / height^2
Store Mark's and John's mass and height in variables
Calculate both their BMIs
Create a boolean variable containing information about whether Mark has a higher BMI
than John
Print a string to the console containing the variable from step 3 
(Something like "Is Mark's BMI higher than John's? true")
*/
/*
var massMark = 78; // kg
var massJohn = 83; // kg

var heightMark = 1.69; // metres
var heightJohn = 1.85; // metres

var markBMI = Math.pow(heightMark, 2) / massMark;
var johnBMI = Math.pow(heightJohn, 2) / massJohn;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

var isMarksBMILower;
isMarksBMILower = markBMI < johnBMI; //returns true, if BMI is lower

console.log("Is Mark's BMI lower than John's? " + isMarksBMILower);

/**
 * IF/Else statements
 */

var firstName = "john";
var civilStatus = "single";


if (civilStatus === "married") {
    console.log(firstName + "is married!"); //false (doesn't show)
} else {
    console.log(firstName + " will hopefully marry soon!");
}

var isMarried = true; 
if (isMarried) {
    console.log(firstName + "is married!");
} else {
    console.log(firstName + " will hopefully marry soon!");
}

var massMark = 78; // kg
var massJohn = 83; // kg

var heightMark = 1.69; // metres
var heightJohn = 1.85; // metres

var markBMI = Math.pow(heightMark, 2) / massMark;
var johnBMI = Math.pow(heightJohn, 2) / massJohn;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

if (markBMI < johnBMI){
    console.log("Mark's BMI is lower than John's BMI");
} else {
    console.log("Mark's BMI is higher than John's BMI");
}

/**
 * Boolean Logic 
 */



 