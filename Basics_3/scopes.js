
let a = 99
if (true) {
    let a = 10
    const b = 20
    var c = 30 

    // console.log("INNER: ", a);
}

// console.log("OUTER: ", a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Om"

    function two(){
        const website = "Tinder"
        // console.log(userName);
    }
    // console.log(website); // website was inside the "function two",thats why it we can't acces it and got error

    two()
}

one()
// closer: child function can acces the parent functions and global variable! 

if (true) {
    const username = "om"
    if (username === "om") {
        const webSite = "xbox"
        // console.log(username + webSite);
    }
    // console.log(webSite);
}
// console.log(username);

/**********************************************************/

console.log(addOne(5));
function addOne(num) {
    return num + 1
}


// console.log(addTwo(5)); //the code doesn't work is because JavaScript reads and executes code from top to bottom.
const addTwo = function(num){  // this is also function but sometimes it is also called as "Expression"
    return num + 2
}
console.log(addTwo(5));