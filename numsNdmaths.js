// const score = 99
// console.log(score);
// 
// const balance = new Number(21)
// console.log(balance);
// 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// 
// const otherNumber = 21.94567 //-> here precision value is 2 and the rest is rounded off
// console.log(otherNumber.toPrecision(2));
// 
// const millions = 100000000
// console.log(millions.toLocaleString('en-IN')); //-> Default its american standard,after adding en-IN converts into INDIAN standards.

/* ======================MATHS========================*/

// console.log(Math);

// console.log(Math.abs(-4)); //->absoluteValue
// console.log(Math.round(6.5)); //->roundOff
// console.log(Math.ceil(2.1)); //->slitely upper than the exact roundOff to next value.(mainValue+1)
// console.log(Math.floor(2.1)); //->if its not exact number round off to lower number.(mainValue)

console.log(Math.random()); //-> value will always lie in between 0-1
console.log((Math.random()*10) + 1); //-> shifted value ,multiplied with 10
console.log(Math.floor(Math.random()*10) + 1); //-> if sometime we get the value like 0.something,it will become 0,to avoid 0 we are adding 1 here

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 