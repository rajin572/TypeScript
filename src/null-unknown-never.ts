// Nullable Type
const check = (value: string | null) => {
    if (value === null) {
        console.log('data cannot found');
    }
    else {
        console.log(value);
    }
}
// check(null)


// -----------------------------------------------------------------------------------------


// unknown Type
const checkSpeed = (value: unknown) => {
    if (typeof value === 'number') {
        const metterPerSec = (value * 1000) / 3600
        console.log(`Your Speed In Metter Per Sec is ${metterPerSec}`);
    }
    else if (typeof value === 'string') {
        const [speed, unit] = value.split(" ")
        const metterPerSec = (parseFloat(speed) * 1000) / 3600
        console.log(`Your Speed In Metter Per Sec is ${metterPerSec}`);
    }
    else {
        console.log('Data is not defind')
    }
}

checkSpeed(10)
checkSpeed('20 km/sec')
checkSpeed(null)


// -----------------------------------------------------------------------------------------

// Never Type

const throwError = (value: string): never => {
    throw new Error(value)
}

throwError('type  error')