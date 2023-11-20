import { CompanyAccount } from '../CompanyAccount';

describe('CompanyAccount', () => {
    const people: CompanyAccount = new CompanyAccount('People', 10);
    it('should get loan of 100 in account', () => {
        people.getLoan(100);
        expect(people.getBalance()).toBe(100);
    });
});
