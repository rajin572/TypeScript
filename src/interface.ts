/*
---------------------------------Interface------------------------------------


Interface: In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

=> interface are same as type alias
=> interface are mostly uses to declear object type

_____________________________________________________________________________________
*/



interface IUser {
    name: string,
    roll: number
}

interface IProUser extends IUser {
    subject: string
}

const student: IProUser = {
    name: 'ss',
    roll: 5,
    subject: 'accounting'
}


// in function
interface Iaddnum {
    (num1: number, num2: number): number
}

const addnum: Iaddnum = (num1, num2) => num1 + num2

// in array

interface Iarray {
    [index: number]: number
}

const numArray: Iarray = [1, 2, 5]