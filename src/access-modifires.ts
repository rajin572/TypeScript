//Public : it will be access from anywhare 
//Private: It will be access only its class
//Protector: It will be acess within classes 


class Bank {
    constructor(public name: string, public id: number, protected _blance: number, private _bank: 'sonali Bank'){

    }
    getDeposti(money:number){
        const newBlance:number = this._blance + money 
        console.log(`My new blance is ${newBlance}`);
    }
}


const bankuser = new Bank('fuchka wala', 5555, 5000, 'sonali Bank')
bankuser.getDeposti(80)