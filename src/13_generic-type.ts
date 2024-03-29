/*
-----------------------------------------------Generic Type---------------------------------------------

Generic: TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. 

Constraints: A type constraint on a generic type parameter indicates a requirement that a type must fulfill in order to be accepted as a type argument for that type parameter. For each generic type variable that you'd like to constrain, you would append the extends SomeTypeName to the definition. (For example, it might have to be a given class type or a subtype of that class type, or it might have to implement a given interface.) 

__________________________________________________________________________________________________________
*/

{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(30, 20);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}

//_____________using string___________
type GenericString<T> = T;

const string: GenericString<string> = "kuddus";

//_______________using Array______________
type GenericArray<T> = Array<T>;

const newArray: GenericArray<string> = ["b", "c", "d"];

type userType = {
  id: number;
  name: string;
};

const userArray: GenericArray<{
  id: number;
  name: string;
}> = [
  {
    name: "rajin",
    id: 5,
  },
];

type GenericTuple<X, Y> = [X, Y]; //also we can pass 2 aegumanet as a parameter

const TupleArray: GenericTuple<string, number> = ["n", 0];

//____________________Using Object___________________

interface GenericData<T, U = null> {
  // Generic using Interface
  name: string;
  husband: T;
  child?: U;
}

const data1: GenericData<boolean> = {
  name: "raja r bou",
  husband: false,
  //   child: 4,
};

//_____________Using Function_______________

const addToArray = <T>(params: T): T[] => {
  return [params];
};
const add1 = addToArray<string>("dada");
const add2 = addToArray<boolean>(true);

interface IName<T, U = undefined> {
  name: string;
  age: number;
  wife: T;
  wifeName?: U;
}

const add3 = addToArray<IName<boolean, string>>({
  name: "rajin",
  age: 22,
  wife: true,
  wifeName: "Mithila",
});

//--------------------Constraints in Generic---------------------

interface IMendetory {
  name: string;
  age: number;
  salary: number;
}

const addLove = <T>(myInfo: T) => {
  const crushName = "Priyanka";
  let createLove: object;
  return (createLove = { ...myInfo, crushName });
};

interface IMySelf extends IMendetory {
  pets?: Array<string>;
}

const mySelf2: IMySelf = {
  name: "My Self Alan Shopon",
  age: 20,
  salary: 2000000,
  pets: ["Zoco"],
};

const myData1 = addLove(mySelf2);

///-------------------------Constraints using key of part--------------------

// interface IPerson10 {
//   name: string;
//   age: number;
//   salary: number;
// }

// type newType = "name" | "age" | "salary"; // manualy created

// type newTypeKeyOf = keyof IPerson10;

// const a: newTypeKeyOf = "salary";

//Example :

const getKey = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const person20 = {
  name: "rajin",
  age: 50,
};
const res = getKey(person20, "age");

console.log(res);
