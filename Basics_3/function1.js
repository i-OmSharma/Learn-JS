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
console.log(userLogin()); // novalue -> Undefined!
