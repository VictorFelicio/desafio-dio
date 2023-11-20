import { DioAccount } from "../DioAccount/DioAccount";

export class SpecialAccount extends DioAccount{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
    specialDeposit = (value:number) =>{
        value += 10;
        this.deposit(value)
    }
}