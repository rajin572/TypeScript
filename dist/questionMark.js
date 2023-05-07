"use strict";
var _a, _b;
// Ternary operatior
const age = 2;
const isAdult = age >= 18 ? 'yes' : 'no';
// console.log(isAdult);
// -----------------------------------------------------------------------------------------
// Nullish coalesing operator 
const authenticateUser = null;
const isUser = authenticateUser !== null && authenticateUser !== void 0 ? authenticateUser : 'guest';
const user2 = authenticateUser ? authenticateUser : 'guest';
console.log(isUser, user2);
const newUser = {
    name: 'rajin',
    age: 22,
    address: {
        city: 'dhaka',
        street: 'gopibag',
        home: '4th lane'
    }
};
const home = (_b = (_a = newUser === null || newUser === void 0 ? void 0 : newUser.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log(home);
