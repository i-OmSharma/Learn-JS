/*
    Memory -> 1.Stack,2.Heap
          (Premitive) (Non-Premitive)
*/
// Stack -> we get copy of that value which we have declared
// Heap -> we get reference of that orginal value


// Stack:-
// let Name = "Om"

// let anotherName = Name

// console.log(anotherName);

let Name = "Om"

let anotherName = Name
anotherName = "Netflix"

// console.log(Name);
// console.log(anotherName);

// Heap:-
let user1 = {
    email: "user@email.com",
    upi: "user@upi"
}

let user2 = user1

user2.email = "big@email.com" // -> Inside a object we can acces its components with a "."

console.log(user1.email);
console.log(user2.email);