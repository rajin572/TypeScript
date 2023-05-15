
import {logIfString as logString } from './function'
// // Problem 1

// function repeatString(str: string, num: number = 3): void {
//     for (let i = 0; i < num; i++) {
//       console.log(str);
//     }
//   }

//   repeatString("hello"); // logs "hello" three times
// repeatString("world", 2); // logs "world" five times



// //Problem 2

// interface Person20 {
//     name: string;
//     age: number;
//   }
  
//   function filterAdults(arr: Person20[]): Person20[] {
//     return arr.filter(person => person.age >= 18);
//   }

//   const people10: Person20[] = [
//     { name: "Alice", age: 21 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 14 },
//   ];
  
//   const adults = filterAdults(people10);
// //   console.log(adults); 

// // Problem 3

// const hiFriends2 = (...friends:string[]):string[] => {
//     return friends.reverse()
// }


// const ami1: string = 'fff'
// const tmi2: string = 'kff'
// const jmi3: string = 'kkf'
// const lmi4: string = 'kkk'

// // console.log(hiFriends2(ami1, tmi2, lmi4, jmi3));


// // Problem 4

// // class Person {
// //     constructor(private name: string, private age: number) {}
  
// //     public getDetails(): string {
// //       return `Name: ${this.name}, Age: ${this.age}`;
// //     }
// //   }
  
// //   class Student extends Person {
// //     constructor(name: string, age: number, private grade: string) {
// //       super(name, age);
// //     }
  
// //     public getGrade(): string {
// //       return `Grade: ${this.grade}`;
// //     }
// //   }
  

// //   const person = new Person("Alice", 21);
// // console.log(person.getDetails()); // Output: "Name: Alice, Age: 21"

// // const student = new Student("Bob", 18, "A");
// // console.log(student.getDetails()); // Output: "Name: Bob, Age: 18"
// // console.log(student.getGrade()); // Output: "Grade: A"


//Problem 5

function logIfString(param: unknown): void {
    if (typeof param === "string") {
      console.log(param);
    } else {
      console.error("Parameter is not a string.");
    }
  }

// logString("hello"); // logs "hello"
// logString(42); // logs "Parameter is not a string."
