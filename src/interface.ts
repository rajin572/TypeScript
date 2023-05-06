// interface are same as type alias
// interface are mostly uses to declear object type

interface IUser{
    name: string,
    roll: number
}

interface IProUser extends IUser{
    subject: string
}

const student: IProUser = {
    name: 'ss',
    roll: 5,
    subject: 'accounting'
}