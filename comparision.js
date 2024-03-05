// console.log(2 > 1);
// console.log(2 <= 1);
// console.log(2 > 1);
// console.log(2 == 2);
// console.log(2 != 1);

// all output in boolean

// console.log("2" > 1); -> string got converted into number and then it got compared
// console.log("02" > 1); ->same here

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);

//typical comparison mostly avoided

/*
    The reason is that an equality check == and 
    comparison >,<,>=,<= works differently.
    Comaprison converts null to a number, treating it as 0.
    thats why (null >= 0) is true and (null > 0) is false.
*/ 

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// typical comparison mostly avoided

// === -> strict check (checks its value and datatype also)

console.log("2" === 2);