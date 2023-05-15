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



// default parameter
const infinity = (num1: number, num2: number = 20):number =>num1+num2



//Function signeture 

type addnumberType = (num1: number, num2: number) => number

const addNumber : addnumberType = (num1,  num2) => num1 + num2 

type myoparationType = (x:number,y:number) => number 

const myCalculator = (num1:number, num2:number, oparation : myoparationType) => {
    return oparation(num1, num2)
}

console.log(myCalculator(10, 20, (x,y) => x+y));


//Problem 5

export function logIfString(param: unknown): void {
    if (typeof param === "string") {
      console.log(param);
    } else {
      console.error("Parameter is not a string.");
    }
  }


