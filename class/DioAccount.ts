export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    };

    deposit = (deposit: number): void => {
        if (this.validateStatus() && deposit > 0) {
            this.balance += deposit;
            console.log('Voce depositou');
        }
    };

    withdraw = (withdraw: number): void => {
        if (this.validateStatus() && this.balance > withdraw && withdraw > 0) {
            this.balance -= withdraw;
            console.log('Voce sacou');
        }
    };

    getBalance = (): void => {
        console.log(this.balance);
    };

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error('Conta inválida');
    };

    protected setBalance = (value: number) => {
        this.balance += value;
    };
}
