"use strict";
const owner1 = {
    bike: "Hero",
    car: "Volvo",
    ship: "Titanic",
};
const owner2 = "bike";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };
    const car = {
        model: "Toyota 100",
        year: 200,
    };
    const result1 = getPropertyValue(car, "model");
    // obj[key]   26
    //
    const getkey = (data, key) => {
        return data[key];
    };
    const user2 = {
        name: "Mr. Rajin",
        age: 22,
        address: "Dhaka",
    };
    const data = getkey(user2, "age");
    console.log(data);
}
