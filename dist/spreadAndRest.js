"use strict";
// spread
const myFriends = ['salauddin', 'rokon', 'sourov', 'alif', 'humayra'];
const newFriend = ['arpa', 'noor', 'nipu'];
myFriends.push(...newFriend);
// -----------------------------------------------------------------------------------------
// rest
const hiFriends = (...friends) => {
    return friends;
};
console.log(myFriends);
