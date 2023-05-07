//______________________Key Of Guard_______________________________

type AlphaNewmaric = number | string

const addNumber1 = (num1: AlphaNewmaric, num2: AlphaNewmaric):AlphaNewmaric => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else{
        return num1.toString() + num2.toString()
    }
}

// console.log(addNumber1('1', '5'));




//________________________In Guard (to guard object)_______________________

interface INormalUser {
    name: string;
}

interface IAdmin extends INormalUser{
    role: 'admin'
}

const checkUser12 = (user: INormalUser | IAdmin) => {
    if('role' in user) {
        console.log(`I am ${user.name} and I am an ${user.role}`);
    }
    else{
        console.log(`I am ${user.name} and I a visitor`);
        
    }
    
}

const user420: IAdmin = {
    name: 'Kuddus',
    role:'admin'
} 

// checkUser12(user420)


//________________________________instace of Guard (class and object)______________________________

class Player {
    constructor(public name: string, jersyNum: number){

    }
    winToffee(){
        console.log('I won a toffee');
        
    }
}

class CricketPlayer extends Player {
    constructor(name: string, jersyNum: number){
        super(name, jersyNum)
    }
    winICC(): void {
        console.log('I won ICC World Cup');
    }
}

class FootballPlayer extends Player {
    constructor(name: string, jersyNum: number){
        super(name, jersyNum)
    }
    winFIFA(): void {
        console.log('I won FIFA World Cup');
    }
}


const isCricker = (player: Player): player is CricketPlayer => {
    return player instanceof CricketPlayer
}

const ifFootballer = (player: Player): player is FootballPlayer => {
    return player instanceof FootballPlayer
}

const checkPlayer = (player: Player) => {

    if(isCricker(player)){
        player.winICC()
    }
    else if(ifFootballer(player)){
        player.winFIFA()
    }



    // if(player instanceof CricketPlayer){ //easy way
    //     player.winICC()
    // }
    // else if (player instanceof FootballPlayer) {
    //     player.winFIFA()
    // }
}

const cricketPlayer1 = new CricketPlayer('shakib', 1)

checkPlayer(cricketPlayer1)

