// Ternary operatior
const age = 2;

const isAdult = age >= 18 ? 'yes' : 'no'

// console.log(isAdult);


// -----------------------------------------------------------------------------------------


// Nullish coalesing operator 

const authenticateUser = null;

const isUser = authenticateUser ?? 'guest'
const user2 = authenticateUser ? authenticateUser : 'guest'
console.log(isUser , user2)


// -----------------------------------------------------------------------------------------


// optinal chaining 

type address = {
    city: string,
    street: string,
    home?: string
}

type user = {
    name: string,
    age: number,
    address: address
}

const newUser:user = {
    name: 'rajin',
    age: 22,
    address:{
        city: 'dhaka',
        street: 'gopibag',
        home: '4th lane'
    }
}

const home = newUser?.address?.home ?? 'No Home'

console.log(home);
