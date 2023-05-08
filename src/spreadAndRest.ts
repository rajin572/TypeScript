// spread
const myFriends:string[] = ['salauddin', 'rokon', 'sourov', 'alif', 'humayra']
const newFriend:string[] = ['arpa', 'noor', 'nipu']
myFriends.push(...newFriend)


// -----------------------------------------------------------------------------------------



// rest
const hiFriends = (...friends:string[]):string[] => {
    return friends.reverse()
}


const ami: string = 'fff'
const tmi: string = 'kff'
const jmi: string = 'kkf'
const lmi: string = 'kkk'

console.log(hiFriends(ami, tmi, lmi, jmi));