import { PeopleAccount } from '../PeopleAccount';

describe('PeopleAccount', () => {
    const people: PeopleAccount = new PeopleAccount(1, 'People', 10);
    it('should get name correct', () => {
        expect(people.getName()).toBe('People');
    });

    it('should deposit 150 in account', () => {
        people.deposit(150);
        expect(people.getBalance()).toBe(150);
    });

    it('should withdraw 50 in account', () => {
        people.withdraw(50);
        expect(people.getBalance()).toBe(100);
    });

    it('should withdrawing more than the account balance should invalid message', () => {
        expect(people.withdraw(500)).toBe('Valor inválido');
    });

    it('should deposit negative value throw invalid message', () => {
        expect(people.deposit(-500)).toBe('Valor inválido');
    });

    it('should invalid message when deposite status false', () => {
        people.disableAccount()
        expect(people.deposit(500)).toBe('Conta inválida');
    });


    it('should invalid message when withdraw status false', () => {
        people.disableAccount()
        expect(people.withdraw(10)).toBe('Conta inválida');
    });


    it('should toggle status true', () => {
        people.disableAccount()
        people.activeAccount()
        people.deposit(10)
        expect(people.getBalance()).toBe(110);
    });
   
});
