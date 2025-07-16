//! use it wisely and strictly

let score : number | string = 45
score= 86
score= "78"
// score= true //!Error



type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    adminID: number
}

let aUser: User | Admin = {name: "JK", id: 45}
aUser = {username: "PK", adminID: 794}



function getDbId(id: number | string){
    console.log(`Id is ${id}`)
}
getDbId(3)
getDbId("3")


function getTheDbId(id: number | string){
    if(typeof id === "string"){
        id.toLocaleLowerCase()
    }
}




const data1: number[] = [1, 5, 8, 10]
const data2: string[] = ["A", "B", "C"]

// const data3: number[] | string[] = ["A", "B", "C", 2, 4,6]
//! In this either all number or all strings

const data3: (number| string)[] = ["A", "B", "C", 2, 4, 6]
//! In this, both numbers and strings



//! Cannot Be Changed
let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" //!Error

export {}