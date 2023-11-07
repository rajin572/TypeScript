// pick
interface IuserData  {
    name: string;
    email: string;
    contactNo: number
}

type Email = Pick<IuserData, "email">
type contact = Pick<IuserData, "email" | "contactNo">

const a21:contact = {
    email: 'fdsfds',
    contactNo: 21515
}

//Omit

type contact2 = Omit<IuserData, "name"> 

//Partial

type user200 = Partial<IuserData>

//Required

type requireUser = Required<IuserData>

//Read Only

const person100: Readonly<IuserData> = {
    name: 'rajin',
    email: 'din.gmail.com',
    contactNo: 151515
} 


// Record

// using index signeture
type myObj = {
    [key: string]: string
}

// but we can defind it with specific key by using record
type MyOBJ = Record<'a'| 'b'| 'c' , string>

const MyOBJData: MyOBJ = {
    a :'dfd',
    b : 'f',
    c : 'ssds'
} 