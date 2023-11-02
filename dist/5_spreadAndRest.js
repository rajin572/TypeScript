"use strict";
// spread
const myFriends = ["salauddin", "rokon", "sourov", "alif", "humayra"];
const newFriend = ["arpa", "noor", "nipu"];
myFriends.push(...newFriend);
const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
};
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
};
const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
// -----------------------------------------------------------------------------------------
// rest
const hiFriends = (...friends) => {
    return friends.reverse();
};
const ami = "fff";
const tmi = "kff";
const jmi = "kkf";
const lmi = "kkk";
console.log(hiFriends(ami, tmi, lmi, jmi));
