"use strict";
// spread
const myFriends = ['salauddin', 'rokon', 'sourov', 'alif', 'humayra'];
const newFriend = ['arpa', 'noor', 'nipu'];
myFriends.push(...newFriend);
// -----------------------------------------------------------------------------------------
// rest
const hiFriends = (...friends) => {
    return friends.reverse();
};
const ami = 'fff';
const tmi = 'kff';
const jmi = 'kkf';
const lmi = 'kkk';
console.log(hiFriends(ami, tmi, lmi, jmi));
