// for ARRAY :- FOROF
// for of

// ["", "", ""] string 
// [{}, {}, {}] objects inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// const greetings = "haalloooo!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


const greetings = "haallooo o!"
for (const greet of greetings) {
    if (greet === ' ') {
        continue
    }
    // console.log(`Each char is ${greet}`);
    
}



// MAPS:-A Map object is a simple key/value map and can iterate its elements in insertion order.
// No dublicate values,only unique values
const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('PAK', "PAKISTAN")
map.set('USA', "UNITED STATES")
map.set('IN', "INDIA")// no dublication ,no order change

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) { // destructure of array
    // console.log(key, value);
    
}


const myObj = {
    'game1 ': 'NFS',
    'game2 ': 'GTA'
}

// for (const [gkey, value] of myObj) { // objects are not iteratable here 
//     console.log(gkey, value);
    
// }
