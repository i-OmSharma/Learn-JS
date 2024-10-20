const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(myNums.map( (num) => num + 10 ));

// const newNums = []
// myNums.forEach( (nums) => {
//     newNums.push( nums + 10 )
    
// } )


// Chaining:-

const newNums = myNums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 15 )

console.log(newNums);