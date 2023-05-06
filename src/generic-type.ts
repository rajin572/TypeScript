//

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


//also we can pass 2 aegumanet as a parameter
type GenericTuple<X, Y> = [X, Y]

const TupleArray : GenericTuple<string, number> = ['n', 0];


// Generic using Interface

interface GenericData <T, U = null> {
    name: string,
    husband: T,
    child?: U
}

const  data1 : GenericData <boolean, number> = {
    name: 'raja r bou',
    husband: false,
    child: 4
} 