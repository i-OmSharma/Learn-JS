// Accumulator -> empty variable

// const array1 = [1, 2, 3, 4,];

// const initialValue = 0;
// const sumWitInitial = array1.reduce(
//     (accumulator, currentvalue) => accumulator + currentvalue, initialValue // for the first time the initial values goes into the accumulator, after that the sum (result) goes into the accumulator
// );

// console.log(sumWitInitial);

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc,curVal) {
//     console.log(`acc ${acc} and curVal${curVal}`);
//     return acc + curVal
// }, 2) // value given after curlyBraces goes to accumulator


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 69
        
    },
    {
        itemName: "cpp course",
        price: 96
        
    },
    {
        itemName: "ml course",
        price: 88
        
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)

