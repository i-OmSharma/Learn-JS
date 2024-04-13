// for OBJECTS :- FORIN
//  for in loop

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key); // key
}

for (const key in myObj) {
    // console.log(myObj[key]); // object
}

for (const key in myObj) {
    // console.log(` ${key} shoetcut is ${myObj[key]}`);
}


const proArr = ["js", "rb", "py", "cpp", "swift"]

for (const key in proArr) {
    // console.log(proArr[key]);
}


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('FR', "FRANCE")
// map.set('PAK', "PAKISTAN")
// map.set('USA', "UNITED STATES")
// map.set('IN', "INDIA")

// for (const key in map) {
//    console.log(key);
// }




