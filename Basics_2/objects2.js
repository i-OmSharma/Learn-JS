// const twitchUser = new Object() //-> singleton object
const twitchUser = {} //-> non simgleton object

twitchUser.id = "123abc"
twitchUser.name = "Noni"
twitchUser.isLoggedIn = true



// console.log(twitchUser);

const regularUser = {
    email:"example@email.com",
    fullName:{
        userFullName:{
            firstName:"Om",
            lastName:"TheGreat"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) //{}this becomes as target and the obj's acts as source that  they will definetilly go there

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "example@email"
    },
    {
        id: 1,
        email: "example@email"
    },
    {
        id: 1,
        email: "example@email"
    }
    
]


users[1].email
console.log(twitchUser);

console.log(Object.keys(twitchUser));
console.log(Object.values(twitchUser));
console.log(Object.entries(twitchUser));
console.log(twitchUser.hasOwnProperty('isLoggedIn'));