"use strict";
// write code
const course = 'next level web development I am ready';
const courseUser = 'Din Islam rajin yo yo khaba naki ';
// Array
let names = ['dada', 'nana'];
// Touple
let data = [1, 'sampoo'];
// object
const users = {
    university: 'Kabi Nazrul',
    name: "king cobra",
    student: true,
    id: 5,
    phone: 1647742754,
    relation: true,
    partner: 'mim'
};
// users.student = 5
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
// spread
const myFriends = ['salauddin', 'rokon', 'sourov', 'alif', 'humayra'];
const newFriend = ['arpa', 'noor', 'nipu'];
myFriends.push(...newFriend);
// rest
const hiFriends = (...friends) => {
    return friends;
};
console.log(myFriends);
