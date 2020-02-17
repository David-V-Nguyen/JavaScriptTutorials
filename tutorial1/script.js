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
/*
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
/*
var firstName = "John";
var age = 20;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager.");
} else {
    console.log(firstName + " is a man.");
}

/**
 * Tenary operator and switch statements
 */
/*
var firstName = "John";
var age = 22;

// Ternary operator
age >= 18 ? console.log(firstName + " drinks beer.") 
: console.log(firstName + " drinks juice.");         
// age >= 18 (condition)
// ? console.log(drinks beer) (IF statement)
// : console.log(drinks juice)(Else statement)

var drink = age >= 18 ? "beer" : "juice";   //age >= 18 ? "beer" : "juice" (operator)
console.log(drink);

if (age >= 18){
    var drink = "beer";
} else {
    var drink = "juice";
}
*/
// switch statement
/*
var firstName = "John";
var job = "teacher";
switch(job) {
    case "teacher":
    case "instructor":
        console.log(firstName + " teaches kids how to code.");
        break;
    case "driver":
        console.log(firstName + " drivers an uber in Lisbon");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites");
        break;
    default:
        console.log(firstName + " does something else.");
}

var firstName = "John";
var age = 20;

switch(true) {
    case age < 13:
        console.log(firstName + " is a boy");
        break;
    case age > 13 && age < 20:
        console.log(firstName + " is a teenager");
        break;
    default:
        console.log(firstName + " is a man");
}

/**
 * Truthy and Falsy values and Equality operators
 */

// falsy values = undefined, null, 0 , "  ", NaN
// truthy values = NOT falsy values
/*
var height;
height = 23; // integer

if (height || height === 0) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}

// Equality operators

if (height === "23") { // condition is false, doesn't print out
    console.log("The == operator does type coercion!");
}

/**
 * Coding challenge 2
 */

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
print the winner to the console, include the average score in the output.
3. change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)
4. Mary also plays basketball, her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. 
need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. change the scores to generate different winners, keeping in mind there might be draws.
*/

var johnsTeamScore = (89 + 120 + 103) / 3;
var mikesTeamScore = (116 + 94 + 123) / 3;
var marysTeamScore = (97 + 134 + 105) / 3;

console.log("John's team average score is " + johnsTeamScore);
console.log("Mike's team average score is " + mikesTeamScore);
console.log("Mary's team average score is " + marysTeamScore);

if (johnsTeamScore > mikesTeamScore) {
    console.log("John's team wins with an average score of " + johnsTeamScore);

} else if (johnsTeamScore | mikesTeamScore < marysTeamScore) {
    console.log("Mary's team wins with an average score of " + marysTeamScore);

} else if (johnsTeamScore === mikesTeamScore){
    console.log("Ends with a draw between John's and Mike's teams");

} else if (johnsTeamScore && mikesTeamScore === marysTeamScore) {
    console.log("Ends in a draw with every team");

} else {
    console.log("Mike's team wins with an average score of " + mikesTeamScore);
} 

/**
 * Functions
 */
// function declaration
// function whatDoYouDo(job, firstName){} 

// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case "teacher":
            return firstName + " teaches kids how to code";
        case "driver":
            return firstName + " drives a cab in Lisbon";
        case "designer":
            return firstName + " designs beautiful websites"
        default:
            return firstName + " does something else";
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

/**
 * Arrays
 */

// Initialize new array 

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);







