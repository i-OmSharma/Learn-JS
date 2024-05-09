const dc_heros = ["superman","batman","flash"]
const marvel_heros = ["spiderman","hulk","strange"]

// marvel_heros.push(dc_heros) //-> Appends new elemnet to the end of the array.And returns new length of the array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc_heros) //->combines two or more arrays.This method returns a new array without modifying any existing arrays
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] //-> spread operator
// console.log(all_new_heros);

const other_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [2, 3]]]

const real_other_array = other_array.flat(Infinity) //-> Returns a new array with all sub-arrays elements concatenated into it recursively up to the specified depth.
// console.log(real_other_array);

// console.log(Array.isArray("Om")); //-> (.isArray)to  check is it is a array
// console.log(Array.from("Om")); //-> (from) to convert into array
// 
// console.log(Array.from({name: "Om"})); //-> interesting , we have to define or clear that from what we want to build an array,like from  keys ,string.

let score1 = 99
let score2 = 88
let score3 = 77

console.log(Array.of(score1, score2, score3));