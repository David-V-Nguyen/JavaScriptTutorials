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
/*
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
/*
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
/*
var names = ["John", "Mark", "Jane"]; //arrays start at 0
var years = new Array(1990, 1969, 1948);

console.log(names[2]); // prints Jane
console.log(names.length); // prints the length of the array = 3 names

// mutate array data 

names[1] = "Ben"; // stores Ben into the 2nd position of array
names[names.length] = "Mary"; // add mary to the 3rd position of array
console.log(names); // show the whole array (contents)

// different data type 

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); // adds element at the end of array 
john.shift("Mr."); // adds element at the start of array
console.log(john);

john.pop(); // removes last element in array and returns element
john.pop();
john.shift();
console.log(john);

john.indexOf(john.indexOf(1990));

var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer"
: "John IS a designer"; 
console.log(isDesigner);

/**
 * code challenge 3
 */

 /*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, 
10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/
/*
var billOne = 124;
var billTwo = 48;
var billThree = 268;


if (billOne | billTwo | billThree < 50) {
    
    var highRate = (20 / 100);
    highTip = billTwo * highRate;
    console.log("John pays " + highTip);
}

if (billOne | billTwo | billThree > 50 && billOne | billTwo | billThree < 200) {
    
    var medRate = (15 / 100);
    medTip = billOne * medRate;
    console.log("John pays " + medTip);

}

if (billOne | billTwo | billThree > 200) { // bills > 200

    var lowRate = 10 / 100;
    lowTip = billThree * lowRate;
    console.log("John pays " + lowTip);
}

var bills = [124, 48, 268];
var billTips = [medTip, highTip, lowTip];
console.log(billTips.values());

var totalBillOneTips = 124 + medTip;
console.log("John pays $" + totalBillOneTips);
var totalBillTwoTips = 48 + highTip;
console.log("John pays $" + totalBillTwoTips);
var totalBillThreeTips = 268 + lowTip;
console.log("John pays $" + totalBillThreeTips);

/**
 * Objects and properties
 */
/*
// Object literal
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Lucy"],
    job: "teacher",
    isMarried: false
};
console.log(john.firstName);

console.log(john["lastName"]); // find property in array

var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
 
/**
 * Object and methods
 */
/*
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Lucy"],
    job: "teacher",
    isMarried: false,
    calcAge: function() {
        return this.age = this.birthYear; // this = the PRESENT object (itself)
    }

};

//console.log(john.calcAge(1990));
john.calcAge();
console.log(john);

/**
 * coding challenge 4
 */
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula: BMI = mass / height^2
Store Mark's and John's mass and height in variables
Calculate both their BMIs
For each of them, create an object with properties for their full name, mass, height
Add a method to each object to calculate the BMI, save the BMI to the object and
return it from the method
In the end log to the console who has the highest BMI
(Hint: They might have the same BMI )
*/

var massMark = 78; // kg
var massJohn = 83; // kg

var heightMark = 1.69; // metres
var heightJohn = 1.85; // metres

var john = {
    fullName: "John Smith",
    mass: 83,
    height: 1.85,
    bmi: johnBMI,
    calcJohnBMI: function() {
        return johnBMI = this.mass / Math.pow(this.height);
    },
    
};

var mark = {
    fullName: "Mark Manson",
    mass: 78,
    height: 1.69,
    bmi: markBMI,
    calcMarkBMi: function() {
        return markBMI = this.mass / Math.pow(this.height);
    }
};

//console.log(john.calcJohnBMI);




