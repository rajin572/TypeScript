"use strict";
var _a, _b, _c, _d;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
    //nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentaddress: "ctg town",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
    //
}
// Ternary operatior
const age = 2;
const isAdult = age >= 18 ? "yes" : "no";
// console.log(isAdult);
// -----------------------------------------------------------------------------------------
// Nullish coalesing operator
const authenticateUser = null;
const isUser = authenticateUser !== null && authenticateUser !== void 0 ? authenticateUser : "guest";
const user2 = authenticateUser ? authenticateUser : "guest";
console.log(isUser, user2);
const newUser = {
    name: "rajin",
    age: 22,
    address: {
        city: "dhaka",
        street: "gopibag",
        home: "4th lane",
    },
};
const home = (_d = (_c = newUser === null || newUser === void 0 ? void 0 : newUser.address) === null || _c === void 0 ? void 0 : _c.home) !== null && _d !== void 0 ? _d : "No Home";
console.log(home);
