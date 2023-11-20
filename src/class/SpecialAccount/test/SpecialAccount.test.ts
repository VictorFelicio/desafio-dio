import { SpecialAccount } from "../SpecialAccount";

describe('SpecialAccount', () => {
    const special: SpecialAccount = new SpecialAccount('Special', 10);
    it('should get loan of 100 in account and balance is 110', () => {
        special.specialDeposit(100);
        expect(special.getBalance()).toBe(110);
    });
});
