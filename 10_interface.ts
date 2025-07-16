interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleID?: string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}


//! reopening of interface
interface User{
    githubToken: string
}

const saurabh1: User = {
    dbId: 123, 
    email: "jk@jk", 
    userId: 253,
    githubToken: "Git@JK", 
    startTrial: () => { return "Trial Started" },
    getCoupon: (name: "Summer Sale", off: 15)=>{ return 15 }
}



//! Inheritance
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}


const saurabh2: Admin = {
    dbId: 123, 
    email: "jk@jk", 
    userId: 253,
    githubToken: "Git@JK", 
    role: "admin",
    startTrial: () => { return "Trial Started" },
    getCoupon: (name: "Summer Sale", off: 15)=>{ return 15 }
}

export { }