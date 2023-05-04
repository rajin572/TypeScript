"use strict";
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
