"use strict";
//! typeof is known as type guard | type narrowing
function detectType(val) {
    if (typeof val === "number") {
        return val + 3;
    }
    return val.toUpperCase();
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID.");
        return;
    }
    return id.toUpperCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//! instanceof, whenever there is a new keyword
// (if x is an object or not)
function logValue(x) {
    if (x instanceof Date) {
        return x.toUTCString();
    }
    return x.toUpperCase();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.side * shape.side;
        default:
            const _exhaustiveCase = shape;
            return _exhaustiveCase;
    }
}
