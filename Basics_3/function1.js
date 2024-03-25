// console.log("O");
// console.log("M");


function myName(){    // function -> keyword; myName -> Function Name
    console.log("O");
    console.log("M");
}

// myName() // myName -> referance ;() -> Execution

// function add2Num(n1,n2){ //(n1,n2) -> parameter/arrgument
//     console.log(n1 + n2);
// }

// function add2Num(n1,n2){ 
    
//     let res = n1 + n2
//     return res // After return code doesn't go furthur!!!
//     // console.log("Om");
// }

function add2Num(n1,n2){ 
    return n1 + n2
}

const res = add2Num(1, 2)

// console.log("Result", res);

function userLogin(userName){
    // if(userName === undefined){
        if(!userName){
        console.log("Please Enter UserName");
        return
    }
    return `${userName} just logged in`
}

// console.log(userLogin("Om"));
// console.log(userLogin()); // no value -> Undefined!

/******************************************************************************************/

function calaculateCartPrice(val1, ...num1){ //"..." ->  this 3 dots are called 'RestOperator'&'Spreadoperator' it depends upon the situation where u use it like rest or spread.
    return num1
}

// console.log(calaculateCartPrice(200, 400, 500));

const user = {  //object
    username: "Om",
    price: 299
}

function handleObject(anyobject){  //function
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Mas",
    price: 99
})

const newArr = [99,199,69]

function returnSecondVal(getArr){
    return getArr[1] 
}

// console.log(returnSecondVal(newArr));
console.log(returnSecondVal(99,199,69));
