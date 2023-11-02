"use strict";
//
//* union types
const fullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
};
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["senior"] = "senior";
    Level["mid"] = "mid";
})(Level || (Level = {}));
const developer = {
    // | sing reffers to union
    name: "rajin",
    position: "web developer",
    expertise: "react",
    experience: 5,
    // level: Level.junior
    level: "senior",
};
