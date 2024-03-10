// Objects are declared as:- 1.Literals, 2.Constructors

/*

Literls : a literal is a notation for representing a fixed value in source code. 
            It directly specifies a value without requiring computation or further interpretation.
            Essentially, literals are the raw data given in a variable or constant.

Constructors: Constructors are special methods in object-oriented programming languages that are used to initialize objects of a class. 
                They are typically called when an object is created, and their main purpose is to set up the initial state of the object. 
                Constructors have the same name as the class they belong to.

    In JavaScript, a constructor is a special method that is called when an object is created from a class. 
    Constructors are used to initialize the object's properties or perform any other setup that is necessary for the object to be in a valid state.

*/

//singleton : A singleton in JavaScript is a design pattern that ensures a class has only one instance and provides a global point of access to it. It is commonly used to manage centralized state or resources.
        // -> if it is make them from constructor then its singleton ,if we declare them as literals then its not a singleton


// Object constructor
// Object.create = {} //-> {} - Object

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Om",
    "fullName": "Great Om",
    // mySym: "mykey1", -> its a string .
    [mySym]: "mykey1",
    age: 20,
    location: "NYC",
    email: "om@email.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(jsUser.location); //-> very basic method,this will not work with vales defined with as predefined STRINGS
// console.log(jsUser["fullName"]); //-> this way er can access the predefined STRING value.like "fullname", we cant access using '.' .
// console.log(jsUser.mySym); // -> using this ,its a tupe of string which is not symbol.
// console.log(jsUser[mySym]); // ->values will remain same,type changes from string to symbol.

jsUser.email = "om@nyc.com" // -> used to overwrite
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email = "om@disney.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`); // -> backticks = string interpolation
}

// console.log(jsUser.greeting); // -> function is not exicuted function returned back(function not executed,we got reference of that function )
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
