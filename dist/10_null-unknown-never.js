"use strict";
// Nullable Type
const check = (value) => {
    if (value === null) {
        console.log("data cannot found");
    }
    else {
        console.log(value);
    }
};
// check(null)
// -----------------------------------------------------------------------------------------
// unknown Type
const checkSpeed = (value) => {
    if (typeof value === "number") {
        const metterPerSec = (value * 1000) / 3600;
        console.log(`Your Speed In Metter Per Sec is ${metterPerSec}`);
    }
    else if (typeof value === "string") {
        const [speed, unit] = value.split(" ");
        const metterPerSec = (parseFloat(speed) * 1000) / 3600;
        console.log(`Your Speed In Metter Per Sec is ${metterPerSec}`);
    }
    else {
        console.log("Data is not defind");
    }
};
checkSpeed(10);
checkSpeed("20 km/sec");
checkSpeed(null);
// -----------------------------------------------------------------------------------------
// Never Type
const throwError = (value) => {
    throw new Error(value);
};
throwError("type  error");
//* Another Example
{
    // nullable types / unknown types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    // unknown  typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond(null);
    //never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("mushkil se error hogaya");
    //
}
