//
//* union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

//  type Developer = FrontendDeveloper | FullstackDeveloper

// const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

// type User ={
//   name: string;
//   email?: string;
//   gender:"male"| "female";
//   bloodGroup:"O+"|"A+"|"AB+"
// }

// const user1: User ={
//   name:'persian',
//   gender:'male',
//   bloodGroup:'O+'
// }

//* Intersection  Types
type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
  skills: ["HTML", "CSS", "EXPRESS"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

type noob = {
  name: string;
};

type junior = noob & {
  position: string;
  expertise: string;
};

enum Level { // enum isn't recommanded in TypeScript
  junior = "junior",
  senior = "senior",
  mid = "mid",
}

type nextLevel = junior & {
  // & sign reffers to intersection
  experience: number;
  // level: Level,
  level: "junior" | "mid" | "senior";
};

const developer: junior | nextLevel = {
  // | sing reffers to union
  name: "rajin",
  position: "web developer",
  expertise: "react",
  experience: 5,
  // level: Level.junior
  level: "senior",
};
