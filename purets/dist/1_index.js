"use strict";
console.log("I am here");
console.log("I am typescript");
// class User{
//     public email: string
//     name: string
//     city: string = ""
//     readonly _id: number = 456
//     private address: string
//     constructor(email: string, name: string, address: string){
//         this.email = email,
//         this.name = name
//         this.address = address
//     }
// }
class User {
    constructor(email, name, address) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.city = "";
        this._id = 456;
    }
}
const saurabh = new User("jk@jk.com", "jk", "Adarsh Nagar");
saurabh.city = "JK";
//! Getters & Setters(No Return Type)
// private(only in the class)
// protected(in class, as well as child class)
// public(even outside the class)
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._id = 456;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getUserEmail() {
        return this.email;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Very Big Error");
        }
        this._courseCount = courseNum;
    }
}
const saurabh2 = new User2("jk@jk.com", "jk");
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
