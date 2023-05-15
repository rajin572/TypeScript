"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIfString = void 0;
// Function
function add(num1, num2) {
    return num1 + num2;
}
const multiple = (num1, num2) => num1 * num2;
const person = {
    name: 'rajin',
    balance: 5,
    addMoney(money) {
        console.log(this.balance + money);
    }
};
// default parameter
const infinity = (num1, num2 = 20) => num1 + num2;
const addNumber = (num1, num2) => num1 + num2;
const myCalculator = (num1, num2, oparation) => {
    return oparation(num1, num2);
};
console.log(myCalculator(10, 20, (x, y) => x + y));
//Problem 5
function logIfString(param) {
    if (typeof param === "string") {
        console.log(param);
    }
    else {
        console.error("Parameter is not a string.");
    }
}
exports.logIfString = logIfString;
