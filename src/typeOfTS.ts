// write code
const course: string = 'next level web development I am ready'
const courseUser: string = 'Din Islam rajin yo yo khaba naki '
// console.log(course, courseUser);

// Array
let names: string[] = ['dada', 'nana']

// Touple

let data: [number, string] = [1, 'sampoo']

// object
const users :{
    readonly student: boolean
    university: 'Kabi Nazrul'
    name: string,
    id: number,
    phone: number,
    relation: boolean
    partner?: string
} = {
    university: 'Kabi Nazrul',
    name:"Din Islam Rajin",
    student: true,
    id: 5,
    phone: 1647742754,
    relation: true,
    partner: 'mim'
}
// users.student = 5


// Function
function add(num1:number, num2:number):number {
    return num1 + num2
}


const multiple = (num1:number, num2:number):number => num1*num2


const person:
{
    name:string;
    balance: number;
    addMoney(money:number):void;
} = {
    name: 'rajin',
    balance: 5,
    addMoney(money){
        console.log(this.balance + money)
    }
}


