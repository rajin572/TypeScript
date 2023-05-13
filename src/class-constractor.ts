class Animal {  // in this code we are decler proparties every time. this is not the good practice
    // name:string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string) { // by set public in every proparties into the constractor we don't declear proparties name each time
        // this.name =name,
        // this.species = species,
        // this.sound = sound
    }

    public makeSound() {
        console.log(`${this.name} says ${this.sound}`);

    }
}

const dog = new Animal('shohagi', 'cat', 'mew mew')
dog.makeSound()
