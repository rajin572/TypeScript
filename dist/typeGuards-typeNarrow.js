"use strict";
//______________________Key Of Guard_______________________________
const addNumber1 = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
const checkUser12 = (user) => {
    if ('role' in user) {
        console.log(`I am ${user.name} and I am an ${user.role}`);
    }
    else {
        console.log(`I am ${user.name} and I a visitor`);
    }
};
const user420 = {
    name: 'Kuddus',
    role: 'admin'
};
// checkUser12(user420)
//________________________________instace of Guard (class and object)______________________________
class Player {
    constructor(name, jersyNum) {
        this.name = name;
    }
    winToffee() {
        console.log('I won a toffee');
    }
}
class CricketPlayer extends Player {
    constructor(name, jersyNum) {
        super(name, jersyNum);
    }
    winICC() {
        console.log('I won ICC World Cup');
    }
}
class FootballPlayer extends Player {
    constructor(name, jersyNum) {
        super(name, jersyNum);
    }
    winFIFA() {
        console.log('I won FIFA World Cup');
    }
}
const isCricker = (player) => {
    return player instanceof CricketPlayer;
};
const ifFootballer = (player) => {
    return player instanceof FootballPlayer;
};
const checkPlayer = (player) => {
    if (isCricker(player)) {
        player.winICC();
    }
    else if (ifFootballer(player)) {
        player.winFIFA();
    }
    // if(player instanceof CricketPlayer){ //easy way
    //     player.winICC()
    // }
    // else if (player instanceof FootballPlayer) {
    //     player.winFIFA()
    // }
};
const cricketPlayer1 = new CricketPlayer('shakib', 1);
checkPlayer(cricketPlayer1);
