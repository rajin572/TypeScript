"use strict";
class Animal {
    // name:string;
    // species: string;
    // sound: string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name =name,
        // this.species = species,
        // this.sound = sound
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('shohagi', 'cat', 'mew mew');
dog.makeSound();
