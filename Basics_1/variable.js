const accountId = 123; //only const for constant
let accountEmail = "example@mail.com"
var accountpassword = "abc"
accountCity = "Ranchi"/*dont use this,without writing anything define variable
                      keep in mid it can be defined like this also*/
      
let accountState;
                      
//accountId = 2 // Not allowed

/*
    {
        this is scope
    }
*/

//prefer not to use var,beacuse of issue in block scope and functional scope

accountEmail = "ab@mail.com"
accountpassword = "xyz"
accountCity = "xyz"


console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity, accountState])