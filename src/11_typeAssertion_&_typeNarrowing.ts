/*
--------------------------Type Assertion------------------------

Type Assertion: Type assertion is a Typescript technique that tells the compiler the variable type. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.


_________________________________________________________________
*/

let emni: any;

emni = "next level web developement";

(emni as string).length;
// or
<string>emni.length;

type customeError = {
  massage: string;
};

try {
} catch (err) {
  console.log((err as customeError).massage);
}

{
  //

  // type assertion
  let anything: any;

  anything = "Next Level Web Development";

  anything = 222;

  // (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000");

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
