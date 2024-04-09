const user = {
    username: "Om",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        // console.log(this); current value or current context.
    }

}

// user.welcomeMessage()
// user.username = "Mas"
// user.welcomeMessage()

// console.log(this);

// object present in global is window. 

// function tea(){
//     let userName = "Om"
//     console.log(this.userName);
// }
// tea()

// const tea = function(){
//     let userName = "Om"
//     console.log(this.userName);
// }
// tea()

const tea = () => { 
    let userName = "Om"
    console.log(this);
}
// tea()

//Explicitly return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // curly braces return is mendatory

//Implicit return:-

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // parenthesis no return,very usefull in react

const addTwo = (num1, num2) => ({userName: "Om"})// to return object we have to put it in parenthesis.

console.log(addTwo(1, 3));

const myArr = [2, 4, 5, 6, 7]
myArr.forEach(function () {})
myArr.forEach( () => {} )
