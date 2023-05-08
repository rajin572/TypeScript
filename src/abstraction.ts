// using interface 

interface IVehicle {
    startCar():void
    stopCar():void
    moveCar():void
}

class Vehicle implements IVehicle{
    startCar(): void {
        console.log('started car')
    }
    stopCar(): void {
        console.log('car stoped')
    }
    moveCar(): void {
        console.log('moved car')
    }
}

// const vehicle1 = new Vehicle()
// vehicle1.startCar()
// vehicle1.moveCar()
// vehicle1.stopCar()

//using abstraction

abstract class Vehicle1 {
    abstract startCar():void
    abstract stopCar():void
    abstract moveCar():void
}

class Car1 extends Vehicle1 {
    startCar(): void {
        console.log('started car');
    }
    stopCar(): void {
        console.log('stoped car')
    }
    moveCar(): void {
        console.log('moved car')
    }
}

const newcar = new Car1 ()

newcar.moveCar()