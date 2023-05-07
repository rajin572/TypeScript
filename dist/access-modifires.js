"use strict";
//Public : it will be access from anywhare 
//Private: It will be access only its class
//Protector: It will be acess within classes 
class Bank {
    constructor(name, id, _blance, _bank) {
        this.name = name;
        this.id = id;
        this._blance = _blance;
        this._bank = _bank;
    }
    getDeposti(money) {
        const newBlance = this._blance + money;
        console.log(`My new blance is ${newBlance}`);
    }
}
const bankuser = new Bank('fuchka wala', 5555, 5000, 'sonali Bank');
bankuser.getDeposti(80);
