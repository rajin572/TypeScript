class Person {
    constructor(public name: string, public age: number, public address: string) {

    }
    makeSleep(time: number) {
        console.log(`${this.name} will sleep at ${time}`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, address: string, public privateTutor: boolean) {
        super(name, age, address)
    }

    totalHoursOfClass(hours: number) {
        console.log(`${this.name} will work ${hours} hours in a week`);

    }
}


const student1 = new Student('akaimma', 25, 'bodna bajar');
student1.makeSleep(8)
student1.makeSleep(80)

const teacher1 = new Teacher('nut boltu', 50, 'rastay thaki beton kom', true)
teacher1.totalHoursOfClass(2)