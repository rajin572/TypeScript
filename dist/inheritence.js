"use strict";
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(time) {
        console.log(`${this.name} will sleep at ${time}`);
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
class Teacher extends Person {
    constructor(name, age, address, privateTutor) {
        super(name, age, address);
        this.privateTutor = privateTutor;
    }
    totalHoursOfClass(hours) {
        console.log(`${this.name} will work ${hours} hours in a week`);
    }
}
const student1 = new Student('akaimma', 25, 'bodna bajar');
student1.makeSleep(8);
student1.makeSleep(80);
const teacher1 = new Teacher('nut boltu', 50, 'rastay thaki beton kom', true);
teacher1.totalHoursOfClass(2);
