class specialPerson {
    takeNap(): void{
        console.log('I will sleep for 8 hours per day')
    }
}

class specialStudent extends specialPerson {
    takeNap(): void {
        console.log('I will sleep for 10 hours per day')
    }
}

class specialDeveloper extends specialPerson{
    takeNap(): void {
        console.log('I will sleep for 6 hours per day')
    }
}

const getNap = (user:specialPerson) => {
    user.takeNap()
}

const userA = new specialPerson()
const userB = new specialStudent()
const userC = new specialDeveloper()


// getNap(userA)
// getNap(userB)
// getNap(userC)



//Another Example

class Shape {
    getShape():number{
        return 0;
    }
}

class Circle extends Shape {
    constructor(public redius:number){
        super()
    }
    getShape(): number {
        return Math.PI * this.redius * this.redius
    }
}

class Reqtengle extends Shape{
    constructor(public height: number, public width:number){
        super()
    }

    getShape(): number {
        return this.width*this.height
    }
}

const getShapeResult = (shape: Shape) => {
    console.log(shape.getShape());
    
}

getShapeResult(new Circle(10))
getShapeResult(new Reqtengle(10, 12))