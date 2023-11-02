/*
------------------------------------Type Alias------------------------------

Type Alias: In TypeScript, type aliases are used to assign a name for any type. It doesn't create a new type. Instead, it provides a name for the type.



=> Type alias is used to defind the type 
=> we can defind types for object, array, string, function etc.


_______________________________________________________________________________
*/




// use type alias in object

type customeParants = {
    fatherName: string,
    motherName: string,
    numberOfSiblings: number,
    siblingsName?: string[]
}

type customePeople = {
    name: string,
    age: number,
    phone: number,
    parants: customeParants
}

const people: customePeople = {
    name: 'rajin',
    age: 22,
    phone: 8801647742754,
    parants:{
        fatherName: 'hasu',
        motherName: 'poly',
        numberOfSiblings: 1,
        siblingsName: ['siyam']
    }
}

// type alias in function


type oparationType = (x:number,y:number) => number 

const calculator = (num1:number, num2:number, oparation : oparationType) => {
    return oparation(num1, num2)
}

console.log(calculator(10, 20, (x,y) => x+y));