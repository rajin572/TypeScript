"use strict";
class specialPerson {
    takeNap() {
        console.log('I will sleep for 8 hours per day');
    }
}
class specialStudent extends specialPerson {
    takeNap() {
        console.log('I will sleep for 10 hours per day');
    }
}
class specialDeveloper extends specialPerson {
    takeNap() {
        console.log('I will sleep for 6 hours per day');
    }
}
const getNap = (user) => {
    user.takeNap();
};
const userA = new specialPerson();
const userB = new specialStudent();
const userC = new specialDeveloper();
// getNap(userA)
// getNap(userB)
// getNap(userC)
//Another Example
class Shape {
    getShape() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(redius) {
        super();
        this.redius = redius;
    }
    getShape() {
        return Math.PI * this.redius * this.redius;
    }
}
class Reqtengle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getShape() {
        return this.width * this.height;
    }
}
const getShapeResult = (shape) => {
    console.log(shape.getShape());
};
getShapeResult(new Circle(10));
getShapeResult(new Reqtengle(10, 12));
