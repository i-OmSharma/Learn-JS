//if

// conditions:- <, >, <=, >=, !=, ==, ===, !==

// const score = 200

// if(score > 100) {
//     const power = "crawl"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); // power is not defined globally thats why powr gives error!

// short hand notation

const balance = 10

// if (balance > 5) console.log("test"), console.log("test2"); // inplecit scope( applied in same/single line,we use multiple lines by using ','. )(we should not do this this exploits code readability)

// if (balance < 5) {
//     console.log("less than");

// } else if (balance < 7.5) {
//     console.log("less than 7.5");

// } else if (balance < 9) {
//     console.log("less than 9");

// } else {
//     console.log("less than 12");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if (userLoggedIn && debitcard) {
    console.log("allow user shoping");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user Logged In");
}