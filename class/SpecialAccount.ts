import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

    specialDeposit = (value:number) =>{
        value =+ 0;
        this.deposit(value)
    }
}