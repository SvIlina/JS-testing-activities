import { expect } from 'chai';

describe('First Test', () => {
    before(() => {
        console.log('Before all tests');
    });

    after(() => {
        console.log('After all tests');
    });

    beforeEach(() => {
        console.log('Before each test');
    });

    afterEach(() => {
        console.log('After each test');
    });

    it('2 + 2 = 4', () => {
        expect(2 + 2).to.equal(4);
    });

    it('2 + 2 != 5', () => {
        expect(2 + 2).to.not.equal(5);
    });

    describe('Nested Test', () => {
        it('3 * 3 = 9', () => {
            expect(3 * 3).to.equal(9);
        });
    });
});
