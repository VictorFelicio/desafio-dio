import { StatusValidationResult } from '../../types';

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

    deposit = (deposit: number): void | string => {
        const accountStatus = this.validateStatus();
        if (accountStatus.isValid) {
            if (deposit > 0) {
                this.balance += deposit;
            } else {
                return 'Valor inválido';
            }
        } else {
            return accountStatus.invalidAccount;
        }
    };

    withdraw = (withdraw: number): void | string => {
        const accountStatus = this.validateStatus();
        if (accountStatus.isValid) {
            if (withdraw < this.balance && withdraw > 0) {
                this.balance -= withdraw;
            } else {
                return 'Valor inválido';
            }
        } else {
            return accountStatus.invalidAccount;
        }
    };

    getBalance = (): number => {
        return this.balance;
    };

    protected validateStatus = (): StatusValidationResult => {
        if (this.status) {
            return {
                isValid: true,
            };
        }
        return {
            isValid: false,
            invalidAccount: 'Conta inválida',
        };
    };

    protected setBalance = (value: number) => {
        this.balance += value;
    };

    disableAccount = (): void => {
        this.status = false;
    };

    activeAccount = (): void => {
        this.status = true;
    };
}
