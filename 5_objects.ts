const User = {
    naeme : "JK",
    email : "JK@gmail",
    isActive : true
}


function createUser({name: string, age: number, isPaid: boolean }){}

// createUser({name: "JK", age: 21, isPaid: true, email: "jk@gmail"})
//! This will give error, as email is being passed

let newUser = {name: "JK", age: 21, isPaid: true, email: "jk@gmail"}
createUser(newUser)
//! This is not giving any errors, even when email is passed



function createCourse():{name: string, price: number}{
    return {name: "JS Course", price: 499}
}

// function createCourse():{name: string, price: number}{
//     return "My Object"
// }
//! This will give error, as it is returning a string, but should return an object



//! TYPE ALIASES
type User = {
    name: string,
    age: number,
    isActive: boolean
}

function createNewUser(user:User): User{
    return {name: "Jk", age: 21, isActive: true}
}
// Here the User type is being passed

createNewUser({name: "Jk", age: 21, isActive: true})




type aUser = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: true,
    creditCardDetails?: number
}
//! readonly(cannot be modified later)
//! optional using(?)

let myUser: aUser = {
    _id: "12345",
    name: "JK",
    email: "JK@gmail.com",
    isActive : true,
    creditCardDetails : 4787158
}

// myUser._id = "4586"
//! Error on reassignment

myUser.email = "DK@gmail.com"




type cardNumber = {
    cardnumber: number
}

type cardDate = {
    cardDate: string
}

type cardDeatils = cardNumber & cardDate & {
    cvv: number
}

let aCard: cardDeatils = {
    cardnumber: 465632,
    cardDate: "12/07/2025",
    cvv: 7895
}









export {}