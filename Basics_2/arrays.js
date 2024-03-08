// Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["stark","strange"]

const myArr2= new Array(1,2,3,4,5)
// console.log(myArr[0]);

// Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //-> last value is removed without seeing anything whats there it just remove's.

// myArr.unshift(9) //Adds at the begibing of the array but it 
// myArr.shift() //->removes from beginig

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()

// console.log(typeof newArr);

// console.log(myArr);

// slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) //-> this includes 1,2 exclude 3.1 is starting and 3 is the point till bwfore we have to take it.

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) //-> this includes 1,2,3.it starts from 1 and ends with 3,it included all elements.
console.log("C ",myArr);
console.log(myn2);


