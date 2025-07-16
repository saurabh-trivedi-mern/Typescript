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