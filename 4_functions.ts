function addTwo(num : number) : number{
    return 8;
}
addTwo(8)


const getHello = (s: string): string =>{
    return "JK";
}


const heroes = ["JK", "PK", "DK"]

heroes.map((hero): string => {
    return `Hero is ${hero}`
})

// heroes.map((hero):string => {
//     return 1
// })
//! This will give Error, because it is returning a number



function consoleError(errMsg: string): void{
    console.log(errMsg)
}

// function consoleError(errMsg: string): void{
//     console.log(errMsg)
//     return "Error!"
// }
//! Error because of void, no return should be there



function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

// function handleError(errMsg: string): never{
//     console.log(errMsg)
// }
//! This will give error as it is reaching endpoint



export {}