"use strict";
/*
--------------------------Type Assertion------------------------

Type Assertion: Type assertion is a Typescript technique that tells the compiler the variable type. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.


_________________________________________________________________
*/
let emni;
emni = "next level web developement";
emni.length;
// or
emni.length;
try {
}
catch (err) {
    console.log(err.massage);
}
{
    //
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    // (anything as number).
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
