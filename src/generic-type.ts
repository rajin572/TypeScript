/*
-----------------------------------------------Generic Type---------------------------------------------

Generic: TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. 

__________________________________________________________________________________________________________
*/


//_____________using string___________
type GenericString <T> = T

const string : GenericString <string> = 'kuddus' 



//_______________using Array______________
type GenericArray<T> = Array<T>   


const newArray : GenericArray<string> = ['b', 'c', 'd']

type userType = {
    id: number,
    name: string,
}

const userArray : GenericArray<userType> = [
    {
        name: 'rajin',
        id: 5
    }
]



type GenericTuple<X, Y> = [X, Y] //also we can pass 2 aegumanet as a parameter

const TupleArray : GenericTuple<string, number> = ['n', 0];





//____________________Using Object___________________


interface GenericData <T, U = null> { // Generic using Interface
    name: string,
    husband: T,
    child?: U
}

const  data1 : GenericData <boolean, number> = {
    name: 'raja r bou',
    husband: false,
    child: 4
} 


//_____________Using Function_______________

const addToArray = <T>( params: T ): T[] => {
    return [params]
}
const add1 = addToArray<string>('dada')
const add2 = addToArray<boolean>(true)

interface IName <T, U = undefined >{
    name: string,
    age: number,
    wife: T,
    wifeName?: U
}

const add3 = addToArray<IName<boolean, string>>({
    name:'rajin',
    age: 22,
    wife: true,
    wifeName: 'Mithila'
})


//another example
const addLove = <T> (myInfo: T) => {
    const crushName = "Priyanka";
    let createLove:object;
    return (createLove = {...myInfo, crushName})
}

const mySelf2 = {
    name:'My Self Alan Shopon',
    age: 20,
    salary: 2000000
}

const myData1 = addLove<object>(mySelf2)


