/* 
    Data Types->1.Premitive,2.Non-premitive
    keeping data into memory and accesing data from memory on this basi data is categorized.
*/

/*
    JS is Dynamic language,it allows dynamic typing.variables are not 
    explicitly declared with a data type and dynamically assign of different types during runtime.
*/

/*
    Premitive:-
    
    String,Number,Boolean,Null,Undefined,Symbol,BigInt
*/

const score = 78
const scoreValue = 99.9

const isLoggedIn = false
const outsideTemo = null
let userEmail; //or let userEmail = Undefiend;

const id = Symbol('111')
const anotherId = Symbol('222')

console.log(id === anotherId );

const bigNumber = 127631876231873681638n // adding n in last makes bigInt
/*
    Refereence Type(Non-premitive):-

    Array,Objects,Functions
*/

// array
const hero = ["me","u","forever"]

// object -> insde curly braces its Object,we can also define as variable

{
    name: "Om";
    age: 20

}

// Definig variable
let user = {
    name: "Om",
    age: 20

}

//  Function
const myFunction = function(){
    console.log("hiii...");
}

// typeof -> used to find its type
// function will return "function" buts actually "Objectfunction"




// objects,web events***