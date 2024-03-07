const name = "Om" //same object is invoked in behind the sceen
const repoCount = 7

// console.log(name + repoCount + " hii");

// console.log(``); // -> backticks,string interpolation

// console.log(`hii... i'm ${name} and my git repo count is ${repoCount}`);

// const realName = new String('Netfli-x') //new keyword used to use object of JS.object is invoked

// console.log(realName[1]);
// console.log(realName.__proto__);

// console.log(realName.length);
// console.log(realName.toUpperCase());
// console.log(realName.charAt(0));
// console.log(realName.indexOf('N'));

// const newString = realName.substring(-7, 3) //->sub stung

// console.log(newString);

// const anotherString = realName.slice(-7, 4) //->slicing 
// console.log(anotherString);

const newString1 = "   Om   "
console.log(newString1);
console.log(newString1.trim()); //->triming space

const url = "https://sharma.com/om%20sharma"

console.log((url.replace('%20','-'))); //->replacement 

console.log(url.includes('om')) //->encury from the provided string.

const fakeName = new String('sixty-shades-of-grey')

console.log(fakeName.split('-'));