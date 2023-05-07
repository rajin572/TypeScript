//Public : it will be access from anywhare 
//Private: It will be access only its class
//Protector: It will be acess within classes 


class Bank {
    constructor(public name: string, public id: number, protected _blance: number, private _bank: 'sonali Bank'){

    }

    // getBalance (): number {
    //     return this._blance
    // }

    get balance(): number {  //Getter
        return this._blance
    }
    
    getDeposti(money:number){
        const newBlance:number = this._blance + money 
        console.log(`My new blance is ${newBlance}`);
    }

    set deposit(money:number){
        this._blance = this._blance + money
    }
}


const bankuser = new Bank('fuchka wala', 5555, 500, 'sonali Bank')
bankuser.getDeposti(80)

bankuser.deposit = 50000

console.log(bankuser.balance);
