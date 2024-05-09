// const code = ["js", "rb", "py", "cpp", "swift"]

// const values = code.forEach( (val) => {
//     // console.log(val);
//     return val

// } )

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => num > 4) // single line arrow function. here values are returned.
// console.log(newNums);


// In JavaScript arrow functions, if you use curly braces {}, 
//you need to include a return statement explicitly to indicate what should be returned from the function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => {
//     return num > 4})
// console.log(newNums);

// The curly braces are used, but there's no explicit return statement. 
//Therefore, the arrow function doesn't return anything explicitly, resulting in undefined.

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
        
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (BK ) => BK.publish === "Science" )
    const userBooks = books.filter( (BK ) => BK.edition >= 2000 )

  console.log(userBooks);


