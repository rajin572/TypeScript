// spread
const myFriends:string[] = ['salauddin', 'rokon', 'sourov', 'alif', 'humayra']
const newFriend:string[] = ['arpa', 'noor', 'nipu']
myFriends.push(...newFriend)


// -----------------------------------------------------------------------------------------



// rest
const hiFriends = (...friends:string[]):string[] => {
    return friends
}

console.log(myFriends);