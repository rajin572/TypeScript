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

// //type alias

// type oparationType = (x:number,y:number) => number 

// const calculator = (num1:number, num2:number, oparation : oparationType) => {
//     return oparation(num1, num2)
// }

// console.log(calculator(10, 20, (x,y) => x+y));


// default parameter
const infinity = (num1: number, num2: number = 20):number =>num1+num2
