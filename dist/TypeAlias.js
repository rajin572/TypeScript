"use strict";
//Type alias is used to defind the type 
// we can defind types for object, array, string, function etc.
const people = {
    name: 'rajin',
    age: 22,
    phone: 8801647742754,
    parants: {
        fatherName: 'hasu',
        motherName: 'poly',
        numberOfSiblings: 1,
        siblingsName: ['siyam']
    }
};
const calculator = (num1, num2, oparation) => {
    return oparation(num1, num2);
};
console.log(calculator(10, 20, (x, y) => x + y));
