"use strict";
{
    class Vehicle {
        startCar() {
            console.log("started car");
        }
        stopCar() {
            console.log("car stoped");
        }
        moveCar() {
            console.log("moved car");
        }
    }
    // const vehicle1 = new Vehicle()
    // vehicle1.startCar()
    // vehicle1.moveCar()
    // vehicle1.stopCar()
    //using abstraction
    class Vehicle1 {
    }
    class Car1 extends Vehicle1 {
        startCar() {
            console.log("started car");
        }
        stopCar() {
            console.log("stoped car");
        }
        moveCar() {
            console.log("moved car");
        }
    }
    const newcar = new Car1();
    newcar.moveCar();
}
