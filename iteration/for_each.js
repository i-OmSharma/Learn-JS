// for-each

const code = ["js", "rb", "py", "cpp", "swift"]

// code.forEach( function (val) { // there is no name for cal back function // whatever value it will be, value will automatically be taken towards the paramater 
//     console.log(val);
// } ) 

// code.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }
// code.forEach( printMe )


// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCode = [
    {
        languageName: "JS",
        languageFileName: ".js"
    },
    {
        languageName: "Java",
        languageFileName: ".java"
    },
    {
        languageName: "Swift",
        languageFileName: ".swift"
    }
]

myCode.forEach( (item) => {
    console.log(item.languageName);

} )


