//! Array with some restrictions

// string, number, boolean in a precise order

let user1: string[] = ["JK"]

let user2: (string | number)[] = ["JK", 1, 2, "PK"]


//tuples
let tUser: [string, number, boolean]
tUser = ["JK", 21, true]
// tUser = ["JK", true, 21] //! Eroor(because of ordering)


type User = [number, string]
const newUser: User = [112, "example@gmail.com"]

// newUser[1] = "changed@gmail.com"
// newUser.push("BK")


let rgb: [number, number, number] = [255, 123, 112]


export{}