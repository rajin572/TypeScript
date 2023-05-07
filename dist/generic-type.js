"use strict";
/*
-----------------------------------------------Generic Type---------------------------------------------

Generic: TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.

Constraints: A type constraint on a generic type parameter indicates a requirement that a type must fulfill in order to be accepted as a type argument for that type parameter. For each generic type variable that you'd like to constrain, you would append the extends SomeTypeName to the definition. (For example, it might have to be a given class type or a subtype of that class type, or it might have to implement a given interface.)

__________________________________________________________________________________________________________
*/
const string = 'kuddus';
const newArray = ['b', 'c', 'd'];
const userArray = [
    {
        name: 'rajin',
        id: 5
    }
];
const TupleArray = ['n', 0];
const data1 = {
    name: 'raja r bou',
    husband: false,
    child: 4
};
//_____________Using Function_______________
const addToArray = (params) => {
    return [params];
};
const add1 = addToArray('dada');
const add2 = addToArray(true);
const add3 = addToArray({
    name: 'rajin',
    age: 22,
    wife: true,
    wifeName: 'Mithila'
});
const addLove = (myInfo) => {
    const crushName = "Priyanka";
    let createLove;
    return (createLove = Object.assign(Object.assign({}, myInfo), { crushName }));
};
const mySelf2 = {
    name: 'My Self Alan Shopon',
    age: 20,
    salary: 2000000,
    pets: ['Zoco']
};
const myData1 = addLove(mySelf2);
const a = 'age';
//Example : 
const getKey = (obj, key) => {
    return obj[key];
};
const person20 = {
    name: 'rajin',
    age: 50
};
const res = getKey(person20, 'age');
