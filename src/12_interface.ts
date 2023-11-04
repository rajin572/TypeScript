/*
---------------------------------Interface------------------------------------


Interface: In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

=> interface are same as type alias
=> interface are mostly uses to declear object type

_____________________________________________________________________________________
*/

interface IUser {
  name: string;
  roll: number;
}

interface IProUser extends IUser {
  subject: string;
}

const student: IProUser = {
  name: "ss",
  roll: 5,
  subject: "accounting",
};

// in function
interface Iaddnum {
  (num1: number, num2: number): number;
}

const addnum: Iaddnum = (num1, num2) => num1 + num2;

// in array

interface Iarray {
  [index: number]: number;
}

const numArray: Iarray = [1, 2, 5];

{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Persian",
    age: 100,
    role: "manager",
  };

  type rollNumber = number;

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  // 0 1 2 --> number type

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
