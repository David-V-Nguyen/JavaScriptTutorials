///////////////////////////////////////
// Lecture: Hoisting

/** 
Code scanned for function declarations, like for each function, 
 a property is created in the Variable object (pointing to the function)
 

Code scanned for variable declarations, like for each variable, 
 a property is created in the Variable Object, set to (undefined)

*/

// function hoisting
calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);

var retirement = function (year) {
    console.log(65 - (2016 - year)); //something in brackets gets higher priority
}

// variable hoisting

console.log(age); // undefined since it's not defined when parsed
var age = 23;

function foo () {
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // points to global age

///////////////////////////////////////
// Lecture: Scoping

// Lexical scope means child scope has access to parent scope (eg. global scope)
// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the difference between execution stack and scope chain


var a = 'Hello!'; // has access to global and first scope
first();

function first() { // has access to global and itself scope
    var b = 'Hi!';
    second();

    function second() { // has access to global, first and itself scope
        var c = 'Hey!';
        third()
    }
}
function third() { // only has access to global scope, cant access second function
    var d = 'John'; // can't access variable c
    //console.log(a + b + c + d);
    console.log(a + d);
}

///////////////////////////////////////
// Lecture: The this keyword

// "This" keyword points to global object (eg. window object in browser)
// method call = variable points to object that is calling method

// "This" keyword is not assigned a value until function where it is defined is called

//console.log(this); // window object === default object
/*
calculateAge(1985);

function calculateAge (year) {
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() { // part of the john object (use of colon)
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this); // is window object due to not part of john object 
        }
        innerFunction();
        */
    }
};
// when regular function call happens, window object is called
john.calculateAge(); // parenthesis are used to call a function

var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // saves it as a variable
mike.calculateAge();
// borrowing methods
// want mike calculateAge function to be the same as john's calculateAge function



