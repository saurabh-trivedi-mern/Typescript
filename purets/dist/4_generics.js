"use strict";
const score = [];
const names = [];
// We want the return type as same data type
//! Problem is we do not know which data type will come in return
function identityOne(val) {
    return val;
}
//! Problem is we do not know which data type will come in return
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour({ brand: "Cello", type: 4 });
function getSearchProducts(products) {
    const myIndex = 1;
    return products[myIndex];
}
//! comma to identify it is generic
const getMoreProducts = (products) => {
    const myIndex = 1;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// anotherFunction(3, "5")
anotherFunction(3, 8);
function dbFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
dbFunction(3, { dbId: 759, dbName: "JK DB" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
