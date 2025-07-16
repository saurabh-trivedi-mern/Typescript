const superHeroes: string[]  = []
//! By default array data type is never

superHeroes.push("JK")

// superHeroes.push(78)
//! This will give error



const superNumbers: number[]  = []
const moreNumbers: Array<number>  = []

superNumbers.push(45)
moreNumbers.push(15)



type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: "JK", isActive: true})



const MLModels : number[][] = [
    [255, 25, 78],
    [58, 95, 76]
]



export {}