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

const TupleArray : GenericTuple<string, number> = ['n', 0]