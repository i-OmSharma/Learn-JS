const userEmail = []// if string value is there then its a ture , if there is empty string then its false value
                                   // if there is empty ARRAY then its a true 
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Disn't got user email");
// }

// falsy values:-
// false, 0, -0, BigInt (0n)-> zero n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish Coalescing Operator (??): Null,Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // take value condition wise ,its made for null and undefined
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 // here the first value we got is selected nop furthur values will be taken

console.log(val1);

// Terniary Operator

// condition ? ture : false

const price = 200

price <= 80 ? console.log("less than 80") : console.log("more than 80");