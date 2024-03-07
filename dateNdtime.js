// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 2, 7) ->Date formate //startes from 0 means 0=january,1=febuary
// let myCreatedDate = new Date(2024, 2, 7, 7, 15) -> time is specified here.
// let myCreatedDate = new Date("2024-03-7") //->In the YYYY-MM-DD format Months are taken normaly.
let myCreatedDate = new Date("7-03-2024") //-> Indian version of MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000); //-> to get in seconds we will divide it with 1000
// console.log(Math.floor(Date.now()/1000)); //-> to dont get the decimal value we will use Math

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // similarly we can get the day,hour,etc.
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

console.log(newDate.toLocaleString('dafault',{
    weekday: "long"
}) );