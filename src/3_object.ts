// object
const users :{
    readonly student: boolean
    university: 'Kabi Nazrul'
    name: string,
    id: number,
    phone: number,
    relation: boolean
    partner?: string
} = {
    university: 'Kabi Nazrul',
    name:"king cobra",
    student: true,
    id: 5,
    phone: 1647742754,
    relation: true,
    partner: 'mim'
}
// users.student = 5


// Array of object

const usersStudent : Array<{id: number,name:string}> = [
    {
    id: 2,
    name:'rajin'
    },
    {
        id: 3,
        name: 'jamal'
    }
]